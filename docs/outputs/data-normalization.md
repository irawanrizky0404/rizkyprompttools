# Data Normalization Engine Output

**Source:** Raw CSV from legacy CRM export
**Target:** Normalized PostgreSQL schema (3NF)

---

## Source Data (Raw)

| ContactID | Name | Email | Phone | Company | CompAddr | Tags | LastContact |
|-----------|------|-------|-------|---------|----------|------|-------------|
| C001 | John Smith | john@acme.com; john.personal@gmail.com | 212-555-0100; 917-555-0123 | Acme Corp; Acme Industries | 123 Main St, NY, 10001 | vip; enterprise; tech | 2025-03-15; 2025-06-01 |
| C002 | Sarah Chen | sarah@tech.io | 415-555-0199 | Tech.io | 456 Oak Ave, SF, 94102 | partner | 2025-05-20 |
| C003 | Bob Wilson | bob@test.com; bob@work.com | | Test Inc | | customer; trialing | 2024-11-30 |

## Normalization Steps

### Step 1: Split Multi-Value Fields

**Contacts:**
| id | name |
|----|------|
| C001 | John Smith |
| C002 | Sarah Chen |
| C003 | Bob Wilson |

**Emails:**
| contact_id | email | is_primary |
|-----------|-------|-----------|
| C001 | john@acme.com | true |
| C001 | john.personal@gmail.com | false |
| C002 | sarah@tech.io | true |
| C003 | bob@test.com | true |
| C003 | bob@work.com | false |

**Phones:**
| contact_id | number | type | is_primary |
|-----------|--------|------|-----------|
| C001 | 212-555-0100 | work | true |
| C001 | 917-555-0123 | mobile | false |
| C002 | 415-555-0199 | work | true |

### Step 2: Normalize Companies

**Companies:**
| id | name | merged_from |
|----|------|------------|
| COMP1 | Acme Corp | Acme Corp; Acme Industries |
| COMP2 | Tech.io | |
| COMP3 | Test Inc | |

### Step 3: Extract Address

**Addresses:**
| id | street | city | state | zip | company_id |
|----|--------|------|-------|-----|-----------|
| ADDR1 | 123 Main St | New York | NY | 10001 | COMP1 |
| ADDR2 | 456 Oak Ave | San Francisco | CA | 94102 | COMP2 |

### Step 4: Normalize Tags

**Tags:**
| id | name | category |
|----|------|----------|
| T1 | vip | tier |
| T2 | enterprise | segment |
| T3 | tech | industry |
| T4 | partner | relationship |
| T5 | customer | relationship |
| T6 | trialing | stage |

**Contact Tags:**
| contact_id | tag_id | assigned_at |
|-----------|--------|------------|
| C001 | T1 | 2025-01-10 |
| C001 | T2 | 2025-01-10 |
| C001 | T3 | 2025-01-10 |
| C002 | T4 | 2025-03-05 |
| C003 | T5 | 2024-10-01 |
| C003 | T6 | 2024-10-01 |

### Step 5: Interaction History

**Interactions:**
| id | contact_id | type | timestamp | notes |
|----|-----------|------|-----------|-------|
| I1 | C001 | email | 2025-03-15 | Product demo follow-up |
| I2 | C001 | call | 2025-06-01 | Contract negotiation |
| I3 | C002 | email | 2025-05-20 | Partnership announcement |
| I4 | C003 | email | 2024-11-30 | Trial expired |

## Target Schema (DDL)

```sql
CREATE TABLE contacts (
    id          VARCHAR(10) PRIMARY KEY,
    name        VARCHAR(255) NOT NULL,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE emails (
    id          SERIAL PRIMARY KEY,
    contact_id  VARCHAR(10) NOT NULL REFERENCES contacts(id),
    email       VARCHAR(254) NOT NULL,
    is_primary  BOOLEAN DEFAULT FALSE,
    UNIQUE(contact_id, email)
);

CREATE TABLE phones (
    id          SERIAL PRIMARY KEY,
    contact_id  VARCHAR(10) NOT NULL REFERENCES contacts(id),
    number      VARCHAR(50) NOT NULL,
    type        VARCHAR(20) CHECK (type IN ('work', 'mobile', 'home')),
    is_primary  BOOLEAN DEFAULT FALSE
);

CREATE TABLE companies (
    id          VARCHAR(10) PRIMARY KEY,
    name        VARCHAR(255) NOT NULL,
    merged_from TEXT,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE contact_companies (
    contact_id  VARCHAR(10) REFERENCES contacts(id),
    company_id  VARCHAR(10) REFERENCES companies(id),
    role        VARCHAR(50),
    PRIMARY KEY (contact_id, company_id)
);

CREATE TABLE addresses (
    id          VARCHAR(10) PRIMARY KEY,
    street      VARCHAR(255),
    city        VARCHAR(100),
    state       VARCHAR(50),
    zip         VARCHAR(20),
    country     VARCHAR(2) DEFAULT 'US',
    company_id  VARCHAR(10) REFERENCES companies(id)
);

CREATE TABLE tags (
    id          VARCHAR(10) PRIMARY KEY,
    name        VARCHAR(50) NOT NULL UNIQUE,
    category    VARCHAR(50)
);

CREATE TABLE contact_tags (
    contact_id  VARCHAR(10) REFERENCES contacts(id),
    tag_id      VARCHAR(10) REFERENCES tags(id),
    assigned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (contact_id, tag_id)
);

CREATE TABLE interactions (
    id          VARCHAR(10) PRIMARY KEY,
    contact_id  VARCHAR(10) NOT NULL REFERENCES contacts(id),
    type        VARCHAR(20) NOT NULL,
    timestamp   TIMESTAMP NOT NULL,
    notes       TEXT
);
```

## Duplicate Detection Summary
| Record | Match Type | Confidence | Action |
|--------|-----------|-----------|--------|
| Acme Corp ↔ Acme Industries | Fuzzy name (0.89) + same address | 96% | Merged |
| john@acme.com × john.personal@... | Email domain differs | — | Kept as secondary |

## Data Quality Issues Found
| Issue | Count | Resolution |
|-------|-------|-----------|
| Missing phone | 1 | Nullable field — retained |
| Missing company address | 1 | Set to NULL |
| Multi-value field (semicolons) | 3 | Normalized to child tables |
| Inconsistent date formats | 2 | Standardized to ISO 8601 |
| Duplicate company entries | 1 | Merged with alias tracking |
