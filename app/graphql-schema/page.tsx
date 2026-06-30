"use client";

import type { FC } from "react";
import {
  Box, GitBranch, Search, Edit3, Radio, Braces, Shield,
  Gauge, Database, Link, Filter, Code, Split,
  Layers, Zap, User, Key, FileJson, Terminal, Server,
  Globe, Activity, Sliders, Lock, RefreshCw, ArrowLeftRight,
  Clock, Bell, FileText, BookOpen,
} from "lucide-react";
import { ToolShell } from "@/components/tool-wizard/tool-shell";
import { GenericStep } from "@/components/tool-wizard/generic-step";

const options = {
  entity: [
    { id: "user", title: "User", description: "User account with profile and authentication data", icon: User },
    { id: "product", title: "Product", description: "Product or item with pricing and inventory", icon: Box },
    { id: "order", title: "Order", description: "Purchase order with line items and status", icon: FileText },
    { id: "company", title: "Company", description: "Organization or business entity", icon: Server },
    { id: "invoice", title: "Invoice", description: "Billing invoice with charges and payments", icon: FileJson },
    { id: "category", title: "Category", description: "Taxonomy category for classification", icon: Layers },
    { id: "review", title: "Review", description: "User review with rating and content", icon: Activity },
    { id: "event", title: "Event", description: "Calendar event with time and participants", icon: Clock },
  ],
  relationship: [
    { id: "one-to-one", title: "One-to-One", description: "Each entity maps to exactly one of another", icon: Link },
    { id: "one-to-many", title: "One-to-Many", description: "An entity has many children", icon: GitBranch },
    { id: "many-to-many", title: "Many-to-Many", description: "Entities relate bidirectionally via join table", icon: GitBranch },
    { id: "self-ref", title: "Self-Referential", description: "Entity references itself (tree structure)", icon: Split },
    { id: "polymorphic", title: "Polymorphic", description: "Entity belongs to multiple types", icon: Layers },
    { id: "embedded", title: "Embedded", description: "Nested object embedded in parent document", icon: Box },
    { id: "interface", title: "Interface", description: "Shared fields across implementing types", icon: Braces },
    { id: "union", title: "Union", description: "One of several possible types", icon: Filter },
  ],
  query: [
    { id: "single-get", title: "Single Get", description: "Fetch one entity by ID", icon: Search },
    { id: "list", title: "List with Filters", description: "Paginated list with filter args", icon: Database },
    { id: "search", title: "Full-Text Search", description: "Search entities by text query", icon: Globe },
    { id: "aggregate", title: "Aggregation", description: "Count, sum, avg metrics", icon: Gauge },
    { id: "connection", title: "Relay Connection", description: "Cursor-based pagination with edges and nodes", icon: Link },
    { id: "batch", title: "Batch Load", description: "Load multiple entities in one query", icon: GitBranch },
    { id: "nested", title: "Nested Resolver", description: "Deeply nested field resolution", icon: GitBranch },
    { id: "stream", title: "Live Query", description: "Real-time subscription-based query", icon: Zap },
  ],
  mutation: [
    { id: "create", title: "Create Entity", description: "Insert a new entity record", icon: Edit3 },
    { id: "update", title: "Update Entity", description: "Update an existing entity by ID", icon: Edit3 },
    { id: "delete", title: "Delete Entity", description: "Remove an entity by ID", icon: Edit3 },
    { id: "upsert", title: "Upsert Entity", description: "Create or update based on unique key", icon: RefreshCw },
    { id: "batch-create", title: "Batch Create", description: "Create multiple entities at once", icon: GitBranch },
    { id: "soft-delete", title: "Soft Delete", description: "Mark as deleted without removal", icon: ArrowLeftRight },
    { id: "restore", title: "Restore Entity", description: "Restore a soft-deleted entity", icon: RefreshCw },
    { id: "custom-action", title: "Custom Action", description: "Execute domain-specific operations", icon: Zap },
  ],
  subscription: [
    { id: "entity-changes", title: "Entity Changes", description: "Subscribe to entity create/update/delete", icon: Radio },
    { id: "realtime-events", title: "Real-Time Events", description: "Custom events emitted by the server", icon: Zap },
    { id: "live-filters", title: "Live Filters", description: "Subscribe with filtering criteria", icon: Filter },
    { id: "heartbeat", title: "Heartbeat", description: "Periodic keepalive subscription", icon: Activity },
    { id: "progress", title: "Progress Updates", description: "Long-running operation progress", icon: Gauge },
    { id: "notifications", title: "Notifications", description: "Push notifications for users", icon: Bell },
    { id: "typing-indicator", title: "Typing Indicator", description: "Real-time typing status", icon: Edit3 },
    { id: "presence", title: "Presence Tracking", description: "Online/offline user status", icon: Radio },
  ],
  inputType: [
    { id: "create-input", title: "Create Input", description: "Input fields for entity creation", icon: Braces },
    { id: "update-input", title: "Update Input", description: "Partial fields for entity update", icon: Edit3 },
    { id: "filter-input", title: "Filter Input", description: "Filter criteria for list queries", icon: Filter },
    { id: "sort-input", title: "Sort Input", description: "Sort order specification", icon: Sliders },
    { id: "pagination-input", title: "Pagination Input", description: "Limit and offset / cursor input", icon: Layers },
    { id: "where-input", title: "Where Conditions", description: "Complex where clause with AND/OR", icon: Code },
    { id: "nested-input", title: "Nested Input", description: "Input for nested entity creation", icon: Box },
    { id: "file-input", title: "File Upload Input", description: "GraphQL multipart upload input", icon: FileJson },
  ],
  middleware: [
    { id: "auth-guard", title: "Auth Guard", description: "Authentication check before resolver", icon: Lock },
    { id: "rate-limit", title: "Rate Limiter", description: "Per-field or per-query rate limiting", icon: Gauge },
    { id: "validation", title: "Input Validation", description: "Validate input args before resolution", icon: Shield },
    { id: "logging", title: "Logging", description: "Log query details and execution time", icon: FileText },
    { id: "caching", title: "Caching", description: "Cache query results with TTL", icon: Database },
    { id: "permissions", title: "Permissions", description: "Role-based access control checks", icon: Key },
    { id: "tracing", title: "Tracing", description: "Distributed tracing for resolver chain", icon: Activity },
    { id: "error-handling", title: "Error Handler", description: "Format and mask error details", icon: Shield },
  ],
  performance: [
    { id: "dataloader", title: "DataLoader", description: "Batch and cache database requests", icon: GitBranch },
    { id: "query-depth", title: "Query Depth Limit", description: "Max nesting depth for queries", icon: Layers },
    { id: "query-cost", title: "Query Cost Analysis", description: "Weight-based query complexity limits", icon: Gauge },
    { id: "persisted-queries", title: "Persisted Queries", description: "Pre-register and hash queries", icon: Database },
    { id: "response-caching", title: "Response Caching", description: "Cache full query results", icon: Server },
    { id: "schema-stitching", title: "Schema Stitching", description: "GitBranch multiple GraphQL APIs", icon: Link },
    { id: "federation", title: "Federation", description: "Distributed GraphQL with Apollo Federation", icon: Globe },
    { id: "lazy-loading", title: "Lazy Loading", description: "Defer expensive fields", icon: Sliders },
  ],
};

