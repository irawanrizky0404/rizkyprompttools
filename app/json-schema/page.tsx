"use client";

import type { FC } from "react";
import {
  Braces, Layers, Shield, Check, Box, List,
  FileText, Hash, Type, Calendar, SwitchCamera, Sliders,
  ArrowLeftRight, Link, GitBranch, Star, Filter,
  Split, Code, FileJson, Database, Zap, Globe,
  Activity, Gauge, BookOpen, Terminal, AlertTriangle,
} from "lucide-react";
import { ToolShell } from "@/components/tool-wizard/tool-shell";
import { GenericStep } from "@/components/tool-wizard/generic-step";

const options = {
  dataType: [
    { id: "string", title: "String", description: "Text data with optional format constraints", icon: Type },
    { id: "number", title: "Number", description: "Integer or floating-point numeric values", icon: Hash },
    { id: "boolean", title: "Boolean", description: "True/false logical values", icon: SwitchCamera },
    { id: "object", title: "Object", description: "Structured JSON object with properties", icon: Braces },
    { id: "array", title: "Array", description: "Ordered list of items with uniform type", icon: List },
    { id: "null", title: "Null", description: "Nullable or optional value", icon: ArrowLeftRight },
    { id: "date", title: "Date/Time", description: "ISO 8601 date, time, or datetime", icon: Calendar },
    { id: "any", title: "Any (Mixed)", description: "Flexible type accepting any JSON value", icon: FileJson },
  ],
  properties: [
    { id: "flat-props", title: "Flat Properties", description: "Single-level key-value properties", icon: Layers },
    { id: "typed-props", title: "Typed Properties", description: "Properties with type annotation per field", icon: FileText },
    { id: "optional-props", title: "Optional Properties", description: "Properties with default values", icon: Sliders },
    { id: "computed-props", title: "Computed Properties", description: "Dynamic property names with pattern", icon: Code },
    { id: "grouped-props", title: "Grouped Properties", description: "Properties organized into logical groups", icon: Box },
    { id: "ordered-props", title: "Ordered Properties", description: "Properties with enforced order", icon: List },
    { id: "deprecated-props", title: "Deprecated Properties", description: "Mark properties as deprecated", icon: Activity },
    { id: "metadata-props", title: "Metadata Properties", description: "Properties carrying metadata annotations", icon: Star },
  ],
  validation: [
    { id: "length", title: "Length Constraints", description: "Min/max length for strings and arrays", icon: Sliders },
    { id: "range", title: "Range Constraints", description: "Min/max values for numbers", icon: Gauge },
    { id: "pattern", title: "Regex Pattern", description: "Regular expression pattern matching", icon: Code },
    { id: "format", title: "Format Validation", description: "Email, URI, UUID, date format checks", icon: Globe },
    { id: "enum", title: "Enum Values", description: "Restrict to predefined set of values", icon: List },
    { id: "type-check", title: "Type Check", description: "Enforce specific JSON Schema types", icon: Type },
    { id: "const", title: "Constant Value", description: "Property must equal a specific constant", icon: Check },
    { id: "conditional", title: "Conditional Validation", description: "if/then/else validation branching", icon: GitBranch },
  ],
  required: [
    { id: "all-required", title: "All Required", description: "Every property is mandatory", icon: Check },
    { id: "minimal-required", title: "Minimal Required", description: "Only essential fields required", icon: Check },
    { id: "conditional-req", title: "Conditional Required", description: "Required based on other fields", icon: GitBranch },
    { id: "optional-all", title: "All Optional", description: "No required fields", icon: Filter },
    { id: "dependency-req", title: "Dependency Required", description: "Required based on property presence", icon: Link },
    { id: "group-req", title: "Group Required", description: "At least one from a group required", icon: GitBranch },
    { id: "phase-req", title: "Phase Required", description: "Different required sets per lifecycle phase", icon: Layers },
    { id: "default-values", title: "Default Values", description: "Defaults when property is not provided", icon: Database },
  ],
  nestedObjects: [
    { id: "single-level", title: "Single Level", description: "One level of nesting", icon: Box },
    { id: "multi-level", title: "Multi Level", description: "Deeply nested object hierarchy", icon: Layers },
    { id: "recursive", title: "Recursive", description: "Self-referencing nested structure", icon: Split },
    { id: "polymorphic-nest", title: "Polymorphic Nesting", description: "Nested object with dynamic type", icon: GitBranch },
    { id: "shared-ref", title: "Shared $ref", description: "Reusable nested schema definitions", icon: Link },
    { id: "inline-nest", title: "Inline Nesting", description: "Nested schema inline without definitions", icon: Braces },
    { id: "tuple-nest", title: "Tuple Nesting", description: "Fixed-length array with typed positions", icon: List },
    { id: "map-nest", title: "Map/Dict Nesting", description: "Additional properties pattern for maps", icon: Code },
  ],
  arrays: [
    { id: "typed-array", title: "Typed Array", description: "Array with uniform item type", icon: List },
    { id: "tuple-array", title: "Tuple Array", description: "Fixed-length typed positional array", icon: List },
    { id: "unique-array", title: "Unique Items", description: "Array with unique item constraint", icon: Star },
    { id: "min-max-array", title: "Min/Max Items", description: "Array length constraints", icon: Sliders },
    { id: "nested-array", title: "Nested Array", description: "Array of arrays", icon: Box },
    { id: "contains-array", title: "Contains Array", description: "Array must contain at least one matching item", icon: Filter },
    { id: "prefix-items", title: "Prefix Items", description: "Typed prefix with additional items", icon: Split },
    { id: "unevaluated", title: "Unevaluated Items", description: "Catch-all for unevaluated items", icon: Code },
  ],
  enums: [
    { id: "string-enum", title: "String Enum", description: "Enumeration of string values", icon: List },
    { id: "numeric-enum", title: "Numeric Enum", description: "Enumeration of numeric values", icon: Hash },
    { id: "mixed-enum", title: "Mixed Enum", description: "Enumeration with mixed types", icon: FileJson },
    { id: "extensible-enum", title: "Extensible Enum", description: "Enum with open extension via pattern", icon: Link },
    { id: "enum-titles", title: "Enum with Titles", description: "Enum values with human-readable titles", icon: FileText },
    { id: "enum-descriptions", title: "Enum with Descriptions", description: "Enum values with descriptions", icon: BookOpen },
    { id: "enum-deprecated", title: "Deprecated Enum Values", description: "Mark enum values as deprecated", icon: Activity },
    { id: "enum-aliases", title: "Enum Aliases", description: "Multiple labels for the same enum value", icon: ArrowLeftRight },
  ],
  examples: [
    { id: "single-example", title: "Single Example", description: "One example per schema", icon: FileText },
    { id: "multi-example", title: "Multiple Examples", description: "Array of example instances", icon: List },
    { id: "annotated-examples", title: "Annotated Examples", description: "Examples with descriptions", icon: FileJson },
    { id: "readme-examples", title: "Readable Examples", description: "Formatted examples for documentation", icon: BookOpen },
    { id: "edge-case", title: "Edge Case Examples", description: "Boundary and edge case samples", icon: AlertTriangle },
    { id: "invalid-examples", title: "Invalid Examples", description: "Examples that fail validation", icon: Filter },
    { id: "generated-examples", title: "Generated Examples", description: "Auto-generated from schema constraints", icon: Zap },
    { id: "real-world", title: "Real-World Examples", description: "Production data samples", icon: Globe },
  ],
};

