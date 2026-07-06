# i18n String Manager: TaskFlow Pro

**Base Language:** en (English)
**Target Languages:** id (Indonesian), ja (Japanese), es (Spanish), de (German)
**Format:** JSON (flat keys, nested structure)

---

## `common.json`

```json
{
  "en": {
    "app.name": "TaskFlow Pro",
    "common.save": "Save",
    "common.cancel": "Cancel",
    "common.delete": "Delete",
    "common.edit": "Edit",
    "common.loading": "Loading...",
    "common.noResults": "No results found",
    "common.search": "Search",
    "common.filter": "Filter",
    "common.sort": "Sort",
    "common.more": "More",
    "common.retry": "Retry",
    "common.confirm": "Yes, I'm sure",
    "common.goBack": "Go back",
    "common.or": "or"
  },
  "id": {
    "app.name": "TaskFlow Pro",
    "common.save": "Simpan",
    "common.cancel": "Batal",
    "common.delete": "Hapus",
    "common.edit": "Sunting",
    "common.loading": "Memuat...",
    "common.noResults": "Hasil tidak ditemukan",
    "common.search": "Cari",
    "common.filter": "Filter",
    "common.sort": "Urutkan",
    "common.more": "Lainnya",
    "common.retry": "Coba lagi",
    "common.confirm": "Ya, saya yakin",
    "common.goBack": "Kembali",
    "common.or": "atau"
  },
  "ja": {
    "app.name": "タスクフロープロ",
    "common.save": "保存",
    "common.cancel": "キャンセル",
    "common.delete": "削除",
    "common.edit": "編集",
    "common.loading": "読み込み中...",
    "common.noResults": "結果が見つかりません",
    "common.search": "検索",
    "common.filter": "フィルター",
    "common.sort": "並び替え",
    "common.more": "もっと見る",
    "common.retry": "再試行",
    "common.confirm": "はい、確認しました",
    "common.goBack": "戻る",
    "common.or": "または"
  },
  "es": {
    "app.name": "TaskFlow Pro",
    "common.save": "Guardar",
    "common.cancel": "Cancelar",
    "common.delete": "Eliminar",
    "common.edit": "Editar",
    "common.loading": "Cargando...",
    "common.noResults": "Sin resultados",
    "common.search": "Buscar",
    "common.filter": "Filtrar",
    "common.sort": "Ordenar",
    "common.more": "Más",
    "common.retry": "Reintentar",
    "common.confirm": "Sí, estoy seguro",
    "common.goBack": "Volver",
    "common.or": "o"
  }
}
```

## `auth.json`

```json
{
  "en": {
    "auth.login.title": "Welcome back",
    "auth.login.emailLabel": "Email address",
    "auth.login.passwordLabel": "Password",
    "auth.login.submit": "Sign in",
    "auth.login.forgotPassword": "Forgot password?",
    "auth.login.noAccount": "Don't have an account?",
    "auth.login.signupLink": "Create one",
    "auth.login.error.invalid": "Invalid email or password",
    "auth.login.error.locked": "Account locked. Try again in {minutes} minutes.",
    "auth.signup.title": "Create your account",
    "auth.signup.nameLabel": "Full name",
    "auth.signup.submit": "Get started",
    "auth.signup.hasAccount": "Already have an account?",
    "auth.signup.loginLink": "Sign in",
    "auth.signup.success": "Account created! Check your email to verify.",
    "auth.verify.title": "Check your email",
    "auth.verify.description": "We sent a verification link to {email}",
    "auth.verify.resend": "Resend email",
    "auth.verify.resendSuccess": "Verification email resent!"
  },
  "id": {
    "auth.login.title": "Selamat datang kembali",
    "auth.login.emailLabel": "Alamat email",
    "auth.login.passwordLabel": "Kata sandi",
    "auth.login.submit": "Masuk",
    "auth.login.forgotPassword": "Lupa kata sandi?",
    "auth.login.noAccount": "Belum punya akun?",
    "auth.login.signupLink": "Buat akun",
    "auth.login.error.invalid": "Email atau kata sandi salah",
    "auth.login.error.locked": "Akun terkunci. Coba lagi dalam {minutes} menit.",
    "auth.signup.title": "Buat akun Anda",
    "auth.signup.nameLabel": "Nama lengkap",
    "auth.signup.submit": "Mulai",
    "auth.signup.hasAccount": "Sudah punya akun?",
    "auth.signup.loginLink": "Masuk",
    "auth.signup.success": "Akun dibuat! Periksa email Anda untuk verifikasi.",
    "auth.verify.title": "Periksa email Anda",
    "auth.verify.description": "Kami mengirim tautan verifikasi ke {email}",
    "auth.verify.resend": "Kirim ulang email",
    "auth.verify.resendSuccess": "Email verifikasi terkirim ulang!"
  }
}
```

## Usage Guide

### React Implementation
```tsx
import { useTranslation } from 'react-i18next'

function LoginPage() {
  const { t } = useTranslation('auth')

  return (
    <h1>{t('auth.login.title')}</h1>
    <input placeholder={t('auth.login.emailLabel')} />
    <button>{t('auth.login.submit')}</button>
  )
}
```

### Variable Interpolation
```
Key: "auth.login.error.locked": "Account locked. Try again in {minutes} minutes."
Usage: t('auth.login.error.locked', { minutes: 15 })
Output: "Account locked. Try again in 15 minutes."
```

### Pluralization (en)
```
Key: "board.card_count": "{{count}} card" / "{{count}} cards"
Key: "board.card_count_0": "No cards"
Usage: t('board.card_count', { count: 3 })
Output: "3 cards"
```

## Coverage Report
| Locale | Strings | Translated | Coverage |
|--------|---------|-----------|----------|
| en | 287 | 287 | 100% |
| id | 287 | 271 | 94.4% |
| ja | 287 | 254 | 88.5% |
| es | 287 | 263 | 91.6% |
| de | 287 | 248 | 86.4% |