const dict: Record<string, Record<string, string>> = {
  entity: {
    user: "Define a User entity with fields for identity (id, username, email), profile (displayName, avatarUrl, bio), and authentication (lastLogin, emailVerified, roles). Include timestamps for createdAt and updatedAt.",
    product: "Define a Product entity with pricing fields (price, compareAtPrice, currency), inventory (stock, sku, barcode), and description (title, description, images). Support variant relationships and category associations.",
    order: "Define an Order entity with status tracking (pending, confirmed, shipped, delivered, cancelled), financial fields (subtotal, tax, shipping, total), and customer info (shippingAddress, billingAddress, paymentMethod).",
    company: "Define a Company entity with registration data (name, ein, legalName), contact info (address, phone, website), and settings (timezone, locale, billingPlan). Support parent/child company hierarchies.",
    invoice: "Define an Invoice entity with line items (description, quantity, unitPrice, total), payment tracking (dueDate, paidDate, status), and tax breakdown (subtotal, taxRate, taxAmount, grandTotal).",
    category: "Define a Category entity with a hierarchical structure (parentId, path, level), display fields (name, slug, description, imageUrl), and product association (productCount, featuredProducts).",
    review: "Define a Review entity with rating (score out of 5, title, body), metadata (helpfulCount, verified, approved), and moderation status (pending, approved, rejected). Link to the reviewed product and author user.",
    event: "Define an Event entity with time fields (startDate, endDate, duration, allDay), location (venue, address, virtualLink), and recurrence rules (rrule, exceptions, seriesId) for repeating events.",
  },
  relationship: {
    "one-to-one": "Model a one-to-one relationship where each entity is associated with exactly one instance of another. Use a unique foreign key on either side. Example: User has one Profile, Profile belongs to one User.",
    "one-to-many": "Model a one-to-many relationship with a foreign key on the child table. Example: User has many Orders, Order has one User. Enforce referential integrity and support cascade deletes.",
    "many-to-many": "Model a many-to-many relationship with a join table. Example: Product belongs to many Categories, Category has many Products. The join table can carry additional metadata like position or isPrimary.",
    "self-ref": "Model a self-referential relationship for tree or hierarchy structures. Use a parentId field referencing the same entity. Example: Category has many child Categories. Support recursive queries for subtree traversal.",
    polymorphic: "Model a polymorphic relationship where an entity can belong to multiple different entity types. Use a combination of type and ID fields. Example: Comment belongs to Post, Video, or Image via commentableType and commentableId.",
    embedded: "Model an embedded relationship where the child object is stored directly within the parent document. Use for tightly coupled data that is always accessed together. Example: Order embeds ShippingAddress as a nested object.",
    interface: "Define a GraphQL interface with common fields shared by multiple implementing types. Example: a Node interface with id field implemented by User, Product, and Order. Use the ... on Type pattern in queries.",
    union: "Define a GraphQL union type representing one of several possible entity types. Example: a SearchResult union returning User, Product, or Category based on search matches. Resolve the type with __resolveType.",
  },
  query: {
    "single-get": "Implement a query to fetch a single entity by its unique identifier. Use the id argument and return nullable type. Support field-level selection and resolve nested relationships efficiently.",
    list: "Implement a list query with pagination (first, after / offset, limit) and filtering (where clause). Return a connection or paginated list with totalCount metadata. Filter by string, numeric, and date fields.",
    search: "Implement a full-text search query across multiple text fields. Support relevance scoring, fuzzy matching, and highlighted snippets. GitBranch with filters for faceted search and paginate ranked results.",
    aggregate: "Implement aggregation queries for computed metrics like count, sum, average, min, and max. Group by a field for metrics breakdown. Use across related entities for joined aggregations like order total per customer.",
    connection: "Implement a Relay-compatible connection type with edges (node + cursor) and pageInfo (hasNextPage, hasPreviousPage, startCursor, endCursor). Use cursor-based pagination for stable sorting across pages.",
    batch: "Implement batch queries using the DataLoader pattern to load multiple entities by IDs in a single database round trip. Accept an array of IDs and return results in the same order. Handle null for missing items.",
    nested: "Implement deeply nested resolver chains for related entity graphs. Resolve each relationship with batched DataLoader calls. Limit maximum query depth to prevent expensive nested queries.",
    stream: "Implement live queries that re-execute when underlying data changes. Use WebSocket transport with a subscription-like response stream. Support debouncing and diff-based result updates to minimize bandwidth.",
  },
  mutation: {
    create: "Implement a create mutation that validates input, inserts a new record, and returns the created entity. Support optimistic IDs and transaction rollback on failure. Return proper field errors for validation failures.",
    update: "Implement an update mutation that accepts partial input fields and updates only provided values. Return the updated entity. Use optimistic concurrency with version or updatedAt field checks.",
    delete: "Implement a delete mutation that removes an entity by ID. Return the deleted entity or a deletion confirmation. Handle dependency checks and cascade deletes for child records.",
    upsert: "Implement an upsert mutation that creates a new entity or updates an existing one based on a unique key conflict. Return the final state of the entity. Indicate whether it was created or updated in the response.",
    "batch-create": "Implement a batch create mutation that accepts an array of inputs and creates multiple entities in a transaction. Return the array of created entities with generated IDs. Rollback all on any failure.",
    "soft-delete": "Implement a soft delete mutation that sets a deletedAt timestamp instead of physically removing the record. Automatically filter soft-deleted records in queries unless explicitly requested with includeDeleted.",
    restore: "Implement a restore mutation that reverts a soft delete by clearing the deletedAt timestamp. Validate that the entity exists and is currently soft-deleted. Return the restored entity.",
    "custom-action": "Implement a custom action mutation for domain-specific operations like approve, reject, archive, duplicate, or publish. Accept operation-specific input and return operation-specific output.",
  },
  subscription: {
    "entity-changes": "Implement subscriptions that emit events on entity create, update, or delete. Include the mutation type, entity ID, and the full entity snapshot in the payload. Support filtering by entity type and operation.",
    "realtime-events": "Implement custom event subscriptions where the server can emit arbitrary events. Use a publish-subscribe pattern with topic-based routing. Support payload schema with GraphQL types.",
    "live-filters": "Implement subscription filters that allow clients to subscribe with criteria like only orders with status 'shipped'. Server evaluates filter against each event before publishing. Reduce client-side filtering overhead.",
    heartbeat: "Implement a heartbeat subscription that periodically emits a pulse at a configurable interval. Use to keep WebSocket connections alive and detect stale connections. Include server timestamp and connection health status.",
    progress: "Implement a progress subscription for long-running operations like report generation or bulk imports. Emit progress events with percentage, current step, total steps, and estimated time remaining.",
    notifications: "Implement a notification subscription for push notifications. Support notification types (info, warning, error, success), read/unread status, and deep-link payloads for navigation.",
    "typing-indicator": "Implement a typing indicator subscription for real-time chat. Emit events when a user starts or stops typing. Include userId, conversationId, and optionally the current input preview.",
    presence: "Implement presence tracking subscriptions showing online/offline user status. Emit events on connect/disconnect. Include lastSeen timestamp and current active status. Support custom status messages.",
  },
  inputType: {
    "create-input": "Define a Create<Entity>Input type with all mutable fields. Use non-null fields for required values. Include nested input types for related entity creation. Validate uniqueness constraints server-side.",
    "update-input": "Define an Update<Entity>Input type with all fields optional. Only update the provided fields. Use the partial pattern. Include the ID field to identify the entity and a version field for optimistic locking.",
    "filter-input": "Define a Filter<Entity>Input type with comparison operators (eq, neq, gt, gte, lt, lte, in, notIn, contains, startsWith, endsWith). Support AND/OR logical grouping and nested relation filters.",
    "sort-input": "Define a SortInput type with field name and direction (asc/desc) enum. Support multi-field sorting with primary and secondary sort criteria. Example: [{ field: \"createdAt\", direction: \"desc\" }, { field: \"name\", direction: \"asc\" }].",
    "pagination-input": "Define a PaginationInput with either offset/limit or cursor-based (first, after) parameters. Set reasonable defaults (limit: 20, max: 100). Use cursor-based pagination for large datasets with frequent inserts.",
    "where-input": "Define a WhereInput with dynamic field conditions. Support complex Boolean logic with AND, OR, and NOT operators. Implement for each entity type with entity-specific filterable fields and nested relation filters.",
    "nested-input": "Define a Nested<Entity>Input for creating related entities inline. Example: OrderCreateInput includes a nested OrderItemInput array. Support upsert semantics for nested creation vs. association.",
    "file-input": "Define a file upload input using the GraphQL multipart request specification. Accept a File scalar or Upload type. Support single and multiple file uploads with size, MIME type, and dimension restrictions.",
  },
  middleware: {
    "auth-guard": "Implement an authentication guard middleware that runs before resolvers. Extract and validate JWT or session token from the GraphQL context. Return AuthenticationError if invalid or expired.",
    "rate-limit": "Implement rate limiting middleware per field or per query. Use token bucket or sliding window algorithm. Return RateLimitError with retry-after hint when limit is exceeded. Differentiate by user role and endpoint.",
    validation: "Implement input validation middleware using schema-based validation rules. Check required fields, data types, string lengths, number ranges, and pattern matches. Return ValidationError with field-level error details.",
    logging: "Implement logging middleware that records query documents, variables, execution time, and resolver spans. Mask sensitive fields like passwords and tokens. Use structured logging with correlation IDs.",
    caching: "Implement response caching middleware with configurable TTL per field or query. Use in-memory or Redis cache. Invalidate cache entries on related mutations. Use cache keys derived from query document and variables.",
    permissions: "Implement permission-checking middleware that evaluates the current user's roles and permissions against field-level access rules. Use declarative @hasRole or @hasPermission directives in the schema.",
    tracing: "Implement distributed tracing middleware that creates spans for each resolver invocation. Propagate trace context via headers. Include resolver name, field path, duration, and any errors in the span attributes.",
    "error-handling": "Implement error handling middleware that catches resolver errors and formats them according to GraphQL spec. Mask internal error details in production. Classify errors as validation, auth, or server errors.",
  },
  performance: {
    dataloader: "Implement DataLoader for batching and caching database requests per request context. Create loaders for each entity type. Use batch load functions that accept arrays of keys and return arrays of values aligned by index.",
    "query-depth": "Set a maximum query depth limit (e.g., 8 levels) to prevent deeply nested malicious queries. Reject queries exceeding the limit with a clear error message. Calculate depth after fragment expansion.",
    "query-cost": "Implement query cost analysis where each field has a weight. Set a maximum cost per query. Charge more for expensive operations like list queries with filters or nested relationship loads. Reject overly expensive queries.",
    "persisted-queries": "Implement automatic persisted queries (APQ) where clients send a hash instead of the full query string. Store the query-server mapping. Reduces network payload size and prevents arbitrary query execution.",
    "response-caching": "Implement full response caching at the GraphQL layer. Cache complete query results with a TTL. Use cache tags for granular invalidation. Invalidate on mutations affecting cached queries.",
    "schema-stitching": "Implement schema stitching to GitBranch multiple GraphQL microservices into a single unified schema. Each service defines its own types and resolvers. The gateway stitches them together with type extension and delegation.",
    federation: "Implement Apollo Federation for a distributed GraphQL architecture. Define entities with @key directives. Each subgraph contributes fields and resolvers. The supergraph gateway composes and routes queries.",
    "lazy-loading": "Implement lazy loading for expensive fields using the @defer directive. The client receives the initial response immediately and the deferred field value arrives later as a patch. Improve perceived query performance.",
  },
};

