"use client";

import type { FC } from "react";
import {
  MousePointerClick, Table2, GitMerge, Filter, FunctionSquare,
  ArrowUpDown, ArrowRight, ArrowLeft, List, FileJson, FileSpreadsheet, Terminal,
  Database, FolderOpen, Hash, Columns3, PanelBottomClose,
  AppWindow, BookTemplate, FileType, GanttChartSquare, GitBranch, BarChart3,
  ArrowLeftRight, Equal, ListFilter, Split,
  ListChecks, ChevronDown, RefreshCw, Search, Sparkles,
  ArrowUpWideNarrow, ArrowDownWideNarrow, Container, ScrollText,
  Eye, Type, SlidersHorizontal, Brackets,
  Ban, Box, CornerDownRight,
  FileBarChart, FileOutput, FileCode, FileText,
} from "lucide-react";
import { ToolShell } from "@/components/tool-wizard/tool-shell";
import { GenericStep } from "@/components/tool-wizard/generic-step";

const options = {
  operationType: [
    { id: "select", title: "SELECT Query", description: "Retrieve rows from one or more tables with optional filters", icon: Search },
    { id: "insert", title: "INSERT Query", description: "Add new rows into a table with column values", icon: ArrowLeftRight },
    { id: "update", title: "UPDATE Query", description: "Modify existing rows by matching a condition", icon: ArrowLeftRight },
    { id: "delete", title: "DELETE Query", description: "Remove rows that match a condition", icon: Split },
    { id: "create-table", title: "CREATE TABLE", description: "Define a new table with columns, types, and constraints", icon: Table2 },
    { id: "alter-table", title: "ALTER TABLE", description: "Add, drop, or rename columns and constraints", icon: Columns3 },
    { id: "create-index", title: "CREATE INDEX", description: "Build an index for faster query performance", icon: Hash },
    { id: "cte", title: "CTE / WITH Query", description: "Write a common table expression for modular queries", icon: Container },
    { id: "union", title: "UNION Query", description: "GitBranch results from multiple SELECT statements", icon: GitMerge },
  ],
  tables: [
    { id: "customers", title: "Customers", description: "Customer profile and contact information table", icon: FolderOpen },
    { id: "orders", title: "Orders", description: "Order headers with status and date columns", icon: ScrollText },
    { id: "products", title: "Products", description: "Product catalog with pricing and inventory", icon: Box },
    { id: "order-items", title: "Order Items", description: "Line items linking orders to products", icon: List },
    { id: "users", title: "Users", description: "User accounts with roles and authentication data", icon: Eye },
    { id: "categories", title: "Categories", description: "Product category hierarchy tree", icon: Columns3 },
    { id: "inventory", title: "Inventory", description: "Stock levels and warehouse locations", icon: Container },
    { id: "payments", title: "Payments", description: "Payment transactions and status tracking", icon: GanttChartSquare },
    { id: "reviews", title: "Reviews", description: "Product reviews with ratings and comments", icon: Type },
  ],
  joins: [
    { id: "inner", title: "INNER JOIN", description: "Return matching rows from both tables only", icon: GitMerge },
    { id: "left", title: "LEFT JOIN", description: "All rows from left table, matched from right", icon: ArrowRight },
    { id: "right", title: "RIGHT JOIN", description: "All rows from right table, matched from left", icon: ArrowLeft },
    { id: "full", title: "FULL JOIN", description: "All rows from both tables, NULLs where unmatched", icon: ArrowLeftRight },
    { id: "cross", title: "CROSS JOIN", description: "Cartesian product of all rows from both tables", icon: GitBranch },
    { id: "self", title: "SELF JOIN", description: "Join a table to itself using aliases", icon: RefreshCw },
    { id: "natural", title: "NATURAL JOIN", description: "Auto-match columns with the same name", icon: Sparkles },
    { id: "lateral", title: "LATERAL JOIN", description: "Subquery that references columns from preceding FROM items", icon: CornerDownRight },
    { id: "semi", title: "SEMI JOIN", description: "Return rows from left table that have a match in right", icon: Filter },
  ],
  filters: [
    { id: "where", title: "WHERE Clause", description: "Basic condition filtering with AND/OR operators", icon: Filter },
    { id: "having", title: "HAVING Clause", description: "Filter aggregated results after GROUP BY", icon: FunctionSquare },
    { id: "where-having", title: "WHERE + HAVING", description: "Row filter before grouping, group filter after", icon: ListFilter },
    { id: "between", title: "BETWEEN Range", description: "Filter values within a numeric or date range", icon: ArrowLeftRight },
    { id: "in", title: "IN List", description: "Filter values matching a set of discrete values", icon: ListChecks },
    { id: "like", title: "LIKE Pattern", description: "String pattern matching with wildcards", icon: Type },
    { id: "exists", title: "EXISTS Subquery", description: "Check existence of rows in a subquery", icon: Eye },
    { id: "not", title: "NOT / Exclusion", description: "Negate a condition or exclude matching rows", icon: Ban },
  ],
  aggregations: [
    { id: "count", title: "COUNT", description: "Count number of rows in a group", icon: Hash },
    { id: "sum", title: "SUM", description: "Sum numeric column values per group", icon: Hash },
    { id: "avg", title: "AVG", description: "Average of numeric column values", icon: Hash },
    { id: "min", title: "MIN", description: "Minimum value in a group", icon: Hash },
    { id: "max", title: "MAX", description: "Maximum value in a group", icon: Hash },
    { id: "group-by", title: "GROUP BY", description: "Group rows by one or more columns for aggregation", icon: Columns3 },
    { id: "count-distinct", title: "COUNT DISTINCT", description: "Count unique non-null values per group", icon: Hash },
    { id: "multiple-aggs", title: "Multiple Aggregations", description: "GitBranch several aggregation functions in one query", icon: BarChart3 },
  ],
  sorting: [
    { id: "asc", title: "ASC (A-Z, 0-9)", description: "Sort ascending — smallest first", icon: ArrowUpWideNarrow },
    { id: "desc", title: "DESC (Z-A, 9-0)", description: "Sort descending — largest first", icon: ArrowDownWideNarrow },
    { id: "multi-column", title: "Multi-Column Sort", description: "Sort by primary column then secondary columns", icon: Columns3 },
    { id: "nulls-first", title: "NULLS FIRST", description: "Push NULL values to the top of the result set", icon: ArrowUpDown },
    { id: "nulls-last", title: "NULLS LAST", description: "Push NULL values to the bottom of the result set", icon: ArrowDownWideNarrow },
    { id: "case-insensitive", title: "Case-Insensitive", description: "Sort ignoring letter case differences", icon: Type },
    { id: "natural-sort", title: "Natural Sort", description: "Sort mixed text+numbers in human-friendly order", icon: List },
    { id: "random", title: "RANDOM ORDER", description: "Return rows in random order", icon: ChevronDown },
  ],
  limitPagination: [
    { id: "limit", title: "LIMIT Only", description: "Simple row count limit with no offset", icon: Hash },
    { id: "limit-offset", title: "LIMIT + OFFSET", description: "Standard pagination with skip and take", icon: PanelBottomClose },
    { id: "keyset", title: "Keyset / Cursor Pagination", description: "Page using last seen column values for stable ordering", icon: ArrowLeftRight },
    { id: "top-n", title: "TOP N Per Group", description: "Fetch top N rows within each group", icon: BarChart3 },
    { id: "no-limit", title: "No Limit", description: "Return all matching rows without restriction", icon: Ban },
    { id: "with-ties", title: "WITH TIES", description: "Include rows tied with the last row in the limit", icon: GitMerge },
    { id: "offset-fetch", title: "OFFSET / FETCH", description: "SQL standard pagination with OFFSET and FETCH NEXT", icon: ScrollText },
    { id: "sample", title: "TABLESAMPLE", description: "Return a random sample of rows from the table", icon: Container },
  ],
  outputFormat: [
    { id: "json", title: "JSON", description: "Return results as a JSON array or object", icon: FileJson },
    { id: "csv", title: "CSV", description: "Comma-separated values with headers", icon: FileSpreadsheet },
    { id: "sql", title: "SQL Script", description: "Generate the query as a formatted SQL script", icon: Terminal },
    { id: "table", title: "Table Grid", description: "Display results in a formatted ASCII or HTML table", icon: Table2 },
    { id: "insert-stmts", title: "INSERT Statements", description: "Generate INSERT statements from results", icon: ArrowLeftRight },
    { id: "update-stmts", title: "UPDATE Statements", description: "Generate UPDATE statements from results", icon: ArrowLeftRight },
    { id: "explain", title: "EXPLAIN Plan", description: "Show the query execution plan", icon: GanttChartSquare },
    { id: "chart", title: "Chart Data", description: "Format results for charting libraries", icon: BarChart3 },
  ],
};

