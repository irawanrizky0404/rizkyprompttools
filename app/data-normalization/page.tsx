"use client";

import type { FC } from "react";
import {
  Database, FileSpreadsheet, Upload, Link, GitFork, GitBranch, Columns3, Terminal, Star, GitMerge,
  Key, Shield, Hash, Layers, ArrowLeftRight, Table2, Filter,
  Eye, Type, FunctionSquare, ArrowRight, ArrowUpDown, List,
  Container, GanttChart, Split,
  BarChart3, FileJson, FileText, RefreshCw, Clock,
  Workflow, Server, Cloud, HardDrive, Lock, Unlock,
  Forward, Rewind, Download, Upload as UploadIcon,
} from "lucide-react";
import { ToolShell } from "@/components/tool-wizard/tool-shell";
import { GenericStep } from "@/components/tool-wizard/generic-step";

const options = {
  dataSource: [
    { id: "csv-file", title: "CSV File", description: "Comma-separated values file import", icon: FileSpreadsheet },
    { id: "excel", title: "Excel Spreadsheet", description: "Microsoft Excel .xlsx or .xls import", icon: Table2 },
    { id: "json-api", title: "JSON API", description: "REST API returning JSON payload", icon: FileJson },
    { id: "database", title: "Existing Database", description: "Connect to SQL/NoSQL database directly", icon: Database },
    { id: "flat-file", title: "Flat / Delimited File", description: "TSV, pipe-delimited, or custom delimiter", icon: FileText },
    { id: "xml-feed", title: "XML Feed", description: "XML file or feed import", icon: Container },
    { id: "cloud-storage", title: "Cloud Storage", description: "S3, GCS, or Azure Blob import", icon: Cloud },
    { id: "manual-entry", title: "Manual Entry", description: "Manually typed or pasted data", icon: UploadIcon },
  ],
  entityIdentification: [
    { id: "autodetect", title: "Auto-Detect Entities", description: "AI-driven entity boundary detection", icon: Eye },
    { id: "manual-define", title: "Manual Definition", description: "User specifies entity boundaries manually", icon: Type },
    { id: "key-based", title: "Key-Based Grouping", description: "Group records by primary/foreign key patterns", icon: Key },
    { id: "schema-infer", title: "Schema Inference", description: "Infer entities from column naming conventions", icon: Columns3 },
    { id: "normalized-import", title: "From Normalized Import", description: "Entities already pre-defined in source", icon: Database },
    { id: "pattern-match", title: "Pattern Matching", description: "Identify entities via regex or naming patterns", icon: Filter },
    { id: "nested-extract", title: "Nested Extraction", description: "Extract entities from nested JSON/XML structures", icon: Layers },
    { id: "reference-lookup", title: "Reference Lookup", description: "Compare against known entity catalogs", icon: Link },
  ],
  normalForm: [
    { id: "1nf", title: "First Normal Form (1NF)", description: "Atomic columns, no repeating groups", icon: Hash },
    { id: "2nf", title: "Second Normal Form (2NF)", description: "1NF + full functional dependency on PK", icon: Hash },
    { id: "3nf", title: "Third Normal Form (3NF)", description: "2NF + no transitive dependencies", icon: Hash },
    { id: "bcnf", title: "Boyce-Codd (BCNF)", description: "Every determinant is a candidate key", icon: Hash },
    { id: "4nf", title: "Fourth Normal Form (4NF)", description: "BCNF + no multi-valued dependencies", icon: Hash },
    { id: "5nf", title: "Fifth Normal Form (5NF)", description: "4NF + join dependency preservation", icon: FunctionSquare },
    { id: "denormalized", title: "Denormalized", description: "Intentionally merge tables for read performance", icon: GitBranch },
    { id: "star-schema", title: "Star Schema", description: "Fact table + dimension tables for analytics", icon: Star },
  ],
  relationships: [
    { id: "one-to-one", title: "One-to-One", description: "Each entity A relates to exactly one entity B", icon: ArrowRight },
    { id: "one-to-many", title: "One-to-Many", description: "One entity A relates to many entities B", icon: ArrowLeftRight },
    { id: "many-to-many", title: "Many-to-Many", description: "Many A relate to many B via junction table", icon: GitMerge },
    { id: "self-ref", title: "Self-Referencing", description: "Entity relates to other instances of itself", icon: RefreshCw },
    { id: "hierarchical", title: "Hierarchical", description: "Parent-child tree structure", icon: GitFork },
    { id: "polymorphic", title: "Polymorphic", description: "Entity that can belong to multiple types", icon: Layers },
    { id: "weak-entity", title: "Weak Entity", description: "Entity that depends on a parent for existence", icon: Link },
    { id: "aggregate", title: "Aggregate / Composition", description: "Entity composed of multiple related sub-entities", icon: Container },
  ],
  constraints: [
    { id: "primary-key", title: "Primary Key", description: "Unique identifier for each row in a table", icon: Key },
    { id: "foreign-key", title: "Foreign Key", description: "Referential integrity between tables", icon: Link },
    { id: "unique", title: "UNIQUE Constraint", description: "Ensure all values in column(s) are distinct", icon: Shield },
    { id: "not-null", title: "NOT NULL", description: "Column must have a value", icon: Shield },
    { id: "check", title: "CHECK Constraint", description: "Enforce domain integrity via condition", icon: Filter },
    { id: "default", title: "DEFAULT Value", description: "Automatic value when none provided", icon: Clock },
    { id: "composite-key", title: "Composite Key", description: "Primary key composed of multiple columns", icon: Columns3 },
    { id: "exclusion", title: "Exclusion Constraint", description: "Prevent overlapping ranges or conflicts", icon: Shield },
  ],
  dataTypes: [
    { id: "integer", title: "Integer / INT", description: "Whole numbers, 4-byte signed", icon: Hash },
    { id: "bigint", title: "Big Integer / BIGINT", description: "Large whole numbers, 8-byte signed", icon: Hash },
    { id: "varchar", title: "Variable Char / VARCHAR", description: "Variable-length string with max limit", icon: Type },
    { id: "text", title: "Text / TEXT", description: "Unlimited length string content", icon: FileText },
    { id: "boolean", title: "Boolean / BOOL", description: "True/false logical values", icon: ArrowLeftRight },
    { id: "decimal", title: "Decimal / NUMERIC", description: "Exact precision fixed-point numbers", icon: FunctionSquare },
    { id: "timestamp", title: "Timestamp / DATETIME", description: "Date and time with optional timezone", icon: Clock },
    { id: "jsonb", title: "JSON / JSONB", description: "Structured JSON data storage", icon: FileJson },
  ],
  indexes: [
    { id: "btree", title: "B-Tree Index", description: "General-purpose balanced tree index", icon: Layers },
    { id: "hash", title: "Hash Index", description: "Equality-only index for fast lookups", icon: Hash },
    { id: "composite", title: "Composite Index", description: "Multi-column index for complex queries", icon: Columns3 },
    { id: "unique-index", title: "Unique Index", description: "Enforce uniqueness + query acceleration", icon: Shield },
    { id: "fulltext", title: "Full-Text Index", description: "Search-optimized index for text columns", icon: Eye },
    { id: "partial", title: "Partial Index", description: "Index on subset of rows (WHERE clause)", icon: Filter },
    { id: "covering", title: "Covering / INCLUDE Index", description: "Include non-key columns for index-only scans", icon: Container },
    { id: "spatial", title: "Spatial / GiST Index", description: "Geometric and geographic query index", icon: GitFork },
  ],
  migration: [
    { id: "script", title: "Migration Script", description: "Generate SQL migration DDL script", icon: Terminal },
    { id: "orm-sync", title: "ORM Sync", description: "Sync schema with ORM (Prisma, TypeORM)", icon: Database },
    { id: "incremental", title: "Incremental Migration", description: "Generate up/down migration pairs", icon: Forward },
    { id: "rollback-plan", title: "Rollback Plan", description: "Plan for reverting the migration safely", icon: Rewind },
    { id: "data-backup", title: "Data Backup First", description: "Backup affected tables before migration", icon: Server },
    { id: "dry-run", title: "Dry Run Preview", description: "Preview changes without applying them", icon: Eye },
    { id: "zero-downtime", title: "Zero-Downtime Plan", description: "Strategies to avoid service interruption", icon: Shield },
    { id: "export-schema", title: "Export Schema Doc", description: "Generate documentation of the schema", icon: FileText },
  ],
};