const dict: Record<string, Record<string, string>> = {
  dataType: {
    string: "Define a string type with optional format constraints like email, uri, uuid, date-time, or custom regex patterns. Set minLength and maxLength bounds. Use pattern for format validation. Example: string with format: email for user email fields.",
    number: "Define a number type accepting integers or floats. Use type: integer for whole numbers only. Set minimum, maximum, exclusiveMinimum, and exclusiveMaximum for range validation. Support multipleOf for step constraints.",
    boolean: "Define a boolean type accepting true or false values. Boolean fields are typically used for flags, toggles, and status indicators. No additional validation keywords apply beyond type enforcement.",
    object: "Define an object type with a properties map specifying each field's schema. Use required array for mandatory fields. Support additionalProperties, minProperties, maxProperties, and propertyNames constraints.",
    array: "Define an array type with items schema for uniform element validation. Use prefixItems for tuple validation. Support minItems, maxItems, uniqueItems, and contains constraints for item-level control.",
    null: "Define a nullable field by including null in the type array [type, 'null'] or by omitting from required. Use default null for optional fields with explicit null sentinel value.",
    date: "Define a date/time string with format: date, time, date-time, or duration. Use ISO 8601 formatting. For fine-grained control, GitBranch pattern with format. Example: { type: string, format: date-time } for timestamps.",
    any: "Define a flexible field that accepts any JSON value type. Use an empty schema {} or type array with all types. Apply when the schema cannot predict the value shape but must allow arbitrary data.",
  },
  properties: {
    "flat-props": "Define properties as a flat key-value map where each property has its own type definition. No nesting or grouping. Suitable for simple data models with fewer than 10 direct attributes.",
    "typed-props": "Annotate each property with a full JSON Schema type specification including type, format, description, examples, and validation constraints. Enables strong validation and documentation generation.",
    "optional-props": "Define optional properties by omitting them from the required array. Provide default values using the default keyword. Use cases: settings with sensible defaults, nullable fields.",
    "computed-props": "Use propertyNames with regex pattern to allow dynamic property names. GitBranch with additionalProperties schema for computed or runtime-determined field names in map-like structures.",
    "grouped-props": "Organize related properties into nested objects for logical grouping. Example: address properties grouped under an address object. Improves readability and allows reuse of property groups across schemas.",
    "ordered-props": "Use property ordering annotations with a custom x-order extension field. While JSON Schema does not enforce ordering, conventions and code generation tools can respect the declared order for UI forms.",
    "deprecated-props": "Mark properties as deprecated using the deprecated: true annotation. Provide a description explaining the deprecation and migration path. Tools can use this to warn consumers about upcoming removals.",
    "metadata-props": "Add metadata annotations using the $comment, description, examples, readOnly, writeOnly, and custom x-* extension fields. Enables rich documentation and tooling integration beyond core validation.",
  },
  validation: {
    length: "Apply minLength and maxLength to strings for input length restrictions. For arrays, use minItems and maxItems. Example: password with minLength: 8 and maxLength: 128. Provide clear error messages for violations.",
    range: "Apply minimum, maximum, exclusiveMinimum, and exclusiveMaximum for numeric range validation. Use multipleOf for step increments. Example: age with minimum: 0 and maximum: 150. Support inclusive and exclusive bounds.",
    pattern: "Use the pattern keyword with a regex string for format validation. Anchor patterns with ^ and $ for full string match. Example: ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$ for email validation.",
    format: "Use the format keyword for well-known validators: email, uri, uuid, date, time, date-time, ipv4, ipv6, hostname, json-pointer, regex. Implement custom format validators for domain-specific formats.",
    enum: "Use the enum keyword with an array of allowed values. All values must be unique and can be of any type. Example: enum: [pending, active, suspended, cancelled] for status field. GitBranch with type for type safety.",
    "type-check": "Use the type keyword with a single type string or an array of allowed types. Example: type: [string, null] for nullable strings. Supports: string, number, integer, boolean, object, array, null.",
    const: "Use the const keyword to specify a literal value that the property must equal. Useful for discriminated unions and version fields. Example: const: v1 for schema version identification.",
    conditional: "Use if/then/else keywords for conditional validation where validation rules depend on other property values. Example: if billingType: business, then require taxId. Enables dynamic validation logic.",
  },
  required: {
    "all-required": "List every property in the required array. Ensures all defined properties must be present in valid instances. Use for strict data integrity where every field is mandatory.",
    "minimal-required": "Include only essential properties in required. Make optional fields that have sensible defaults or are context-dependent. Balances validation strictness with API flexibility.",
    "conditional-req": "Use conditional validation with if/then to make fields required based on runtime conditions. Example: if status is 'active', then required: ['activatedAt']. Dynamic requirement enforcement.",
    "optional-all": "Omit the required keyword entirely or set required: []. All properties are optional. Use for patch/update operations where partial updates are expected and missing fields should not be rejected.",
    "dependency-req": "Use dependencies keyword to require specific properties when others are present. Example: { creditCard: [cvv, expiryDate] } - if creditCard is present, cvv and expiryDate become required.",
    "group-req": "Use oneOf or anyOf for mutually exclusive group requirements. Ensure at least one property from a group is present. Example: oneOf: [{ required: [phone] }, { required: [email] }] for contact method.",
    "phase-req": "Define different schema variants for different lifecycle phases (create vs update). Use allOf with conditional validation or separate schemas per phase. Example: create requires name, update makes name optional.",
    "default-values": "Use the default keyword to specify fallback values when a property is not provided. Document defaults clearly. Example: { type: boolean, default: false } for an isActive flag with safe default.",
  },
  nestedObjects: {
    "single-level": "Define a single level of nested object within properties. Example: address with street, city, zip sub-properties. Keep nesting depth to 1 for simplicity. Use $defs for reusable sub-schemas.",
    "multi-level": "Define deeply nested object structures with multiple hierarchy levels. Use $defs to define reusable sub-schemas and reference them with $ref. Keep maximum depth reasonable (3-5 levels) for maintainability.",
    recursive: "Define a schema that references itself using $ref with the recursive target. Use for tree structures, nested comments, organizational charts. Include a base case to prevent infinite recursion.",
    "polymorphic-nest": "Use oneOf or anyOf within nested objects to support polymorphic types. Each variant has a discriminator field (e.g., type). Example: notification with type: email, sms, or push, each with different sub-schemas.",
    "shared-ref": "Define reusable schema fragments in the $defs key and reference them with $ref. Enables schema composition without duplication. Example: $defs.address used across User, Order, and Company schemas.",
    "inline-nest": "Define nested objects inline within the properties definition without extracting to $defs. Suitable for one-off nested structures that are not reused elsewhere. Keep inline nests concise.",
    "tuple-nest": "Use prefixItems with an array of schemas for tuple-style fixed-length arrays where each position has a typed schema. Example: [string, number, boolean] for a mixed-type record tuple.",
    "map-nest": "Use additionalProperties with a value schema to define map/dictionary structures with dynamic string keys. GitBranch with propertyNames for key pattern constraints. Example: { additionalProperties: { type: number } } for a score map.",
  },
  arrays: {
    "typed-array": "Define an array where all items conform to a single schema using the items keyword. Example: items: { type: string } for an array of strings. Validates every element against the item schema.",
    "tuple-array": "Use prefixItems with an array of schemas for fixed-length typed tuples. Each positional schema validates the corresponding element. Example: prefixItems: [{ type: string }, { type: number }] for a [name, score] tuple.",
    "unique-array": "Set uniqueItems: true to enforce all array elements are unique. Uses deep equality for comparison. Example: tags with uniqueItems: true prevents duplicate tag entries in the array.",
    "min-max-array": "Set minItems and maxItems for array length validation. Prevents empty arrays or overly large collections. Example: attachments with minItems: 1 and maxItems: 10 enforces at least one and at most ten attachments.",
    "nested-array": "Define an array of arrays by nesting the items keyword. Example: items: { type: array, items: { type: number } } for a matrix of numbers. Supports arbitrary nesting depth.",
    "contains-array": "Use the contains keyword to specify a schema that at least one array element must match. Example: contains: { type: string, pattern: urgent } ensures at least one item contains the word urgent.",
    "prefix-items": "Use prefixItems for typed prefix elements and items for additional elements. The prefix positions are validated strictly, and any remaining items are validated against the items schema.",
    "unevaluated": "Use unevaluatedItems to catch array elements not evaluated by items or prefixItems. Useful for open-ended extensions. Works with if/then/else for context-sensitive array validation.",
  },
  enums: {
    "string-enum": "Define an enum with string values. Use descriptive, semantically meaningful strings. Example: enum: [draft, published, archived] for document status. String enums are self-documenting and widely supported.",
    "numeric-enum": "Define an enum with numeric values. Use integers for status codes, HTTP status references, or category IDs. Example: enum: [200, 201, 400, 404, 500] for HTTP status filters.",
    "mixed-enum": "Define an enum with mixed types when the value can be one of several unrelated types. Example: enum: [null, pending, 1, true]. Use sparingly as mixed enums reduce type clarity.",
    "extensible-enum": "Define an enum with a pattern-based extension mechanism. Use oneOf with enum and pattern for future compatibility. The known values are validated strictly while unknown values must match a pattern.",
    "enum-titles": "Use a custom x-enum-titles extension to map enum values to human-readable display names. Example: x-enum-titles: { draft: Draft, published: Published, archived: Archived }. Improves generated documentation.",
    "enum-descriptions": "Use a custom x-enum-descriptions extension to add descriptions per enum value. Example: x-enum-descriptions: { draft: Initial draft state, not yet visible to users }. Provides context for each value.",
    "enum-deprecated": "Use a custom x-enum-deprecated extension array to mark specific enum values as deprecated. Example: x-enum-deprecated: [legacy_value]. Tools can filter or warn about deprecated enum values.",
    "enum-aliases": "Use a custom x-enum-aliases extension to define alternative labels for enum values. Example: x-enum-aliases: { active: [enabled, live] }. Supports backward compatibility with renamed values.",
  },
  examples: {
    "single-example": "Add one example per schema using the examples keyword (shorthand) or example (singular). Example: { type: string, example: john@example.com }. Provides a representative sample for documentation.",
    "multi-example": "Use the examples keyword with an array of example instances. Provide multiple diverse examples covering typical use cases. Example: examples: [{ status: draft }, { status: published }, { status: archived }].",
    "annotated-examples": "Use custom x-examples annotation with descriptions for each example. Include explanation of what the example demonstrates. Example with metadata helps consumers understand each scenario.",
    "readme-examples": "Format examples for readability in documentation. Use realistic data with proper indentation. Add comments (via x-comment) explaining non-obvious fields. Examples should be copy-paste ready.",
    "edge-case": "Include examples for edge cases: empty objects, zero values, null fields, maximum length strings, boundary dates. Edge case examples help consumers handle exceptional situations correctly.",
    "invalid-examples": "Use custom x-invalid-examples annotation to show examples that fail validation alongside the expected error. Helps consumers understand validation rules through negative examples.",
    "generated-examples": "Generate examples automatically from schema constraints. Use tools to produce valid instances based on type, format, enum, and other constraints. Ensure generated examples are semantically realistic.",
    "real-world": "Use anonymized production data as examples. Real-world examples ensure relevance and accuracy. Strip sensitive data before including. Represent typical data distribution and values.",
  },
};