const dict: Record<string, Record<string, string>> = {
  operationType: {
    select: "Construct a SELECT query to retrieve rows from one or more tables. Support WHERE filtering, JOIN clauses, GROUP BY aggregation, HAVING conditions, ORDER BY sorting, and LIMIT pagination. Column selection can include expressions, aliases, and subqueries.",
    insert: "Build an INSERT INTO statement to add new rows to the target table. Specify columns explicitly or omit to insert into all columns. Support for single-row INSERT, multi-row VALUES, and INSERT INTO ... SELECT from other tables.",
    update: "Generate an UPDATE statement with a SET clause for column modifications and a WHERE condition to identify rows. Support correlated subqueries in SET values and RETURNING clauses for PostgreSQL and other databases.",
    delete: "Compose a DELETE FROM statement with optional WHERE conditions. Support CASCADE behavior references, TRUNCATE alternatives, and RETURNING deleted rows for auditing purposes.",
    "create-table": "Generate a CREATE TABLE DDL with column definitions, data types, NOT NULL constraints, DEFAULT values, PRIMARY KEY, FOREIGN KEY references, and CHECK constraints. Include IF NOT EXISTS and storage parameters.",
    "alter-table": "Build ALTER TABLE statements for schema evolution. Support ADD COLUMN, DROP COLUMN, MODIFY COLUMN, RENAME COLUMN, ADD CONSTRAINT, DROP CONSTRAINT, and table-level options.",
    "create-index": "Generate CREATE INDEX statements. Support B-tree, Hash, GiST, GIN, and BRIN index types. Include partial indexes with WHERE clauses, composite indexes on multiple columns, and concurrent building options.",
    cte: "Write a WITH clause (Common Table Expression) for modular, readable queries. Support recursive CTEs for hierarchical data traversal, multiple CTEs in one query, and CTEs used in INSERT/UPDATE/DELETE statements.",
    union: "GitBranch multiple SELECT results with UNION, UNION ALL, INTERSECT, or EXCEPT set operations. Each SELECT must have the same number of columns with compatible data types.",
  },
  tables: {
    customers: "Core customer entity storing profiles, contact details, segmentation data, and account status. Typically the central table in CRM and e-commerce schemas with foreign key references from orders and addresses.",
    orders: "Order header record containing order date, status, total amount, shipping address, and customer reference. Each order has one or more associated order items in a one-to-many relationship.",
    products: "Product catalog table with SKU, name, description, price, cost, tax category, and active status. May include JSON metadata for variable product attributes and multiple category associations.",
    "order-items": "Line-item detail table linking orders to products. Contains quantity, unit price, discount, and line total. Enforces referential integrity to both orders and products via foreign keys.",
    users: "User accounts table with username, email, password hash, role, last login timestamp, and account flags. May integrate with authentication systems and support multi-tenant row-level security.",
    categories: "Product category hierarchy supporting parent-child relationships for nested category browsing. Use adjacency list or nested set model for tree traversal queries.",
    inventory: "Stock management table tracking quantity on hand, reserved stock, reorder levels, warehouse location bin, and last count date. Updated transactionally on order fulfillment and receiving.",
    payments: "Payment transaction records with amount, currency, payment method, transaction ID, status, and timestamps. Linked to orders and may capture gateway response payloads for reconciliation.",
    reviews: "User-generated product reviews containing rating (1-5), title, body text, verified purchase flag, moderation status, and helpfulness votes. Drive product recommendation and search ranking features.",
  },
  joins: {
    inner: "INNER JOIN returns only rows where the join condition matches in both tables. This is the most common join type and excludes unmatched rows from both sides for strict result filtering.",
    left: "LEFT JOIN returns all rows from the left table with matching rows from the right table. Non-matching right-side columns contain NULL. Essential for finding orphans or preserving all left entries.",
    right: "RIGHT JOIN returns all rows from the right table with matching rows from the left table. Less common than LEFT JOIN but useful when the canonical data resides in the right table.",
    full: "FULL OUTER JOIN returns all rows from both tables, matching where possible and NULLing non-matching sides. Useful for comparing two datasets or reconciling differences between systems.",
    cross: "CROSS JOIN produces the Cartesian product of both tables. Each row in table A pairs with every row in table B. Use cautiously — row count is len(A) x len(B). Often used with filtering in WHERE.",
    self: "SELF JOIN joins a table to itself using aliases. Common patterns: employee-manager hierarchies, category parent-child relationships, and comparing rows within the same table.",
    natural: "NATURAL JOIN automatically joins on columns with the same name in both tables. Convenient but risky — schema changes may alter behavior. Prefer explicit USING over NATURAL JOIN in production.",
    lateral: "LATERAL JOIN allows a subquery in the FROM clause to reference columns from preceding FROM items. Powerful for top-N per group, jsonb expansion, and complex row transformations.",
    semi: "SEMI JOIN (typically via EXISTS or IN) returns rows from the left table if a matching row exists in the right table. Does not duplicate left rows even for multiple right matches.",
  },
  filters: {
    where: "WHERE clause filters rows before aggregation. GitBranch conditions with AND, OR, and NOT operators. Support parentheses for grouping, column comparisons, expressions, and scalar subqueries.",
    having: "HAVING clause filters groups created by GROUP BY. Used to apply conditions on aggregate results such as COUNT(*) > 10 or SUM(amount) >= 1000. Can reference aggregate function aliases.",
    "where-having": "Apply both WHERE and HAVING for two-stage filtering. WHERE first discards irrelevant rows before aggregation, then HAVING filters the aggregated groups. This is more performant than filtering in HAVING alone.",
    between: "BETWEEN operator filters values inclusively within a lower and upper bound. Works with numeric, date, and timestamp columns. Note that BETWEEN is inclusive on both ends: x BETWEEN a AND b means x >= a AND x <= b.",
    in: "IN operator checks if a column value matches any value in a list or a subquery result. The list can contain up to thousands of values, but very large lists may degrade performance vs. a temporary table join.",
    like: "LIKE performs pattern matching with % (any sequence) and _ (single character) wildcards. Use ILIKE for case-insensitive matching or SIMILAR TO for regex-like patterns in some databases.",
    exists: "EXISTS checks whether a subquery returns at least one row. Often faster than IN for large subquery results because it short-circuits on the first match. Correlated EXISTS checks per outer row.",
    not: "Use NOT IN, NOT EXISTS, NOT BETWEEN, or <> to exclude matching rows. Be careful with NOT IN when the subquery returns NULL — NOT IN (NULL, 1) evaluates to UNKNOWN, returning no rows.",
  },
  aggregations: {
    count: "COUNT(*) returns the total number of rows in a group. COUNT(column) counts non-NULL values only. COUNT(DISTINCT column) counts unique non-NULL values. Essential for summary reporting and data quality checks.",
    sum: "SUM adds up all non-NULL numeric values in a column. Works with INTEGER, DECIMAL, FLOAT, and MONEY types. Returns NULL if all values are NULL. GitBranch with COALESCE for a default zero.",
    avg: "AVG computes the arithmetic mean of non-NULL numeric values. Sensitive to outliers. Combined with GROUP BY to calculate averages per category, per month, or per any dimension.",
    min: "MIN returns the smallest value in a column. Works on numeric, date, string, and other orderable types. Useful for finding earliest dates, lowest prices, or alphabetical first entries.",
    max: "MAX returns the largest value in a column. Companion to MIN. Commonly used to find most recent timestamps, highest scores, or maximum quantities in each group.",
    "group-by": "GROUP BY collapses rows sharing the same values in specified columns into summary rows. Often paired with aggregate functions. All non-aggregate SELECT columns must appear in GROUP BY.",
    "count-distinct": "COUNT(DISTINCT column) counts unique non-NULL occurrences in a column. More expensive than regular COUNT because it requires deduplication. Useful for unique customer counts, SKU counts, etc.",
    "multiple-aggs": "GitBranch multiple aggregation functions in one query — e.g., SELECT COUNT(*), SUM(amount), AVG(amount), MIN(created_at), MAX(created_at) FROM orders GROUP BY status. Enables comprehensive group-level statistics.",
  },
  sorting: {
    asc: "ASC sorts from smallest to largest (A-Z, 0-9, earliest to latest). The default sort direction in SQL. Omit ASC keyword for brevity as ascending is the implicit default.",
    desc: "DESC sorts from largest to smallest (Z-A, 9-0, latest to earliest). Must be explicitly specified. Commonly used for ordering by date descending to show newest first.",
    "multi-column": "Multi-column ORDER BY sorts by the primary column first, then subsequent columns for ties. Example: ORDER BY status ASC, created_at DESC. Each column gets its own direction."
    ,
    "nulls-first": "NULLS FIRST moves NULL entries to the top of the result set regardless of the sort direction. By default, NULLs sort after non-nulls on ASC and before on DESC, varying by database.",
    "nulls-last": "NULLS LAST pushes NULL entries to the bottom of the result set. Explicitly controlling NULL position is essential for correct pagination and consistent result ordering.",
    "case-insensitive": "Case-insensitive sorting normalizes letter case during comparison. Achieved via LOWER(column), ILIKE, or database-specific collations. Prevents case discrepancies from affecting sort order.",
    "natural-sort": "Natural sort orders text containing numbers in human-logical fashion (e.g., 'item2' before 'item10'). Requires custom ordering logic since SQL's default lexicographic sort treats numbers as characters.",
    random: "RANDOM ORDER returns rows in unpredictable sequence. Use for random sampling, shuffle-based features, or load testing. Typically uses RANDOM() or NEWID() functions with performance implications on large tables.",
  },
  limitPagination: {
    limit: "LIMIT restricts the total number of rows returned. Used alone for top-N queries. Without ORDER BY, the result row set is non-deterministic — always pair LIMIT with ORDER BY for predictable output.",
    "limit-offset": "LIMIT + OFFSET implements traditional page-based pagination. OFFSET skips N rows then LIMIT returns M rows. OFFSET becomes expensive on large offsets because the database still scans skipped rows.",
    keyset: "Keyset (cursor) pagination uses WHERE conditions on ordered columns to fetch the next page. More efficient than offset for large datasets because it leverages indexes and avoids scanning skipped rows.",
    "top-n": "TOP N Per Group retrieves a limited number of rows within each group partition. Achieved via window functions (ROW_NUMBER() OVER PARTITION BY) in a subquery or LATERAL join. Powerful for leaderboards.",
    "no-limit": "No Limit returns all qualifying rows. Use when the result set is known to be small or when complete data export is required. May cause memory pressure and client-side timeouts on large results.",
    "with-ties": "WITH TIES includes extra rows that have the same sort value as the last row fetched by LIMIT. Prevents incomplete groups at page boundaries. Supported in SQL Server and Oracle via FETCH WITH TIES.",
    "offset-fetch": "OFFSET / FETCH NEXT is the SQL:2008 standard pagination syntax. More portable than LIMIT/OFFSET. Example: OFFSET 10 ROWS FETCH NEXT 10 ROWS ONLY. Supports WITH TIES in some databases.",
    sample: "TABLESAMPLE returns a random subset of rows without scanning the entire table. Useful for approximate aggregates, exploratory analysis, and development on production-sized tables. Not statistically rigorous.",
  },
  outputFormat: {
    json: "Return query results as JSON. Use FOR JSON (SQL Server), JSON_AGG (PostgreSQL), JSON_ARRAY (MySQL), or SQL/JSON functions. Supports nested structures for complex object hierarchies.",
    csv: "Export results as CSV with headers. Handle quoting, escaping, and NULL representation. Compatible with Excel, Google Sheets, data science tools, and ETL pipelines for downstream processing.",
    sql: "Format the SQL query with proper indentation, keyword capitalization, and line breaks. Include comments for documentation. Ready to copy into SQL editors, version control, or code reviews.",
    table: "Render results in a formatted text or HTML table grid. Column widths auto-adjust to content. Supports fixed-width monospace display in terminal or styled HTML for web dashboards.",
    "insert-stmts": "Generate INSERT INTO statements from the result set. Each row becomes one INSERT with column values properly quoted and escaped. Useful for data migration, backup, or test data seeding.",
    "update-stmts": "Generate UPDATE statements from the result set. Includes a WHERE clause based on the primary key or a unique column. Useful for syncing changes from a transformed dataset back to the source.",
    explain: "Show the EXPLAIN or EXPLAIN ANALYZE plan for the query. Displays execution steps, estimated costs, row estimates, and actual runtime statistics. Essential for query performance tuning.",
    chart: "Format the result data for chart visualization libraries (Chart.js, D3, ECharts). Output structured as labels arrays and value series suitable for bar, line, pie, and scatter charts.",
  },
};