function generate(selections: Record<string, any>, notes: Record<string, string>): string {
  const entity = selections.step1;
  const relationship = selections.step2;
  const queries: string[] = selections.step3 || [];
  const mutations: string[] = selections.step4 || [];
  const subscriptions: string[] = selections.step5 || [];
  const inputTypes: string[] = selections.step6 || [];
  const middleware: string[] = selections.step7 || [];
  const performance = selections.step8;

  const lines: string[] = [];

  lines.push("# GraphQL Schema Design");
  lines.push("");
  lines.push("## Configuration Summary");
  lines.push("");
  lines.push("| Setting | Selection | Notes");
  lines.push("|---------|-----------|------");
  const eLabel = Array.isArray(entity) ? entity.map(id => options.entity.find(o => o.id === id)?.title || id).join(", ") : options.entity.find(o => o.id === entity)?.title || entity;
  const eNote = notes[`entity-${entity}`] || "";
  lines.push(`| Primary Entity | ${eLabel} | ${eNote}`);
  const rLabel = Array.isArray(relationship) ? relationship.map(id => options.relationship.find(o => o.id === id)?.title || id).join(", ") : options.relationship.find(o => o.id === relationship)?.title || relationship;
  const rNote = notes[`relationship-${relationship}`] || "";
  lines.push(`| Relationship Type | ${rLabel} | ${rNote}`);
  const qLabels = queries.map(id => options.query.find(o => o.id === id)?.title || id).join(", ");
  const qNotes = queries.map(id => notes[`queries-${id}`] || "").filter(Boolean).join("; ");
  lines.push(`| Queries | ${qLabels || "None"} | ${qNotes}`);
  const muLabels = mutations.map(id => options.mutation.find(o => o.id === id)?.title || id).join(", ");
  const muNotes = mutations.map(id => notes[`mutations-${id}`] || "").filter(Boolean).join("; ");
  lines.push(`| Mutations | ${muLabels || "None"} | ${muNotes}`);
  const suLabels = subscriptions.map(id => options.subscription.find(o => o.id === id)?.title || id).join(", ");
  const suNotes = subscriptions.map(id => notes[`subscriptions-${id}`] || "").filter(Boolean).join("; ");
  lines.push(`| Subscriptions | ${suLabels || "None"} | ${suNotes}`);
  const itLabels = inputTypes.map(id => options.inputType.find(o => o.id === id)?.title || id).join(", ");
  const itNotes = inputTypes.map(id => notes[`inputTypes-${id}`] || "").filter(Boolean).join("; ");
  lines.push(`| Input Types | ${itLabels || "None"} | ${itNotes}`);
  const miLabels = middleware.map(id => options.middleware.find(o => o.id === id)?.title || id).join(", ");
  const miNotes = middleware.map(id => notes[`middleware-${id}`] || "").filter(Boolean).join("; ");
  lines.push(`| Middleware | ${miLabels || "None"} | ${miNotes}`);
  const pfLabel = Array.isArray(performance) ? performance.map(id => options.performance.find(o => o.id === id)?.title || id).join(", ") : options.performance.find(o => o.id === performance)?.title || performance;
  const pfNote = notes[`performance-${performance}`] || "";
  lines.push(`| Performance | ${pfLabel} | ${pfNote}`);
  lines.push("");

  if (entity) {
    lines.push("## Entity Definition");
    lines.push("");
    lines.push("```graphql");
    lines.push(`type ${eLabel} {`);
    lines.push("  id: ID!");
    if (eLabel === "User") {
      lines.push("  username: String!");
      lines.push("  email: String!");
      lines.push("  displayName: String");
      lines.push("  avatarUrl: URL");
      lines.push("  bio: String");
      lines.push("  roles: [Role!]!");
      lines.push("  createdAt: DateTime!");
      lines.push("  updatedAt: DateTime!");
    } else if (eLabel === "Product") {
      lines.push("  title: String!");
      lines.push("  description: String");
      lines.push("  price: Float!");
      lines.push("  compareAtPrice: Float");
      lines.push("  currency: Currency!");
      lines.push("  stock: Int!");
      lines.push("  sku: String!");
      lines.push("  images: [URL!]");
      lines.push("  createdAt: DateTime!");
    } else if (eLabel === "Order") {
      lines.push("  status: OrderStatus!");
      lines.push("  subtotal: Float!");
      lines.push("  tax: Float!");
      lines.push("  shipping: Float!");
      lines.push("  total: Float!");
      lines.push("  items: [OrderItem!]!");
      lines.push("  shippingAddress: Address!");
      lines.push("  createdAt: DateTime!");
    } else {
      lines.push("  name: String!");
      lines.push("  description: String");
      lines.push("  createdAt: DateTime!");
      lines.push("  updatedAt: DateTime!");
    }
    lines.push("}");
    lines.push("");
    lines.push(Array.isArray(entity) ? entity.map(v => dict.entity[v] || v).join(", ") : dict.entity[entity] || entity);
    if (eNote) lines.push(`> **Note:** ${eNote}`);
    lines.push("");
  }

  if (relationship) {
    lines.push("## Relationship Configuration");
    lines.push("");
    lines.push(Array.isArray(relationship) ? relationship.map(v => dict.relationship[v] || v).join(", ") : dict.relationship[relationship] || relationship);
    if (rNote) lines.push(`> **Note:** ${rNote}`);
    lines.push("");
  }

  if (queries.length > 0) {
    lines.push("## Query Definitions");
    lines.push("");
    for (const qId of queries) {
      const label = options.query.find(o => o.id === qId)?.title || qId;
      lines.push(`### ${label}`);
      lines.push("");
      lines.push(dict.query[qId] || "");
      const note = notes[`queries-${qId}`] || "";
      if (note) lines.push(`> **Note:** ${note}`);
      lines.push("");
    }
  }

  if (mutations.length > 0) {
    lines.push("## Mutation Definitions");
    lines.push("");
    for (const mId of mutations) {
      const label = options.mutation.find(o => o.id === mId)?.title || mId;
      lines.push(`### ${label}`);
      lines.push("");
      lines.push(dict.mutation[mId] || "");
      const note = notes[`mutations-${mId}`] || "";
      if (note) lines.push(`> **Note:** ${note}`);
      lines.push("");
    }
  }

  if (subscriptions.length > 0) {
    lines.push("## Subscription Definitions");
    lines.push("");
    for (const sId of subscriptions) {
      const label = options.subscription.find(o => o.id === sId)?.title || sId;
      lines.push(`### ${label}`);
      lines.push("");
      lines.push(dict.subscription[sId] || "");
      const note = notes[`subscriptions-${sId}`] || "";
      if (note) lines.push(`> **Note:** ${note}`);
      lines.push("");
    }
  }

  if (inputTypes.length > 0) {
    lines.push("## Input Type Definitions");
    lines.push("");
    for (const iId of inputTypes) {
      const label = options.inputType.find(o => o.id === iId)?.title || iId;
      lines.push(`### ${label}`);
      lines.push("");
      lines.push(dict.inputType[iId] || "");
      const note = notes[`inputTypes-${iId}`] || "";
      if (note) lines.push(`> **Note:** ${note}`);
      lines.push("");
    }
  }

  if (middleware.length > 0) {
    lines.push("## Middleware Configuration");
    lines.push("");
    for (const mId of middleware) {
      const label = options.middleware.find(o => o.id === mId)?.title || mId;
      lines.push(`### ${label}`);
      lines.push("");
      lines.push(dict.middleware[mId] || "");
      const note = notes[`middleware-${mId}`] || "";
      if (note) lines.push(`> **Note:** ${note}`);
      lines.push("");
    }
  }

  if (performance) {
    lines.push("## Performance Optimization");
    lines.push("");
    lines.push(Array.isArray(performance) ? performance.map(v => dict.performance[v] || v).join(", ") : dict.performance[performance] || performance);
    if (pfNote) lines.push(`> **Note:** ${pfNote}`);
    lines.push("");
  }

  lines.push("## Schema Skeleton");
  lines.push("");
  lines.push("```graphql");
  lines.push("schema {");
  if (queries.length > 0) lines.push("  query: Query");
  if (mutations.length > 0) lines.push("  mutation: Mutation");
  if (subscriptions.length > 0) lines.push("  subscription: Subscription");
  lines.push("}");
  lines.push("");
  lines.push("type Query {");
  for (const qId of queries) {
    const label = options.query.find(o => o.id === qId)?.title || qId;
    const fieldName = qId === "single-get" ? `${entity?.toLowerCase()}(id: ID!)` :
      qId === "list" ? `${entity?.toLowerCase()}s(filter: ${eLabel}Filter, pagination: PaginationInput)` :
      qId === "search" ? `search${eLabel}(query: String!)` :
      qId === "aggregate" ? `${entity?.toLowerCase()}Aggregate(filter: ${eLabel}Filter)` :
      qId === "connection" ? `${entity?.toLowerCase()}Connection(pagination: ConnectionInput)` :
      qId === "batch" ? `${entity?.toLowerCase()}Batch(ids: [ID!]!)` :
      qId === "nested" ? `${entity?.toLowerCase()}WithRelations(id: ID!)` :
      qId === "stream" ? `${entity?.toLowerCase()}Stream(filter: ${eLabel}Filter)` : `${entity?.toLowerCase()}Query`;
    lines.push(`  ${fieldName}: ${label.replace(/\s/g, "")}Result`);
  }
  lines.push("}");
  if (mutations.length > 0) {
    lines.push("");
    lines.push("type Mutation {");
    for (const mId of mutations) {
      const label = options.mutation.find(o => o.id === mId)?.title || mId;
      const fieldName = mId === "create" ? `create${eLabel}(input: Create${eLabel}Input!)` :
        mId === "update" ? `update${eLabel}(id: ID!, input: Update${eLabel}Input!)` :
        mId === "delete" ? `delete${eLabel}(id: ID!)` :
        mId === "upsert" ? `upsert${eLabel}(input: Upsert${eLabel}Input!)` :
        mId === "batch-create" ? `create${eLabel}Batch(inputs: [Create${eLabel}Input!]!)` :
        mId === "soft-delete" ? `softDelete${eLabel}(id: ID!)` :
        mId === "restore" ? `restore${eLabel}(id: ID!)` :
        `${mId}${eLabel}`;
      lines.push(`  ${fieldName}: ${eLabel}Payload`);
    }
    lines.push("}");
  }
  if (subscriptions.length > 0) {
    lines.push("");
    lines.push("type Subscription {");
    for (const sId of subscriptions) {
      const label = options.subscription.find(o => o.id === sId)?.title || sId;
      const fieldName = sId === "entity-changes" ? `${entity?.toLowerCase()}Changes` :
        sId === "realtime-events" ? `${entity?.toLowerCase()}Events` :
        sId === "live-filters" ? `${entity?.toLowerCase()}Filtered` :
        sId === "heartbeat" ? "heartbeat(interval: Int)" :
        sId === "progress" ? "progress(operationId: ID!)" :
        sId === "notifications" ? "notifications" :
        sId === "typing-indicator" ? "typingIndicator(conversationId: ID!)" :
        sId === "presence" ? "presence" : sId;
      lines.push(`  ${fieldName}: ${label.replace(/\s/g, "")}Event`);
    }
    lines.push("}");
  }
  lines.push("```");
  lines.push("");

  lines.push("## Resolver Implementation Notes");
  lines.push("");
  lines.push("- Use DataLoader for N+1 query prevention in all relationship resolvers.");
  lines.push("- Implement proper error handling with expected error types.");
  lines.push("- Use input validation middleware for all mutation inputs.");
  lines.push("- Log all resolver execution times for performance monitoring.");
  lines.push("- Set appropriate complexity costs on expensive resolver fields.");
  if (performance === "persisted-queries") {
    lines.push("- Register all queries in the persistence store during build time.");
  }
  if (performance === "federation") {
    lines.push("- Define @key directives on entities. Use @requires and @provides for computed fields.");
  }
  lines.push("");

  lines.push("## Security Considerations");
  lines.push("");
  lines.push("- Apply authentication guards on all mutations and protected queries.");
  lines.push("- Validate all input arguments against injection attacks.");
  lines.push("- Mask internal error details in production responses.");
  lines.push("- Limit query depth and complexity to prevent resource exhaustion.");
  lines.push("- Implement rate limiting per user role and query type.");
  lines.push("");

  lines.push("## Recommended Tooling");
  lines.push("");
  lines.push("| Tool | Purpose");
  lines.push("|------|---------");
  lines.push("| Apollo Server / Yoga | GraphQL server runtime");
  lines.push("| GraphQL Code Generator | Type-safe client code generation");
  lines.push("| Apollo Studio / GraphiQL | Schema exploration and testing");
  lines.push("| DataLoader | Batch data loading for resolvers");
  lines.push("| ESLint Plugin | Schema linting and validation");
  lines.push("");

  lines.push("---");
  lines.push("");
  lines.push("_Generated by GraphQL Schema Designer_");

  return lines.join("\n");
}

