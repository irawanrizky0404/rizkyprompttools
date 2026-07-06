# GraphQL Schema: E-Commerce Platform

## Types

```graphql
"""
A registered user on the platform.
"""
type User {
  id: ID!
  email: String!
  name: String!
  avatar: String
  role: UserRole!
  addresses: [Address!]!
  orders(first: Int = 20, after: String): OrderConnection!
  reviews(first: Int = 10): ReviewConnection!
  createdAt: DateTime!
  updatedAt: DateTime!
}

enum UserRole {
  CUSTOMER
  ADMIN
  MERCHANT
}

type Address {
  id: ID!
  label: String         # "Home", "Work"
  line1: String!
  line2: String
  city: String!
  state: String!
  zip: String!
  country: String!
  isDefault: Boolean!
}

type Product {
  id: ID!
  name: String!
  slug: String!
  description: String
  price: Money!
  compareAtPrice: Money
  images: [Image!]!
  variants: [ProductVariant!]!
  category: Category!
  tags: [String!]!
  rating: Float
  reviewCount: Int!
  inStock: Boolean!
  createdAt: DateTime!
}

type ProductVariant {
  id: ID!
  sku: String!
  name: String!            # "Large, Blue"
  price: Money
  image: Image
  attributes: JSONObject!   # { "size": "Large", "color": "Blue" }
  quantity: Int!
}

type Money {
  amount: Float!
  currency: Currency!
}

enum Currency {
  USD
  EUR
  GBP
  JPY
  IDR
}

type Category {
  id: ID!
  name: String!
  slug: String!
  parent: Category
  children: [Category!]!
  productCount: Int!
}

type Order {
  id: ID!
  number: String!
  user: User!
  items: [OrderItem!]!
  shippingAddress: Address!
  billingAddress: Address!
  subtotal: Money!
  shipping: Money!
  tax: Money!
  total: Money!
  status: OrderStatus!
  tracking: TrackingInfo
  createdAt: DateTime!
}

enum OrderStatus {
  PENDING
  CONFIRMED
  PROCESSING
  SHIPPED
  DELIVERED
  CANCELLED
  REFUNDED
}

type OrderItem {
  id: ID!
  product: Product!
  variant: ProductVariant
  quantity: Int!
  unitPrice: Money!
  lineTotal: Money!
}

type TrackingInfo {
  carrier: String!
  method: String!
  number: String!
  url: String!
  estimatedDelivery: DateTime
}

type Review {
  id: ID!
  user: User!
  product: Product!
  rating: Int!          # 1–5
  title: String
  body: String
  images: [Image!]
  isVerifiedPurchase: Boolean!
  createdAt: DateTime!
}

type Image {
  id: ID!
  url: String!
  alt: String
  width: Int!
  height: Int!
}
```

## Queries

```graphql
type Query {
  """Get current user's profile."""
  me: User

  """Get a user by ID."""
  user(id: ID!): User

  """Get a single product by slug or ID."""
  product(slug: String, id: ID): Product

  """Search + filter products."""
  products(
    search: String
    category: String
    minPrice: Float
    maxPrice: Float
    inStock: Boolean
    sortBy: ProductSortBy = NEWEST
    first: Int = 20
    after: String
  ): ProductConnection!

  """Get user's active cart."""
  cart: Cart

  """Get an order by ID."""
  order(id: ID!): Order
}

enum ProductSortBy {
  NEWEST
  PRICE_ASC
  PRICE_DESC
  RATING
  POPULARITY
}

type ProductConnection {
  edges: [ProductEdge!]!
  pageInfo: PageInfo!
  totalCount: Int!
}

type ProductEdge {
  node: Product!
  cursor: String!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type OrderConnection {
  edges: [OrderEdge!]!
  pageInfo: PageInfo!
  totalCount: Int!
}

type OrderEdge {
  node: Order!
  cursor: String!
}

type ReviewConnection {
  edges: [ReviewEdge!]!
  pageInfo: PageInfo!
  totalCount: Int!
}

type ReviewEdge {
  node: Review!
  cursor: String!
}
```

## Mutations

```graphql
type Mutation {
  """Register a new user account."""
  register(input: RegisterInput!): AuthPayload!

  """Login with email + password."""
  login(input: LoginInput!): AuthPayload!

  """Add item to cart."""
  addToCart(input: AddToCartInput!): Cart!

  """Update cart item quantity."""
  updateCartItem(input: UpdateCartItemInput!): Cart!

  """Remove item from cart."""
  removeCartItem(itemId: ID!): Cart!

  """Place an order from current cart."""
  checkout(input: CheckoutInput!): Order!

  """Submit a product review."""
  createReview(input: CreateReviewInput!): Review!
}

input RegisterInput {
  email: String!
  password: String!
  name: String!
}

input LoginInput {
  email: String!
  password: String!
}

type AuthPayload {
  token: String!
  user: User!
}

input AddToCartInput {
  productId: ID!
  variantId: ID
  quantity: Int! = 1
}

input UpdateCartItemInput {
  itemId: ID!
  quantity: Int!
}

input CheckoutInput {
  shippingAddressId: ID!
  billingAddressId: ID!
  couponCode: String
}

input CreateReviewInput {
  productId: ID!
  rating: Int!
  title: String
  body: String
  imageIds: [ID!]
}

type Cart {
  id: ID!
  items: [CartItem!]!
  subtotal: Money!
  itemCount: Int!
}

type CartItem {
  id: ID!
  product: Product!
  variant: ProductVariant
  quantity: Int!
  unitPrice: Money!
  lineTotal: Money!
}

scalar DateTime
scalar JSONObject
```