function generate(selections: Record<string, any>, notes: Record<string, string>): string {
  const dataType = selections.step1;
  const properties = selections.step2;
  const validation: string[] = selections.step3 || [];
  const required = selections.step4;
  const nestedObjects = selections.step5;
  const arrays = selections.step6;
  const enums = selections.step7;
  const examples = selections.step8;

  const lines: string[] = [];

  lines.push("# JSON Schema Specification");
  lines.push("");
  lines.push("## Configuration Summary");
  lines.push("");
  lines.push("| Setting | Selection | Notes");
  lines.push("|---------|-----------|------");
  const dtLabel = Array.isArray(dataType) ? dataType.map(id => options.dataType.find(o => o.id === id)?.title || id).join(", ") : options.dataType.find(o => o.id === dataType)?.title || dataType;
  const dtNote = notes[`dataType-${dataType}`] || "";
  lines.push(`| Root Data Type | ${dtLabel} | ${dtNote}`);
  const prLabel = Array.isArray(properties) ? properties.map(id => options.properties.find(o => o.id === id)?.title || id).join(", ") : options.properties.find(o => o.id === properties)?.title || properties;
  const prNote = notes[`properties-${properties}`] || "";
  lines.push(`| Properties Style | ${prLabel} | ${prNote}`);
  const vlLabels = validation.map(id => options.validation.find(o => o.id === id)?.title || id).join(", ");
  const vlNotes = validation.map(id => notes[`validation-${id}`] || "").filter(Boolean).join("; ");
  lines.push(`| Validation Rules | ${vlLabels || "None"} | ${vlNotes}`);
  const rqLabel = Array.isArray(required) ? required.map(id => options.required.find(o => o.id === id)?.title || id).join(", ") : options.required.find(o => o.id === required)?.title || required;
  const rqNote = notes[`required-${required}`] || "";
  lines.push(`| Required Strategy | ${rqLabel} | ${rqNote}`);
  const noLabel = Array.isArray(nestedObjects) ? nestedObjects.map(id => options.nestedObjects.find(o => o.id === id)?.title || id).join(", ") : options.nestedObjects.find(o => o.id === nestedObjects)?.title || nestedObjects;
  const noNote = notes[`nestedObjects-${nestedObjects}`] || "";
  lines.push(`| Nested Objects | ${noLabel} | ${noNote}`);
  const arLabel = Array.isArray(arrays) ? arrays.map(id => options.arrays.find(o => o.id === id)?.title || id).join(", ") : options.arrays.find(o => o.id === arrays)?.title || arrays;
  const arNote = notes[`arrays-${arrays}`] || "";
  lines.push(`| Arrays | ${arLabel} | ${arNote}`);
  const enLabel = Array.isArray(enums) ? enums.map(id => options.enums.find(o => o.id === id)?.title || id).join(", ") : options.enums.find(o => o.id === enums)?.title || enums;
  const enNote = notes[`enums-${enums}`] || "";
  lines.push(`| Enums | ${enLabel} | ${enNote}`);
  const exLabel = Array.isArray(examples) ? examples.map(id => options.examples.find(o => o.id === id)?.title || id).join(", ") : options.examples.find(o => o.id === examples)?.title || examples;
  const exNote = notes[`examples-${examples}`] || "";
  lines.push(`| Examples | ${exLabel} | ${exNote}`);
  lines.push("");

  lines.push("## Schema Definition");
  lines.push("");
  lines.push("```json");
  lines.push("{");
  lines.push('  "$schema": "http://json-schema.org/draft-07/schema#",');
  lines.push('  "$id": "https://api.example.com/schemas/entity.json",');
  lines.push('  "title": "Entity Schema",');
  lines.push('  "description": "Generated JSON Schema for entity validation",');
  if (dataType) {
    const typeStr = dataType === "number" ? '"number"' :
      dataType === "boolean" ? '"boolean"' :
      dataType === "object" ? '"object"' :
      dataType === "array" ? '"array"' :
      dataType === "null" ? '"null"' :
      dataType === "date" ? '"string"' :
      dataType === "any" ? '"object"' :
      '"string"';
    lines.push(`  "type": ${typeStr},`);
    if (dataType === "date") {
      lines.push('  "format": "date-time",');
    }
  }
  if (properties && properties !== "flat-props") {
    lines.push('  "properties": {');
    lines.push('    "id": { "type": "string", "description": "Unique identifier" },');
    lines.push('    "name": { "type": "string", "description": "Display name" },');
    lines.push('    "status": { "type": "string", "enum": ["active", "inactive"] },');
    lines.push('    "createdAt": { "type": "string", "format": "date-time" }');
    lines.push("  },");
  }
  if (required === "all-required") {
    lines.push('  "required": ["id", "name", "status", "createdAt"],');
  } else if (required === "minimal-required") {
    lines.push('  "required": ["id", "name"],');
  } else {
    lines.push('  "required": [],');
  }
  if (validation.length > 0) {
    lines.push('  "minLength": 1,');
    lines.push('  "maxLength": 1024,');
  }
  lines.push('  "additionalProperties": false');
  lines.push("}");
  lines.push("```");
  lines.push("");

  if (dataType) {
    lines.push("### Data Type: " + dtLabel);
    lines.push("");
    lines.push(Array.isArray(dataType) ? dataType.map(v => dict.dataType[v] || v).join(", ") : dict.dataType[dataType] || dataType);
    if (dtNote) lines.push(`> **Note:** ${dtNote}`);
    lines.push("");
  }

  if (properties) {
    lines.push("### Properties: " + prLabel);
    lines.push("");
    lines.push(Array.isArray(properties) ? properties.map(v => dict.properties[v] || v).join(", ") : dict.properties[properties] || properties);
    if (prNote) lines.push(`> **Note:** ${prNote}`);
    lines.push("");
  }

  if (validation.length > 0) {
    lines.push("### Validation Rules");
    lines.push("");
    for (const vId of validation) {
      const label = options.validation.find(o => o.id === vId)?.title || vId;
      lines.push(`#### ${label}`);
      lines.push("");
      lines.push(dict.validation[vId] || "");
      const note = notes[`validation-${vId}`] || "";
      if (note) lines.push(`> **Note:** ${note}`);
      lines.push("");
    }
  }

  if (required) {
    lines.push("### Required Strategy: " + rqLabel);
    lines.push("");
    lines.push(Array.isArray(required) ? required.map(v => dict.required[v] || v).join(", ") : dict.required[required] || required);
    if (rqNote) lines.push(`> **Note:** ${rqNote}`);
    lines.push("");
  }

  if (nestedObjects) {
    lines.push("### Nested Objects: " + noLabel);
    lines.push("");
    lines.push(Array.isArray(nestedObjects) ? nestedObjects.map(v => dict.nestedObjects[v] || v).join(", ") : dict.nestedObjects[nestedObjects] || nestedObjects);
    if (noNote) lines.push(`> **Note:** ${noNote}`);
    lines.push("");
  }

  if (arrays) {
    lines.push("### Arrays: " + arLabel);
    lines.push("");
    lines.push(Array.isArray(arrays) ? arrays.map(v => dict.arrays[v] || v).join(", ") : dict.arrays[arrays] || arrays);
    if (arNote) lines.push(`> **Note:** ${arNote}`);
    lines.push("");
  }

  if (enums) {
    lines.push("### Enums: " + enLabel);
    lines.push("");
    lines.push(Array.isArray(enums) ? enums.map(v => dict.enums[v] || v).join(", ") : dict.enums[enums] || enums);
    if (enNote) lines.push(`> **Note:** ${enNote}`);
    lines.push("");
  }

  if (examples) {
    lines.push("### Examples: " + exLabel);
    lines.push("");
    lines.push(Array.isArray(examples) ? examples.map(v => dict.examples[v] || v).join(", ") : dict.examples[examples] || examples);
    if (exNote) lines.push(`> **Note:** ${exNote}`);
    lines.push("");
  }

  lines.push("## Generated JSON Schema (Full)");
  lines.push("");
  lines.push("```json");
  lines.push("{");
  lines.push('  "$schema": "http://json-schema.org/draft-07/schema#",');
  lines.push('  "$id": "https://api.example.com/schemas/entity.json",');
  lines.push('  "title": "Entity",');
  lines.push('  "type": "object",');
  lines.push('  "properties": {');
  lines.push('    "id": { "type": "string", "format": "uuid", "description": "Unique entity identifier" },');
  lines.push('    "name": { "type": "string", "minLength": 1, "maxLength": 255, "description": "Entity display name" },');
  lines.push('    "email": { "type": "string", "format": "email", "description": "Contact email address" },');
  lines.push('    "age": { "type": "integer", "minimum": 0, "maximum": 150, "description": "Age in years" },');
  lines.push('    "status": { "type": "string", "enum": ["active", "inactive", "suspended"], "description": "Account status" },');
  lines.push('    "tags": { "type": "array", "items": { "type": "string" }, "uniqueItems": true, "description": "Resource tags" },');
  lines.push('    "address": {');
  lines.push('      "type": "object",');
  lines.push('      "properties": {');
  lines.push('        "street": { "type": "string" },');
  lines.push('        "city": { "type": "string" },');
  lines.push('        "zipCode": { "type": "string", "pattern": "^\\\\d{5}(-\\\\d{4})?$" }');
  lines.push('      },');
  lines.push('      "required": ["street", "city"]');
  lines.push('    },');
  lines.push('    "metadata": { "type": "object", "additionalProperties": true, "description": "Custom metadata" }');
  lines.push('  },');
  lines.push('  "required": ["id", "name", "email", "status"],');
  lines.push('  "additionalProperties": false,');
  lines.push('  "examples": [');
  lines.push('    {');
  lines.push('      "id": "550e8400-e29b-41d4-a716-446655440000",');
  lines.push('      "name": "John Doe",');
  lines.push('      "email": "john@example.com",');
  lines.push('      "age": 30,');
  lines.push('      "status": "active",');
  lines.push('      "tags": ["customer", "premium"],');
  lines.push('      "address": { "street": "123 Main St", "city": "Portland", "zipCode": "97201" }');
  lines.push('    }');
  lines.push('  ]');
  lines.push("}");
  lines.push("```");
  lines.push("");

  lines.push("## Validation Summary");
  lines.push("");
  lines.push("| Field | Type | Required | Validation");
  lines.push("|-------|------|----------|-----------");
  lines.push("| id | string (uuid) | Yes | Format: uuid");
  lines.push("| name | string | Yes | 1-255 characters");
  lines.push("| email | string | Yes | Format: email");
  lines.push("| age | integer | No | 0-150");
  lines.push("| status | string | Yes | Enum: active, inactive, suspended");
  lines.push("| tags | string[] | No | Unique items");
  lines.push("| address | object | No | Required: street, city");
  lines.push("| metadata | object | No | Additional properties: any");
  lines.push("");

  lines.push("## Implementation Guidelines");
  lines.push("");
  lines.push("- Validate incoming data against schema before any business logic.");
  lines.push("- Use a JSON Schema validator library (Ajv, Joi, or similar).");
  lines.push("- Expose schema via a /schemas endpoint for dynamic client-side validation.");
  lines.push("- Generate TypeScript types from schema using json-schema-to-typescript.");
  lines.push("- Version schemas with $id and maintain backward compatibility.");
  lines.push("- Document deprecations clearly with x-deprecated annotations.");
  lines.push("");

  lines.push("## Schema Composition");
  lines.push("");
  lines.push("Use allOf for schema composition and extension:");
  lines.push("");
  lines.push("```json");
  lines.push('{ "allOf": [');
  lines.push('  { "$ref": "#/$defs/BaseEntity" },');
  lines.push('  { "properties": { "specificField": { "type": "string" } } }');
  lines.push("] }");
  lines.push("```");
  lines.push("");

  lines.push("## Best Practices");
  lines.push("");
  lines.push("- Always include $schema and $id for self-documentation.");
  lines.push("- Use description on every property for generated documentation.");
  lines.push("- Set additionalProperties: false for strict validation.");
  lines.push("- Define reusable fragments in $defs for DRY schemas.");
  lines.push("- Use oneOf/anyOf for discriminated union types.");
  lines.push("- Include realistic examples for every schema.");
  lines.push("");

  lines.push("---");
  lines.push("");
  lines.push("_Generated by JSON Schema Generator_");

  return lines.join("\n");
}