const dict: Record<string, Record<string, string>> = {
  dataSource: {
    "csv-file": "Import data from a CSV (comma-separated values) file. Handle headers, quoted fields, escaped commas, and encoding detection. Support delimiter auto-detection and column type inference from the first N rows.",
    excel: "Import data from Microsoft Excel workbooks (.xlsx or .xls). Read all sheets or specify a sheet name. Support cell formatting, merged cells, formula evaluation, and named ranges for structured import.",
    "json-api": "Fetch data from a REST API endpoint returning JSON. Support pagination (offset, cursor, or page-based), authentication headers, rate limiting, and JSONPath expressions for extracting the relevant array.",
    database: "Connect directly to an existing SQL or NoSQL database. Support PostgreSQL, MySQL, SQL Server, SQLite, MongoDB, and others. Execute a query or select a collection/table to pull data for normalization.",
    "flat-file": "Import delimited flat files such as TSV (tab-separated), pipe-delimited, or custom delimiter files. Handle header rows, quote characters, escape sequences, and line ending conventions across platforms.",
    "xml-feed": "Import data from XML files or XML feeds. Support XPath selection, namespace handling, attribute vs. element extraction, and large XML file streaming without loading the entire document into memory.",
    "cloud-storage": "Import data from cloud storage services including S3, Google Cloud Storage, and Azure Blob Storage. Support prefix/suffix filtering, region configuration, and signed URL access for temporary credentials.",
    "manual-entry": "Paste or type data directly into a grid interface. Support column headers, row-by-row entry, and basic validation. Best for small datasets that require quick normalization without file preparation.",
  },
  entityIdentification: {
    autodetect: "Use AI or heuristic-driven analysis to automatically identify entity boundaries in the source data. Detect repeating groups, key patterns, and semantic groupings to propose entity splits with confidence scoring.",
    "manual-define": "Allow the user to manually define entity boundaries by selecting columns and specifying entity names. Provides full control over the normalization process for domain experts who know the data well.",
    "key-based": "Identify entities by analyzing foreign key relationships and primary key patterns in the data. Columns that share prefix naming or appear as keys in other groups are likely separate entities to extract.",
    "schema-infer": "Infer entities from column naming conventions: prefix matching (e.g., cust_*, order_*), common suffixes (_id, _date), and embedded entity indicators. Generate entity proposals with column assignment suggestions.",
    "normalized-import": "Assume the source data is already normalized and entities are pre-defined. Import as-is with minimal transformation. Suitable for data sourced from a well-structured API or normalized database export.",
    "pattern-match": "Apply regex patterns and column naming conventions to identify entity groups. Match patterns like invoice_number, invoice_date, customer_name to group columns into entities with high precision.",
    "nested-extract": "Extract nested entities from denormalized structures like JSON objects, XML elements, or columns containing embedded arrays. Unfold nested records into separate tables with parent-child key mapping.",
    "reference-lookup": "Compare source data columns against known entity catalogs or reference data dictionaries. Common for data migration scenarios where target schema entities are pre-defined and source columns must be mapped.",
  },
  normalForm: {
    "1nf": "First Normal Form requires atomic column values (no repeating groups or arrays) and unique row identification. Eliminate multi-valued columns by creating separate rows. Ensure each cell contains a single value.",
    "2nf": "Second Normal Form requires 1NF plus full functional dependency on the primary key. Every non-key column must depend on the entire primary key. Move columns that depend on only part of a composite key to a related table.",
    "3nf": "Third Normal Form requires 2NF plus no transitive dependencies. Non-key columns must not depend on other non-key columns. Move dependent columns to a new table with the determining column as the key.",
    bcnf: "Boyce-Codd Normal Form is a stricter version of 3NF where every determinant must be a candidate key. Handles edge cases that 3NF misses when there are overlapping candidate keys. Adjust schema to satisfy all key constraints.",
    "4nf": "Fourth Normal Form requires BCNF plus no multi-valued dependencies. Separate independent multi-valued facts about an entity into different tables. Prevents unnecessary data duplication from independent one-to-many relationships.",
    "5nf": "Fifth Normal Form requires 4NF plus join dependency preservation. Tables must not be reconstructable from smaller projections. Rarely applied in practice but essential for theoretical completeness in complex schemas.",
    denormalized: "Intentionally merge normalized tables to improve read performance by reducing joins. Used in analytics, reporting, and read-heavy applications. Accept data redundancy in exchange for faster queries and simpler access patterns.",
    "star-schema": "Star schema organizes data into fact tables (measurable events) and dimension tables (descriptive attributes). Optimized for OLAP and business intelligence. Fact tables contain measures and foreign keys to dimensions.",
  },
  relationships: {
    "one-to-one": "One-to-one relationship: each row in entity A relates to exactly one row in entity B and vice versa. Implement via shared primary key or unique foreign key. Common for splitting sensitive columns into separate tables.",
    "one-to-many": "One-to-many relationship: each row in entity A relates to zero or more rows in entity B. The foreign key is placed in the 'many' table referencing the 'one' table. The most common relationship type in databases.",
    "many-to-many": "Many-to-many relationship: rows in entity A relate to multiple rows in entity B and vice versa. Requires a junction (associative) table with foreign keys referencing both entities. May carry additional attributes.",
    "self-ref": "Self-referencing relationship: a table has a foreign key pointing to its own primary key. Common for hierarchical data like organizational charts, category trees, and threaded comments with parent references.",
    hierarchical: "Hierarchical relationship defines a parent-child tree structure. Each entity (except roots) has one parent. Represented via adjacency list (parent_id), nested sets (left/right), or materialized path (path string).",
    polymorphic: "Polymorphic relationship: a table belongs to multiple parent types using a combination of a foreign key and a 'type' column. Used for comments on posts and photos, tags on various entities, and activity feeds.",
    "weak-entity": "Weak entity depends on a parent (identifying) entity for its existence. Its primary key contains the parent's primary key. Cannot exist without the parent. Common for line items, order details, and invoice lines.",
    aggregate: "Aggregate (composition) relationship: an entity is composed of multiple sub-entities that are tightly coupled. The sub-entities are typically accessed and manipulated together with the parent as a unit.",
  },
  constraints: {
    "primary-key": "Primary key uniquely identifies each row in a table. Usually a single column (SERIAL, UUID) or a composite of multiple columns. Automatically creates a unique index and enforces NOT NULL on the key columns.",
    "foreign-key": "Foreign key enforces referential integrity between two tables. Ensures values in the child table match values in the parent table's primary key. Supports CASCADE, SET NULL, or RESTRICT on update and delete.",
    unique: "UNIQUE constraint ensures no duplicate values in the specified column or column set. Allows NULL values (multiple NULLs are generally allowed). Automatically creates a unique index for enforcement.",
    "not-null": "NOT NULL constraint ensures a column cannot contain NULL values. Apply to columns that are semantically required for business logic. Without it, NULL is assumed for columns that may have missing data.",
    check: "CHECK constraint validates that column values satisfy a boolean expression. Examples: age >= 0, salary > 0, status IN ('active', 'inactive'). Enforced at the database level for data integrity.",
    default: "DEFAULT value is automatically assigned to a column when no explicit value is provided in an INSERT. Can be a literal, a function return value (NOW(), UUID_GENERATE_V4()), or an expression.",
    "composite-key": "Composite key uses two or more columns together to uniquely identify rows. Common in junction tables for many-to-many relationships. Each column typically references a foreign key from related tables.",
    exclusion: "Exclusion constraint prevents rows where specified columns or expressions conflict with each other. Supports range type overlaps, equality conflicts, and custom operator-based comparisons.",
  },
  dataTypes: {
    integer: "INTEGER stores whole numbers from -2,147,483,648 to 2,147,483,647 (4 bytes). Use for counts, IDs, and small-range numeric values. Choose BIGINT when the range may exceed ~2.1 billion.",
    bigint: "BIGINT stores whole numbers from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 (8 bytes). Use for large counts, high-volume IDs, and any value that might exceed the INTEGER range.",
    varchar: "VARCHAR(n) stores variable-length strings up to n characters. Saves space compared to CHAR for variable-length data. Choose a reasonable max to prevent abuse while accommodating the expected data size.",
    text: "TEXT stores strings of unlimited length. No performance difference vs VARCHAR in most databases. Use for long form content, descriptions, notes, and any field where length is unpredictable.",
    boolean: "BOOLEAN stores TRUE, FALSE, or NULL. The most storage-efficient way to represent binary states. Some databases store as a single byte; others use INT (0/1) internally with automatic conversion.",
    decimal: "DECIMAL(p, s) stores exact fixed-point numbers with precision p total digits and s decimal places. Essential for financial and monetary values where floating-point rounding is unacceptable.",
    timestamp: "TIMESTAMP stores date and time values. TIMESTAMPTZ / TIMESTAMP WITH TIME ZONE also stores the timezone offset. Use TIMESTAMPTZ for globally distributed systems to maintain temporal consistency.",
    jsonb: "JSONB stores JSON documents in a binary format with indexing support. Allows efficient querying of nested properties with GIN indexes. Use for flexible schemas, config data, and denormalized nested structures.",
  },
  indexes: {
    btree: "B-tree is the default and most versatile index type. Excellent for equality lookups, range queries, ORDER BY, and partial prefix matching. Balances many query patterns with reasonable storage and maintenance overhead.",
    hash: "Hash index is optimized for equality comparisons only (= operator). Faster than B-tree for exact lookups but useless for range queries or sorting. Use for low-selectivity columns queried primarily by exact match.",
    composite: "Composite index covers multiple columns in a specified order. Most effective when the leading column matches query conditions. Supports index-only scans when all referenced columns are in the index.",
    "unique-index": "Unique index enforces uniqueness and simultaneously boosts query performance. Similar to a UNIQUE constraint but can be created independently. Supports composite unique indexes on multiple columns.",
    fulltext: "Full-text index enables natural language search over text columns. Supports tokenization, stemming, stop words, and ranking. Use for search features, content discovery, and document retrieval systems.",
    partial: "Partial index indexes only the subset of rows that satisfy a WHERE condition. Reduces index size and maintenance overhead while accelerating queries that filter by the same condition pattern.",
    covering: "Covering (INCLUDE) index includes extra non-key columns that are stored only at the leaf level. Enables index-only scans that never touch the table heap, dramatically reducing read I/O for common queries.",
    spatial: "Spatial (GiST) index supports geometric and geographic queries: point-in-polygon, distance searches, bounding box overlaps. Essential for location-based features, GIS applications, and spatial analytics.",
  },
  migration: {
    script: "Generate a complete SQL migration script with CREATE TABLE, ALTER TABLE, ADD CONSTRAINT, and CREATE INDEX statements. Ordered to respect dependency constraints. Include IF NOT EXISTS guards for idempotency.",
    "orm-sync": "Synchronize the normalized schema with your ORM's data model. Generate or update Prisma schema, TypeORM entities, Sequelize models, or Drizzle schema files. Preserve existing custom configurations.",
    incremental: "Generate incremental migration pairs: up migration (apply changes) and down migration (revert changes). Numbered sequentially or timestamped for deterministic ordering. Essential for CI/CD pipeline migrations.",
    "rollback-plan": "Create a detailed rollback plan that includes restore steps, data recovery procedures, and reversion SQL. Estimate rollback time and complexity. Critical for production migrations with high business impact.",
    "data-backup": "Backup all tables affected by the migration before applying changes. Generate CREATE TABLE ... AS SELECT or pg_dump equivalents. Store backups with timestamps and clear labeling for easy restoration.",
    "dry-run": "Preview the migration changes in a sandbox environment. Compare source vs target schemas, validate constraint satisfaction, and estimate data migration volume. Confirm correctness before production application.",
    "zero-downtime": "Plan a zero-downtime migration strategy: expand (add new columns), migrate (backfill data in batches), contract (drop old columns). Use database views or dual-write patterns for seamless transitions.",
    "export-schema": "Export the complete schema documentation including tables, columns, types, constraints, indexes, and relationships. Generate Markdown, HTML, or database diagram (Mermaid) for team review and documentation.",
  },
};

