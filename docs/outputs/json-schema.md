# JSON Schema Generator Output

**Schema:** User Profile API Request
**Version:** draft-07

---

```json
{
  "$schema": "https://json-schema.org/draft-07/schema#",
  "$id": "https://api.example.com/schemas/user-profile.json",
  "title": "UserProfile",
  "description": "Schema for creating/updating a user profile",
  "type": "object",
  "required": ["email", "firstName", "lastName"],
  "properties": {
    "email": {
      "type": "string",
      "format": "email",
      "maxLength": 254,
      "description": "Primary email address",
      "examples": ["user@example.com"]
    },
    "firstName": {
      "type": "string",
      "minLength": 1,
      "maxLength": 100,
      "pattern": "^[\\p{L}\\s'-]+$",
      "description": "Legal first name"
    },
    "lastName": {
      "type": "string",
      "minLength": 1,
      "maxLength": 100,
      "pattern": "^[\\p{L}\\s'-]+$",
      "description": "Legal last name"
    },
    "displayName": {
      "type": "string",
      "maxLength": 50,
      "description": "Optional preferred display name"
    },
    "birthDate": {
      "type": "string",
      "format": "date",
      "description": "ISO 8601 date (YYYY-MM-DD)"
    },
    "phone": {
      "type": "string",
      "pattern": "^\\+[1-9]\\d{1,14}$",
      "description": "E.164 format, e.g. +12025551234"
    },
    "avatar": {
      "type": "string",
      "format": "uri",
      "maxLength": 2048,
      "description": "URL to profile picture"
    },
    "address": {
      "type": "object",
      "properties": {
        "line1": { "type": "string", "maxLength": 255 },
        "line2": { "type": "string", "maxLength": 255 },
        "city": { "type": "string", "maxLength": 100 },
        "state": { "type": "string", "maxLength": 100 },
        "postalCode": {
          "type": "string",
          "pattern": "^[\\d\\w\\s-]{3,10}$"
        },
        "country": {
          "type": "string",
          "pattern": "^[A-Z]{2}$",
          "description": "ISO 3166-1 alpha-2 country code"
        }
      },
      "required": ["line1", "city", "country"]
    },
    "preferences": {
      "type": "object",
      "properties": {
        "language": {
          "type": "string",
          "enum": ["en", "es", "fr", "de", "ja", "id"],
          "default": "en"
        },
        "timezone": {
          "type": "string",
          "pattern": "^[A-Za-z_]+/[A-Za-z_]+$",
          "default": "UTC"
        },
        "marketingOptIn": {
          "type": "boolean",
          "default": false
        },
        "theme": {
          "type": "string",
          "enum": ["light", "dark", "system"],
          "default": "system"
        }
      }
    },
    "tags": {
      "type": "array",
      "items": {
        "type": "string",
        "maxLength": 30
      },
      "maxItems": 10,
      "uniqueItems": true
    },
    "metadata": {
      "type": "object",
      "additionalProperties": {
        "type": "string"
      },
      "maxProperties": 20,
      "description": "Arbitrary key-value store"
    }
  },
  "allOf": [
    {
      "if": {
        "properties": { "birthDate": { "type": "string" } }
      },
      "then": {
        "properties": {
          "birthDate": {
            "format": "date",
            "description": "Must be a valid date"
          }
        }
      }
    }
  ]
}
```

## Generated Sample Instance

```json
{
  "email": "jane.doe@acmecorp.com",
  "firstName": "Jane",
  "lastName": "Doe",
  "displayName": "Jane",
  "birthDate": "1990-04-12",
  "phone": "+12025551234",
  "avatar": "https://cdn.example.com/avatars/jdoe.jpg",
  "address": {
    "line1": "200 Park Ave",
    "line2": "Suite 1500",
    "city": "New York",
    "state": "NY",
    "postalCode": "10166",
    "country": "US"
  },
  "preferences": {
    "language": "en",
    "timezone": "America/New_York",
    "marketingOptIn": true,
    "theme": "light"
  },
  "tags": ["enterprise", "beta-user", "vip"],
  "metadata": {
    "onboarding_step": "completed",
    "referral_source": "linkedin_ad"
  }
}
```

## Validation Errors Example

```json
{
  "error": "Validation failed",
  "details": [
    {
      "instancePath": "/email",
      "schemaPath": "#/properties/email/format",
      "keyword": "format",
      "params": { "format": "email" },
      "message": "Must be a valid email address"
    },
    {
      "instancePath": "",
      "schemaPath": "#/required",
      "keyword": "required",
      "params": { "missingProperty": "firstName" },
      "message": "Required property 'firstName' is missing"
    }
  ]
}
```