export default function JsonSchemaPage() {
  return (
    <ToolShell
      title="JSON Schema Generator"
      steps={[
        { id: 1, label: "Type", component: (p) => (
          <GenericStep {...p} title="Root Data Type" description="What is the primary JSON data type?" options={options.dataType} mode="multiple" selected={p.selections.step1} selectKey="step1" notePrefix="dataType" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 2, label: "Props", component: (p) => (
          <GenericStep {...p} title="Properties Style" description="How should properties be organized?" options={options.properties} mode="multiple" selected={p.selections.step2} selectKey="step2" notePrefix="properties" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 3, label: "Validation", component: (p) => (
          <GenericStep {...p} title="Validation Rules" description="What validation constraints should apply?" options={options.validation} mode="multiple" selected={p.selections.step3} selectKey="step3" notePrefix="validation" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 4, label: "Required", component: (p) => (
          <GenericStep {...p} title="Required Fields Strategy" description="Which fields are mandatory?" options={options.required} mode="multiple" selected={p.selections.step4} selectKey="step4" notePrefix="required" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 5, label: "Nested", component: (p) => (
          <GenericStep {...p} title="Nested Objects" description="How are nested objects structured?" options={options.nestedObjects} mode="multiple" selected={p.selections.step5} selectKey="step5" notePrefix="nestedObjects" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 6, label: "Arrays", component: (p) => (
          <GenericStep {...p} title="Array Types" description="How should arrays be defined?" options={options.arrays} mode="multiple" selected={p.selections.step6} selectKey="step6" notePrefix="arrays" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 7, label: "Enums", component: (p) => (
          <GenericStep {...p} title="Enum Values" description="How are enum values configured?" options={options.enums} mode="multiple" selected={p.selections.step7} selectKey="step7" notePrefix="enums" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 8, label: "Examples", component: (p) => (
          <GenericStep {...p} title="Examples" description="How should examples be included?" options={options.examples} mode="multiple" selected={p.selections.step8} selectKey="step8" notePrefix="examples" notes={p.notes} onNote={p.onNote} />
        )},
      ]}
      onGenerate={generate}
    />
  );
}