function generate(selections: Record<string, any>, notes: Record<string, string>): string {
  const operationType = selections.step1;
  const tables: string[] = selections.step2 || [];
  const joins: string[] = selections.step3 || [];
  const filters = selections.step4;
  const aggregations: string[] = selections.step5 || [];
  const sorting = selections.step6;
  const limitPagination = selections.step7;
  const outputFormat = selections.step8;

  const lines: string[] = [];

  lines.push("# SQL Query Builder Output");
  lines.push("");
  lines.push("## Configuration Summary");
  lines.push("");
  lines.push("| Setting | Selection | Notes");
  lines.push("|---------|-----------|------");
  const opLabel = Array.isArray(operationType) ? operationType.map(id => options.operationType.find(o => o.id === id)?.title || id).join(", ") : options.operationType.find(o => o.id === operationType)?.title || operationType;
  const opNote = notes[`operationType-${operationType}`] || "";
  lines.push(`| Operation Type | ${opLabel} | ${opNote}`);
  const tLabels = tables.map(id => options.tables.find(o => o.id === id)?.title || id).join(", ");
  const tNotes = tables.map(id => notes[`tables-${id}`] || "").filter(Boolean).join("; ");
  lines.push(`| Table(s) | ${tLabels || "None selected"} | ${tNotes}`);
  const jLabels = joins.map(id => options.joins.find(o => o.id === id)?.title || id).join(", ");
  const jNotes = joins.map(id => notes[`joins-${id}`] || "").filter(Boolean).join("; ");
  lines.push(`| Join Type(s) | ${jLabels || "None"} | ${jNotes}`);
  const fLabel = Array.isArray(filters) ? filters.map(id => options.filters.find(o => o.id === id)?.title || id).join(", ") : options.filters.find(o => o.id === filters)?.title || filters;
  const fNote = notes[`filters-${filters}`] || "";
  lines.push(`| Filter Method | ${fLabel} | ${fNote}`);
  const aLabels = aggregations.map(id => options.aggregations.find(o => o.id === id)?.title || id).join(", ");
  const aNotes = aggregations.map(id => notes[`aggregations-${id}`] || "").filter(Boolean).join("; ");
  lines.push(`| Aggregation(s) | ${aLabels || "None"} | ${aNotes}`);
  const sLabel = Array.isArray(sorting) ? sorting.map(id => options.sorting.find(o => o.id === id)?.title || id).join(", ") : options.sorting.find(o => o.id === sorting)?.title || sorting;
  const sNote = notes[`sorting-${sorting}`] || "";
  lines.push(`| Sort Order | ${sLabel} | ${sNote}`);
  const lpLabel = Array.isArray(limitPagination) ? limitPagination.map(id => options.limitPagination.find(o => o.id === id)?.title || id).join(", ") : options.limitPagination.find(o => o.id === limitPagination)?.title || limitPagination;
  const lpNote = notes[`limitPagination-${limitPagination}`] || "";
  lines.push(`| Pagination | ${lpLabel} | ${lpNote}`);
  const ofLabel = Array.isArray(outputFormat) ? outputFormat.map(id => options.outputFormat.find(o => o.id === id)?.title || id).join(", ") : options.outputFormat.find(o => o.id === outputFormat)?.title || outputFormat;
  const ofNote = notes[`outputFormat-${outputFormat}`] || "";
  lines.push(`| Output Format | ${ofLabel} | ${ofNote}`);
  lines.push("");

  lines.push("## Generated Query & Output");
  lines.push("");

  lines.push("### SQL Statement");
  lines.push("");
  lines.push("```sql");
  if (operationType === "select") {
    lines.push("SELECT");
    if (aggregations.length > 0) {
      const aggParts: string[] = [];
      if (aggregations.includes("count")) aggParts.push("  COUNT(*)");
      if (aggregations.includes("sum")) aggParts.push("  SUM(column_name)");
      if (aggregations.includes("avg")) aggParts.push("  AVG(column_name)");
      if (aggregations.includes("min")) aggParts.push("  MIN(column_name)");
      if (aggregations.includes("max")) aggParts.push("  MAX(column_name)");
      if (aggregations.includes("count-distinct")) aggParts.push("  COUNT(DISTINCT column_name)");
      if (aggregations.includes("multiple-aggs")) aggParts.push("  -- multiple aggregations go here");
      lines.push(aggParts.join(",\n"));
      if (tables.length > 0) lines.push(`FROM ${tables.map(t => t === "order-items" ? "order_items" : t).join(", ")}`);
    } else {
      lines.push("  column1,");
      lines.push("  column2,");
      lines.push("  ...");
      if (tables.length > 0) lines.push(`FROM ${tables.map(t => t === "order-items" ? "order_items" : t).join(", ")}`);
    }
    if (joins.length > 0) {
      for (const j of joins) {
        const jLabel = options.joins.find(o => o.id === j)?.title || j;
        lines.push(`${jLabel.toUpperCase()} JOIN related_table ON primary_table.fk = related_table.pk`);
      }
    }
    if (filters) {
      lines.push("WHERE condition");
      if (filters === "between") lines.push("  AND column BETWEEN lower AND upper");
      if (filters === "in") lines.push("  AND column IN (value1, value2, ...)");
      if (filters === "like") lines.push("  AND column LIKE '%pattern%'");
      if (filters === "exists") lines.push("  AND EXISTS (SELECT 1 FROM ... WHERE ...)");
    }
    if (aggregations.includes("group-by") || aggregations.includes("multiple-aggs")) {
      lines.push("GROUP BY column1, column2");
    }
    if (filters === "having" || filters === "where-having") {
      lines.push("HAVING aggregate_condition");
    }
    if (sorting) {
      if (sorting === "asc" || sorting === "desc") {
        lines.push(`ORDER BY column ${sorting.toUpperCase()}`);
      } else if (sorting === "multi-column") {
        lines.push("ORDER BY col1 ASC, col2 DESC");
      } else {
        lines.push("ORDER BY column -- with sort options");
      }
    }
    if (limitPagination) {
      if (limitPagination === "limit") lines.push("LIMIT 10");
      else if (limitPagination === "limit-offset") lines.push("LIMIT 10 OFFSET 20");
      else if (limitPagination === "offset-fetch") lines.push("OFFSET 10 ROWS FETCH NEXT 10 ROWS ONLY");
      else if (limitPagination === "top-n") lines.push("-- TOP N per group via window function");
    }
  } else if (operationType === "insert") {
    const table = tables.length > 0 ? tables[0].replace("-", "_") : "target_table";
    lines.push(`INSERT INTO ${table} (col1, col2, col3)`);
    lines.push("VALUES");
    lines.push("  (val1, val2, val3),");
    lines.push("  (val4, val5, val6);");
  } else if (operationType === "update") {
    const table = tables.length > 0 ? tables[0].replace("-", "_") : "target_table";
    lines.push(`UPDATE ${table}`);
    lines.push("SET column1 = new_value1,");
    lines.push("    column2 = new_value2");
    lines.push("WHERE condition;");
  } else if (operationType === "delete") {
    const table = tables.length > 0 ? tables[0].replace("-", "_") : "target_table";
    lines.push(`DELETE FROM ${table}`);
    lines.push("WHERE condition;");
  } else if (operationType === "create-table") {
    const table = tables.length > 0 ? tables[0].replace("-", "_") : "new_table";
    lines.push(`CREATE TABLE ${table} (`);
    lines.push("  id SERIAL PRIMARY KEY,");
    lines.push("  name VARCHAR(255) NOT NULL,");
    lines.push("  created_at TIMESTAMP DEFAULT NOW()");
    lines.push(");");
  } else if (operationType === "create-index") {
    const table = tables.length > 0 ? tables[0].replace("-", "_") : "table_name";
    lines.push(`CREATE INDEX idx_${table}_column ON ${table} (column_name);`);
  } else if (operationType === "cte") {
    lines.push("WITH cte_name AS (");
    lines.push("  SELECT ...");
    lines.push(")");
    lines.push("SELECT * FROM cte_name;");
  }
  lines.push("```");
  lines.push("");

  lines.push("### Query Design Details");
  lines.push("");
  if (operationType) {
    lines.push("**Operation Type:** " + opLabel);
    lines.push("");
    lines.push(Array.isArray(operationType) ? operationType.map(v => dict.operationType[v] || v).join(", ") : dict.operationType[operationType] || operationType);
    lines.push("");
  }
  if (tables.length > 0) {
    lines.push("**Tables Involved:**");
    lines.push("");
    for (const tId of tables) {
      const label = options.tables.find(o => o.id === tId)?.title || tId;
      lines.push(`- **${label}**`);
      lines.push(`  - ${dict.tables[tId] || ""}`);
    }
    lines.push("");
  }
  if (joins.length > 0) {
    lines.push("**Join Configurations:**");
    lines.push("");
    for (const jId of joins) {
      const label = options.joins.find(o => o.id === jId)?.title || jId;
      lines.push(`- **${label}**`);
      lines.push(`  - ${dict.joins[jId] || ""}`);
    }
    lines.push("");
  }
  if (filters) {
    lines.push("**Filter Strategy:** " + fLabel);
    lines.push("");
    lines.push(Array.isArray(filters) ? filters.map(v => dict.filters[v] || v).join(", ") : dict.filters[filters] || filters);
    lines.push("");
  }
  if (aggregations.length > 0) {
    lines.push("**Aggregation Functions:**");
    lines.push("");
    for (const aId of aggregations) {
      const label = options.aggregations.find(o => o.id === aId)?.title || aId;
      lines.push(`- **${label}**`);
      lines.push(`  - ${dict.aggregations[aId] || ""}`);
    }
    lines.push("");
  }
  if (sorting) {
    lines.push("**Sort Order:** " + sLabel);
    lines.push("");
    lines.push(Array.isArray(sorting) ? sorting.map(v => dict.sorting[v] || v).join(", ") : dict.sorting[sorting] || sorting);
    lines.push("");
  }
  if (limitPagination) {
    lines.push("**Pagination Method:** " + lpLabel);
    lines.push("");
    lines.push(Array.isArray(limitPagination) ? limitPagination.map(v => dict.limitPagination[v] || v).join(", ") : dict.limitPagination[limitPagination] || limitPagination);
    lines.push("");
  }
  if (outputFormat) {
    lines.push("**Output Format:** " + ofLabel);
    lines.push("");
    lines.push(Array.isArray(outputFormat) ? outputFormat.map(v => dict.outputFormat[v] || v).join(", ") : dict.outputFormat[outputFormat] || outputFormat);
    lines.push("");
  }

  lines.push("## Performance Notes");
  lines.push("");
  lines.push("| Aspect | Recommendation");
  lines.push("|--------|--------------");
  lines.push("| Indexing | Ensure WHERE, JOIN, and ORDER BY columns are indexed");
  if (joins.length > 0) lines.push("| Join Columns | Foreign keys should be indexed for efficient joins");
  if (sorting) lines.push("| Sort Performance | Sort on indexed columns to avoid filesort operations");
  if (limitPagination === "limit-offset") lines.push("| Offset Cost | Large OFFSET values skip many rows — consider keyset pagination");
  if (aggregations.includes("count-distinct")) lines.push("| COUNT DISTINCT | Use approximate count for large datasets when exact precision is not required");
  lines.push("| Query Plan | Run EXPLAIN to identify full table scans and missing indexes");
  lines.push("| Connection Pool | Use connection pooling to reduce connection overhead on repeated queries");
  lines.push("| Read Replicas | Route read queries to read replicas for scaling");
  lines.push("");

  lines.push("## Best Practices");
  lines.push("");
  lines.push("- Use parameterized queries or prepared statements to prevent SQL injection.");
  lines.push("- Keep transactions short and close connections promptly.");
  lines.push("- SELECT only the columns you need — avoid SELECT * in production.");
  lines.push("- Use schema-qualified names (schema.table) for clarity and safety.");
  if (operationType === "delete" || operationType === "update") {
    lines.push("- Run SELECT with the same WHERE before DELETE/UPDATE to verify the affected rows.");
  }
  if (operationType === "insert") {
    lines.push("- Return generated keys (SERIAL, UUID) using RETURNING or equivalent.");
  }
  lines.push("- Add query comments for observability and debugging.");
  lines.push("- Set statement timeouts to prevent runaway queries.");
  lines.push("");

  lines.push("---");
  lines.push("");
  lines.push("_Generated by SQL Query Builder_");

  return lines.join("\n");
}