export default function GraphqlSchemaPage() {
  return (
    <ToolShell
      title="GraphQL Schema Designer"
      steps={[
        { id: 1, label: "Entity", component: (p) => (
          <GenericStep {...p} title="Select Entity Type" description="What is the primary entity in your schema?" options={options.entity} mode="multiple" selected={p.selections.step1} selectKey="step1" notePrefix="entity" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 2, label: "Relation", component: (p) => (
          <GenericStep {...p} title="Relationship Type" description="How are entities related?" options={options.relationship} mode="multiple" selected={p.selections.step2} selectKey="step2" notePrefix="relationship" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 3, label: "Queries", component: (p) => (
          <GenericStep {...p} title="Query Definitions" description="What queries should be available?" options={options.query} mode="multiple" selected={p.selections.step3} selectKey="step3" notePrefix="queries" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 4, label: "Mutations", component: (p) => (
          <GenericStep {...p} title="Mutation Definitions" description="What mutations should be available?" options={options.mutation} mode="multiple" selected={p.selections.step4} selectKey="step4" notePrefix="mutations" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 5, label: "Subscribe", component: (p) => (
          <GenericStep {...p} title="Subscription Definitions" description="What subscriptions are needed?" options={options.subscription} mode="multiple" selected={p.selections.step5} selectKey="step5" notePrefix="subscriptions" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 6, label: "Input", component: (p) => (
          <GenericStep {...p} title="Input Types" description="What input types are required?" options={options.inputType} mode="multiple" selected={p.selections.step6} selectKey="step6" notePrefix="inputTypes" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 7, label: "Middleware", component: (p) => (
          <GenericStep {...p} title="Middleware" description="What middleware layers should be applied?" options={options.middleware} mode="multiple" selected={p.selections.step7} selectKey="step7" notePrefix="middleware" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 8, label: "Perf", component: (p) => (
          <GenericStep {...p} title="Performance Optimization" description="How should schema performance be optimized?" options={options.performance} mode="multiple" selected={p.selections.step8} selectKey="step8" notePrefix="performance" notes={p.notes} onNote={p.onNote} />
        )},
      ]}
      onGenerate={generate}
    />
  );
}










