# SQL Query Builder Output

**Context:** E-Commerce Analytics — monthly revenue report by product category

---

## Query: Monthly Revenue by Category

```sql
WITH monthly_orders AS (
    SELECT
        date_trunc('month', o.created_at) AS month,
        oi.product_id,
        p.category_id,
        c.name AS category_name,
        SUM(oi.quantity * oi.unit_price) AS gross_revenue,
        SUM(oi.discount_amount) AS total_discounts,
        SUM(oi.tax_amount) AS total_taxes,
        COUNT(DISTINCT o.id) AS order_count,
        COUNT(DISTINCT o.user_id) AS unique_customers
    FROM orders o
    JOIN order_items oi ON o.id = oi.order_id
    JOIN products p ON oi.product_id = p.id
    JOIN categories c ON p.category_id = c.id
    WHERE o.status NOT IN ('cancelled', 'refunded')
      AND o.created_at >= date_trunc('month', CURRENT_DATE - INTERVAL '12 months')
    GROUP BY
        date_trunc('month', o.created_at),
        oi.product_id,
        p.category_id,
        c.name
)
SELECT
    month,
    category_id,
    category_name,
    SUM(gross_revenue) AS gross_revenue,
    SUM(total_discounts) AS total_discounts,
    SUM(total_taxes) AS total_taxes,
    SUM(gross_revenue) - SUM(total_discounts) - SUM(total_taxes) AS net_revenue,
    SUM(order_count) AS total_orders,
    SUM(unique_customers) AS total_customers,
    ROUND(
        (SUM(gross_revenue) - SUM(total_discounts) - SUM(total_taxes)) /
        NULLIF(SUM(order_count), 0), 2
    ) AS avg_order_value,
    ROUND(
        SUM(gross_revenue) * 1.0 / SUM(SUM(gross_revenue)) OVER (PARTITION BY month),
        4
    ) AS revenue_share
FROM monthly_orders
GROUP BY month, category_id, category_name
ORDER BY month DESC, net_revenue DESC;
```

### Sample Output
```
month       | category_id | category_name | gross_revenue | net_revenue | orders | avg_order_value
------------|-------------|---------------|--------------|-------------|--------|----------------
2025-06-01  | 3           | Electronics   |    142,390.00 |   119,607.60|    342 |          349.73
2025-06-01  | 1           | Clothing      |     89,450.00 |    75,138.00|    891 |           84.33
2025-06-01  | 5           | Home & Garden |     54,200.00 |    45,528.00|    412 |          110.50
2025-06-01  | 2           | Books         |     38,100.00 |    32,004.00|    642 |           49.85
2025-06-01  | 4           | Sports        |     28,750.00 |    24,150.00|    278 |           86.87
```

## Query: Abandoned Cart Recovery Candidates

```sql
SELECT
    c.id AS cart_id,
    c.user_id,
    u.email,
    u.first_name,
    c.created_at AS cart_created,
    CURRENT_TIMESTAMP - c.created_at AS hours_since_creation,
    COUNT(ci.id) AS item_count,
    SUM(ci.quantity * p.price) AS cart_total,
    MAX(p.name) AS most_expensive_item
FROM carts c
JOIN users u ON c.user_id = u.id
JOIN cart_items ci ON c.id = ci.cart_id
JOIN products p ON ci.product_id = p.id
WHERE c.status = 'active'
  AND c.created_at < CURRENT_TIMESTAMP - INTERVAL '4 hours'
  AND c.created_at > CURRENT_TIMESTAMP - INTERVAL '72 hours'
  AND NOT EXISTS (
      SELECT 1 FROM orders o
      WHERE o.user_id = c.user_id
        AND o.created_at > c.created_at
  )
GROUP BY c.id, c.user_id, u.email, u.first_name, c.created_at
HAVING COUNT(ci.id) >= 2
ORDER BY cart_total DESC;
```

### Sample Output
```
cart_id | user_id | email              | items | total   | hours_since
--------|---------|--------------------|-------|---------|-----------
c_1024  | u_4581  | sarah@example.com  |     5 |  429.50 |         14
c_1023  | u_9102  | mark@test.com      |     3 |  215.00 |          6
c_1021  | u_3741  | priya@demo.org     |     2 |  189.99 |         22
```

## Query: Customer Lifetime Value (CLV) Segmentation

```sql
WITH customer_metrics AS (
    SELECT
        u.id AS user_id,
        u.email,
        u.created_at AS signup_date,
        COUNT(DISTINCT o.id) AS total_orders,
        SUM(o.total) AS lifetime_value,
        MAX(o.created_at) AS last_order_date,
        CURRENT_DATE - u.created_at::DATE AS account_age_days,
        CURRENT_DATE - MAX(o.created_at)::DATE AS days_since_last_order
    FROM users u
    LEFT JOIN orders o ON u.id = o.user_id AND o.status = 'delivered'
    GROUP BY u.id, u.email, u.created_at
)
SELECT
    CASE
        WHEN lifetime_value >= 5000 THEN 'Platinum'
        WHEN lifetime_value >= 2000 THEN 'Gold'
        WHEN lifetime_value >= 500  THEN 'Silver'
        WHEN lifetime_value > 0     THEN 'Bronze'
        ELSE 'Inactive'
    END AS segment,
    COUNT(*) AS customer_count,
    ROUND(AVG(lifetime_value), 2) AS avg_clv,
    ROUND(AVG(total_orders), 1) AS avg_orders,
    ROUND(AVG(days_since_last_order), 0) AS avg_days_since_last
FROM customer_metrics
GROUP BY segment
ORDER BY avg_clv DESC;
```

### Sample Output
```
segment   | customer_count | avg_clv   | avg_orders | avg_days_since_last
----------|----------------|-----------|------------|-------------------
Platinum  |            342 | 8,245.30  |       27.4 |                 14
Gold      |          1,241 | 3,102.45  |       14.2 |                 28
Silver    |          4,503 | 1,024.80  |        6.8 |                 45
Bronze    |         12,209 |   185.40  |        2.1 |                 89
Inactive  |          8,450 |     0.00  |        0.0 |               NULL
```