export default function SqlBuilderPage() {
  return (
    <ToolShell
      title="SQL Query Builder"
      steps={[
        { id: 1, label: "Operation Type", component: (p) => (
          <GenericStep {...p} title="Select Operation Type" description="What SQL operation do you need?" options={options.operationType} mode="multiple" selected={p.selections.step1} selectKey="step1" notePrefix="operationType" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 2, label: "Tables", component: (p) => (
          <GenericStep {...p} title="Select Tables" description="Which tables should the query involve?" options={options.tables} mode="multiple" selected={p.selections.step2} selectKey="step2" notePrefix="tables" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 3, label: "Joins", component: (p) => (
          <GenericStep {...p} title="Join Types" description="How should tables be joined?" options={options.joins} mode="multiple" selected={p.selections.step3} selectKey="step3" notePrefix="joins" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 4, label: "Filters", component: (p) => (
          <GenericStep {...p} title="Filter Method" description="How should rows be filtered?" options={options.filters} mode="multiple" selected={p.selections.step4} selectKey="step4" notePrefix="filters" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 5, label: "Aggregations", component: (p) => (
          <GenericStep {...p} title="Aggregation Functions" description="Which aggregation functions to apply?" options={options.aggregations} mode="multiple" selected={p.selections.step5} selectKey="step5" notePrefix="aggregations" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 6, label: "Sorting", component: (p) => (
          <GenericStep {...p} title="Sort Order" description="How should results be sorted?" options={options.sorting} mode="multiple" selected={p.selections.step6} selectKey="step6" notePrefix="sorting" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 7, label: "Limit / Page", component: (p) => (
          <GenericStep {...p} title="Pagination & Limit" description="How many rows and how to paginate?" options={options.limitPagination} mode="multiple" selected={p.selections.step7} selectKey="step7" notePrefix="limitPagination" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 8, label: "Output", component: (p) => (
          <GenericStep {...p} title="Output Format" description="What format should the output be in?" options={options.outputFormat} mode="multiple" selected={p.selections.step8} selectKey="step8" notePrefix="outputFormat" notes={p.notes} onNote={p.onNote} />
        )},
      ]}
      onGenerate={generate}
    />
  );
}