function generate(selections: Record<string, any>, notes: Record<string, string>): string {
  const dataSource = selections.step1;
  const entityIdentification = selections.step2;
  const normalForm = selections.step3;
  const relationships: string[] = selections.step4 || [];
  const constraints: string[] = selections.step5 || [];
  const dataTypes: string[] = selections.step6 || [];
  const indexes: string[] = selections.step7 || [];
  const migration = selections.step8;

  const lines: string[] = [];

  lines.push("# Data Normalization Engine Output");
  lines.push("");
  lines.push("## Configuration Summary");
  lines.push("");
  lines.push("| Setting | Selection | Notes");
  lines.push("|---------|-----------|------");
  const dsLabel = Array.isArray(dataSource) ? dataSource.map(id => options.dataSource.find(o => o.id === id)?.title || id).join(", ") : options.dataSource.find(o => o.id === dataSource)?.title || dataSource;
  const dsNote = notes[`dataSource-${dataSource}`] || "";
  lines.push(`| Data Source | ${dsLabel} | ${dsNote}`);
  const eiLabel = Array.isArray(entityIdentification) ? entityIdentification.map(id => options.entityIdentification.find(o => o.id === id)?.title || id).join(", ") : options.entityIdentification.find(o => o.id === entityIdentification)?.title || entityIdentification;
  const eiNote = notes[`entityIdentification-${entityIdentification}`] || "";
  lines.push(`| Entity Identification | ${eiLabel} | ${eiNote}`);
  const nfLabel = Array.isArray(normalForm) ? normalForm.map(id => options.normalForm.find(o => o.id === id)?.title || id).join(", ") : options.normalForm.find(o => o.id === normalForm)?.title || normalForm;
  const nfNote = notes[`normalForm-${normalForm}`] || "";
  lines.push(`| Normal Form Target | ${nfLabel} | ${nfNote}`);
  const rLabels = relationships.map(id => options.relationships.find(o => o.id === id)?.title || id).join(", ");
  const rNotes = relationships.map(id => notes[`relationships-${id}`] || "").filter(Boolean).join("; ");
  lines.push(`| Relationship Types | ${rLabels || "None"} | ${rNotes}`);
  const cLabels = constraints.map(id => options.constraints.find(o => o.id === id)?.title || id).join(", ");
  const cNotes = constraints.map(id => notes[`constraints-${id}`] || "").filter(Boolean).join("; ");
  lines.push(`| Constraints | ${cLabels || "None"} | ${cNotes}`);
  const dtLabels = dataTypes.map(id => options.dataTypes.find(o => o.id === id)?.title || id).join(", ");
  const dtNotes = dataTypes.map(id => notes[`dataTypes-${id}`] || "").filter(Boolean).join("; ");
  lines.push(`| Data Types | ${dtLabels || "None"} | ${dtNotes}`);
  const iLabels = indexes.map(id => options.indexes.find(o => o.id === id)?.title || id).join(", ");
  const iNotes = indexes.map(id => notes[`indexes-${id}`] || "").filter(Boolean).join("; ");
  lines.push(`| Indexes | ${iLabels || "None"} | ${iNotes}`);
  const mLabel = Array.isArray(migration) ? migration.map(id => options.migration.find(o => o.id === id)?.title || id).join(", ") : options.migration.find(o => o.id === migration)?.title || migration;
  const mNote = notes[`migration-${migration}`] || "";
  lines.push(`| Migration Strategy | ${mLabel} | ${mNote}`);
  lines.push("");

  lines.push("## Normalization Blueprint");
  lines.push("");

  if (dataSource) {
    lines.push("### Data Source");
    lines.push("");
    lines.push(Array.isArray(dataSource) ? dataSource.map(v => dict.dataSource[v] || v).join(", ") : dict.dataSource[dataSource] || dataSource);
    lines.push("");
  }

  if (entityIdentification) {
    lines.push("### Entity Identification Strategy");
    lines.push("");
    lines.push(Array.isArray(entityIdentification) ? entityIdentification.map(v => dict.entityIdentification[v] || v).join(", ") : dict.entityIdentification[entityIdentification] || entityIdentification);
    lines.push("");
  }

  if (normalForm) {
    lines.push("### Target Normal Form: " + nfLabel);
    lines.push("");
    lines.push(Array.isArray(normalForm) ? normalForm.map(v => dict.normalForm[v] || v).join(", ") : dict.normalForm[normalForm] || normalForm);
    lines.push("");
  }

  if (relationships.length > 0) {
    lines.push("### Relationship Definitions");
    lines.push("");
    for (const rId of relationships) {
      const label = options.relationships.find(o => o.id === rId)?.title || rId;
      lines.push(`#### ${label}`);
      lines.push("");
      lines.push(dict.relationships[rId] || "");
      lines.push("");
    }
  }

  if (constraints.length > 0) {
    lines.push("### Constraints");
    lines.push("");
    for (const cId of constraints) {
      const label = options.constraints.find(o => o.id === cId)?.title || cId;
      lines.push(`- **${label}**: ${dict.constraints[cId] || ""}`);
    }
    lines.push("");
  }

  if (dataTypes.length > 0) {
    lines.push("### Data Type Selection");
    lines.push("");
    for (const dtId of dataTypes) {
      const label = options.dataTypes.find(o => o.id === dtId)?.title || dtId;
      lines.push(`- **${label}**: ${dict.dataTypes[dtId] || ""}`);
    }
    lines.push("");
  }

  if (indexes.length > 0) {
    lines.push("### Index Strategy");
    lines.push("");
    for (const iId of indexes) {
      const label = options.indexes.find(o => o.id === iId)?.title || iId;
      lines.push(`#### ${label}`);
      lines.push("");
      lines.push(dict.indexes[iId] || "");
      lines.push("");
    }
  }

  if (migration) {
    lines.push("### Migration Strategy");
    lines.push("");
    lines.push(Array.isArray(migration) ? migration.map(v => dict.migration[v] || v).join(", ") : dict.migration[migration] || migration);
    lines.push("");
  }

  lines.push("## Normalized Schema Structure");
  lines.push("");
  lines.push("```");
  lines.push("── Schema Structure ──────────────────────");
  lines.push("");
  lines.push("Entity: [Table Name]");
  lines.push("  Columns:");
  for (const dtId of dataTypes) {
    const dtLabel = options.dataTypes.find(o => o.id === dtId)?.title || dtId;
    lines.push(`    - column_name: ${dtLabel}`);
  }
  if (constraints.length > 0) {
    lines.push("  Constraints:");
    for (const cId of constraints) {
      const cLabel = options.constraints.find(o => o.id === cId)?.title || cId;
      lines.push(`    - ${cLabel}`);
    }
  }
  if (relationships.length > 0) {
    lines.push("  Relationships:");
    for (const rId of relationships) {
      const rLabel = options.relationships.find(o => o.id === rId)?.title || rId;
      lines.push(`    - ${rLabel}`);
    }
  }
  if (indexes.length > 0) {
    lines.push("  Indexes:");
    for (const iId of indexes) {
      const iLabel = options.indexes.find(o => o.id === iId)?.title || iId;
      lines.push(`    - ${iLabel}`);
    }
  }
  lines.push("──────────────────────────────────────────");
  lines.push("```");
  lines.push("");

  lines.push("## Normalization Rules Applied");
  lines.push("");
  lines.push("| Rule | Description | Applied");
  lines.push("|------|-------------|--------");
  if (normalForm) {
    lines.push(`| Atomic Values | Each column holds a single value per row | ${normalForm === "denormalized" ? "No" : "Yes"}`);
    lines.push(`| Unique Rows | Rows have a unique identifier | ${constraints.includes("primary-key") || constraints.includes("composite-key") ? "Yes" : "Check"}`);
    lines.push(`| FK Integrity | Foreign keys reference primary keys | ${constraints.includes("foreign-key") ? "Yes" : "No"}`);
    lines.push(`| Dependency Check | Non-key columns depend only on key | ${["3nf", "bcnf", "4nf", "5nf"].includes(normalForm) ? "Yes" : "Partial"}`);
    lines.push(`| Transitive Removal | No column depends on another non-key column | ${["3nf", "bcnf", "4nf", "5nf"].includes(normalForm) ? "Yes" : "No"}`);
  }
  lines.push("");

  lines.push("## Quality & Integrity Checks");
  lines.push("");
  lines.push("- **Uniqueness**: Primary key and unique constraints enforced at database level.");
  lines.push("- **Referential Integrity**: Foreign keys prevent orphaned records.");
  lines.push("- **Type Safety**: Columns restricted to defined data types — invalid casts rejected.");
  lines.push("- **Domain Integrity**: CHECK constraints enforce business rules at row level.");
  if (normalForm === "3nf" || normalForm === "bcnf") {
    lines.push("- **Update Anomaly Free**: Updates affect minimal number of tables with no data duplication.");
    lines.push("- **Insert Anomaly Free**: New data can be inserted without requiring unrelated data.");
    lines.push("- **Delete Anomaly Free**: Deleting data removes only intended records without side effects.");
  }
  lines.push("");

  lines.push("## Performance & Storage Notes");
  lines.push("");
  lines.push("| Consideration | Impact");
  lines.push("|--------------|--------");
  if (normalForm === "denormalized") {
    lines.push("| Read Performance | Fast — fewer joins needed for queries");
    lines.push("| Write Performance | Fast — single table writes");
    lines.push("| Storage | Higher — data duplication increases storage");
  } else if (normalForm && normalForm !== "star-schema") {
    lines.push("| Read Performance | May require joins across multiple tables");
    lines.push("| Write Performance | Efficient — minimal data redundancy");
    lines.push("| Storage | Efficient — no intentional duplication");
  }
  if (indexes.length > 0) lines.push("| Query Speed | Accelerated by selected index strategies");
  if (indexes.some(i => i === "composite" || i === "covering")) lines.push("| Covering Queries | Index-only scans possible for common query patterns");
  lines.push("| Maintenance | Index overhead during writes, require VACUUM/ANALYZE");
  lines.push("");

  lines.push("## Recommendations");
  lines.push("");
  if (normalForm === "denormalized") {
    lines.push("- Consider read-heavy workloads before committing to full denormalization.");
    lines.push("- Use materialized views as a middle ground between normalized and denormalized.");
  } else if (normalForm === "3nf" || normalForm === "bcnf") {
    lines.push("- 3NF/BCNF is strongly recommended for transactional (OLTP) systems.");
    lines.push("- Use views or materialized views for denormalized read models.");
  } else if (normalForm === "star-schema") {
    lines.push("- Ideal for analytical (OLAP) workloads and BI reporting.");
    lines.push("- Ensure dimension tables are properly indexed on surrogate keys.");
  }
  if (migration === "zero-downtime") {
    lines.push("- Test the expand-migrate-contract pattern in staging before production.");
  }
  if (constraints.includes("foreign-key")) {
    lines.push("- Cascade behavior options: RESTRICT is safest, CASCADE is convenient but risky.");
  }
  lines.push("- Always run migrations against a staging environment first.");
  lines.push("- Document all schema changes in a changelog for team visibility.");
  lines.push("");

  lines.push("---");
  lines.push("");
  lines.push("_Generated by Data Normalization Engine_");

  return lines.join("\n");
}

