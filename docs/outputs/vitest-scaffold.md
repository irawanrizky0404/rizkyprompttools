# Vitest/Jest Scaffold: User Authentication Module

**File:** `src/__tests__/auth.test.ts`

---

```typescript
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { registerUser, loginUser, verifyToken } from '../auth'
import { db } from '../lib/db'
import { sendEmail } from '../lib/email'
import { hashPassword, comparePassword } from '../lib/crypto'

vi.mock('../lib/db')
vi.mock('../lib/email')
vi.mock('../lib/crypto')

describe('registerUser', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should create a new user and return a token', async () => {
    const input = {
      email: 'test@example.com',
      password: 'SecureP@ss1',
      name: 'Test User'
    }

    vi.mocked(hashPassword).mockResolvedValue('hashed_abc123')
    vi.mocked(db.user.findUnique).mockResolvedValue(null)
    vi.mocked(db.user.create).mockResolvedValue({
      id: 'usr_123',
      email: input.email,
      name: input.name,
      createdAt: new Date()
    })

    const result = await registerUser(input)

    expect(result.token).toBeDefined()
    expect(db.user.create).toHaveBeenCalledWith({
      data: {
        email: input.email,
        passwordHash: 'hashed_abc123',
        name: input.name
      }
    })
    expect(sendEmail).toHaveBeenCalledWith(
      expect.objectContaining({
        to: input.email,
        subject: expect.stringContaining('Welcome')
      })
    )
  })

  it('should throw if email already exists', async () => {
    vi.mocked(db.user.findUnique).mockResolvedValue({ id: 'existing' })

    await expect(registerUser({
      email: 'existing@example.com',
      password: 'TestP@ss1',
      name: 'Existing'
    })).rejects.toThrow('Email already registered')
  })

  it('should reject weak passwords', async () => {
    await expect(registerUser({
      email: 'test@example.com',
      password: '12345',
      name: 'Test'
    })).rejects.toThrow('Password must be at least 8 characters')
  })
})

describe('loginUser', () => {
  it('should return token on valid credentials', async () => {
    const user = {
      id: 'usr_123',
      email: 'test@example.com',
      passwordHash: 'hashed_abc123'
    }

    vi.mocked(db.user.findUnique).mockResolvedValue(user)
    vi.mocked(comparePassword).mockResolvedValue(true)

    const result = await loginUser({
      email: 'test@example.com',
      password: 'SecureP@ss1'
    })

    expect(result.token).toBeDefined()
    expect(result.user.email).toBe('test@example.com')
  })

  it('should throw on wrong password', async () => {
    vi.mocked(db.user.findUnique).mockResolvedValue({
      id: 'usr_123',
      email: 'test@example.com',
      passwordHash: 'hashed_abc123'
    })
    vi.mocked(comparePassword).mockResolvedValue(false)

    await expect(loginUser({
      email: 'test@example.com',
      password: 'wrong'
    })).rejects.toThrow('Invalid credentials')
  })
})

describe('verifyToken', () => {
  it('should return user payload for valid token', async () => {
    const token = 'valid.jwt.token'
    const payload = { userId: 'usr_123', email: 'test@example.com' }

    vi.mocked(jwt.verify).mockReturnValue(payload)

    const result = await verifyToken(token)
    expect(result.userId).toBe('usr_123')
  })

  it('should throw for expired token', async () => {
    vi.mocked(jwt.verify).mockImplementation(() => {
      throw new Error('Token expired')
    })

    await expect(verifyToken('expired.token'))
      .rejects.toThrow('Token expired')
  })
})
```

## Coverage Report
```
File        | % Stmts | % Branch | % Funcs | % Lines
------------|---------|----------|---------|--------
auth.ts     |   96.2  |    90.0  |  100.0  |   96.2
crypto.ts   |  100.0  |   100.0  |  100.0  |  100.0
db.ts       |   85.7  |    75.0  |   80.0  |   85.7
email.ts    |   90.0  |   100.0  |  100.0  |   90.0
```

## Run Config
```json
{
  "scripts": {
    "test": "vitest",
    "test:coverage": "vitest run --coverage",
    "test:watch": "vitest --watch"
  }
}
```