export default function DataNormalizationPage() {
  return (
    <ToolShell
      title="Data Normalization Engine"
      steps={[
        { id: 1, label: "Data Source", component: (p) => (
          <GenericStep {...p} title="Select Data Source" description="Where is your source data coming from?" options={options.dataSource} mode="multiple" selected={p.selections.step1} selectKey="step1" notePrefix="dataSource" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 2, label: "Entity ID", component: (p) => (
          <GenericStep {...p} title="Entity Identification" description="How should entities be identified?" options={options.entityIdentification} mode="multiple" selected={p.selections.step2} selectKey="step2" notePrefix="entityIdentification" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 3, label: "Normal Form", component: (p) => (
          <GenericStep {...p} title="Target Normal Form" description="What normalization level do you need?" options={options.normalForm} mode="multiple" selected={p.selections.step3} selectKey="step3" notePrefix="normalForm" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 4, label: "Relationships", component: (p) => (
          <GenericStep {...p} title="Relationship Types" description="What relationships exist between entities?" options={options.relationships} mode="multiple" selected={p.selections.step4} selectKey="step4" notePrefix="relationships" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 5, label: "Constraints", component: (p) => (
          <GenericStep {...p} title="Constraints" description="What constraints should be applied?" options={options.constraints} mode="multiple" selected={p.selections.step5} selectKey="step5" notePrefix="constraints" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 6, label: "Data Types", component: (p) => (
          <GenericStep {...p} title="Data Types" description="Which data types to use for columns?" options={options.dataTypes} mode="multiple" selected={p.selections.step6} selectKey="step6" notePrefix="dataTypes" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 7, label: "Indexes", component: (p) => (
          <GenericStep {...p} title="Index Strategy" description="Which indexes to create for performance?" options={options.indexes} mode="multiple" selected={p.selections.step7} selectKey="step7" notePrefix="indexes" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 8, label: "Migration", component: (p) => (
          <GenericStep {...p} title="Migration Strategy" description="How to migrate the normalized schema?" options={options.migration} mode="multiple" selected={p.selections.step8} selectKey="step8" notePrefix="migration" notes={p.notes} onNote={p.onNote} />
        )},
      ]}
      onGenerate={generate}
    />
  );
}


















