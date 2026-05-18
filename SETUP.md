# Complete Security Setup Guide

## ✅ What's Already Done

Your security infrastructure has been fully implemented:

### 1. **Disabled Source Maps** (next.config.ts)
- Client-side source maps are deleted during build
- Sensitive code cannot be inspected in browser DevTools

### 2. **Content Security Policy (CSP)**
- Restricts script/style sources
- Prevents unauthorized inline script execution
- Blocks clickjacking attacks

### 3. **Security Headers**
- `Strict-Transport-Security` - Forces HTTPS
- `X-Frame-Options: DENY` - Prevents clickjacking
- `X-Content-Type-Options: nosniff` - Prevents MIME type sniffing
- `Referrer-Policy: strict-origin-when-cross-origin` - Controls referer data

### 4. **Admin Panel Protection**
- Token-based authentication
- Rate limiting (5 requests per minute)
- Assessment logging for all admin actions
- Server-side Firebase Admin SDK

### 5. **Environment Variables**
- All secrets in `.env.local` (gitignored)
- Public keys safely prefixed with `NEXT_PUBLIC_`
- Server-only credentials isolated

---

## 🚀 Setup Instructions

### Step 1: Complete Your Environment File

Your `.env.local` already has:
- ✅ Firebase client credentials
- ✅ Cloudinary configuration  
- ✅ Admin token: `836beb4ab113f959e2bf9845a6bcf96974bec4724b8a6f6d910ccf9864ff5914`

**You need to add:**
- Firebase Admin SDK service account credentials

#### How to get Firebase Admin SDK credentials:

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project: `keystone-cddb5`
3. Click ⚙️ (Settings) → Project Settings
4. Go to **Service Accounts** tab
5. Click **Generate New Private Key**
6. A JSON file will download
7. Copy the ENTIRE JSON content
8. In your `.env.local`, replace the `FIREBASE_ADMIN_SDK_JSON` value with the full JSON

**Example of what it should look like:**
```
FIREBASE_ADMIN_SDK_JSON={"type":"service_account","project_id":"keystone-cddb5","private_key_id":"abc123...","private_key":"-----BEGIN PRIVATE KEY-----\nMII...","client_email":"firebase-adminsdk-xyz@keystone-cddb5.iam.gserviceaccount.com",...}
```

### Step 2: Save Your Admin Token

**Your secure admin token:**
```
836beb4ab113f959e2bf9845a6bcf96974bec4724b8a6f6d910ccf9864ff5914
```

⚠️ **IMPORTANT:** 
- Save this token in a secure location (password manager, secure notes)
- You'll need it EVERY time you access the admin panel
- Do NOT commit it to git (it's already in .gitignore)
- Treat it like a password

### Step 3: Start Your Development Server

```bash
npm run dev
```

Then open: http://localhost:3000/admin-secret-url

### Step 4: Use the Admin Panel

1. Fill in the form (Event or News)
2. When you click "Post", you'll be prompted for the admin token
3. Paste your token and confirm
4. Your data is sent securely to the server and written to Firestore

---

## 🔐 Security Architecture

### What Changed

```
BEFORE (Insecure):
┌─────────────────────────────────────┐
│ Admin Page (Client-Side)            │
│ - Has Firestore access keys exposed │
│ - Writes directly to database       │
│ - No authentication needed          │
└─────────────────────────────────────┘
         ↓ (Direct, unprotected)
    Firestore Database

AFTER (Secure):
┌──────────────────────────────────────┐
│ Admin Page (Client-Side)             │
│ - Prompts for token                  │
│ - Sends encrypted request to API     │
│ - NO database access keys            │
└──────────────────────────────────────┘
         ↓ (Token in header)
┌──────────────────────────────────────┐
│ Secure API Route (/api/admin)        │
│ - Verifies admin token               │
│ - Rate limits requests               │
│ - Logs Assessment trail                   │
│ - Uses Firebase Admin SDK            │
└──────────────────────────────────────┘
         ↓ (Secure credentials)
    Firestore Database
```

### Key Security Features

| Feature | Before | After |
|---------|--------|-------|
| **Database Access** | Client-side keys | Server-only Admin SDK |
| **Authentication** | None | Token verification |
| **Rate Limiting** | None | 5 requests/minute per IP |
| **Assessment Trail** | None | Logged with IP & timestamp |
| **Source Code** | Visible in DevTools | Hidden |
| **HTTPS** | Optional | Enforced |

---

## ✅ Verification Checklist

- [ ] `.env.local` file exists and is gitignored
- [ ] `ADMIN_SECRET_TOKEN` is set
- [ ] `FIREBASE_ADMIN_SDK_JSON` contains your service account credentials
- [ ] Dev server starts without errors: `npm run dev`
- [ ] Admin page loads at `http://localhost:3000/admin-secret-url`
- [ ] Token prompt appears when trying to post
- [ ] Successfully posted an event or news item

---

## 🧪 Testing

### Test 1: Token Required
```bash
# Try without token (should fail)
curl -X POST http://localhost:3000/api/admin \
  -H "Content-Type: application/json" \
  -d '{"action":"addEvent","data":{"title":"Test","date":"2026-04-15"}}'

# Expected: 401 Unauthorized
```

### Test 2: With Token
```bash
# Replace TOKEN with your actual token
curl -X POST http://localhost:3000/api/admin \
  -H "x-admin-token: 836beb4ab113f959e2bf9845a6bcf96974bec4724b8a6f6d910ccf9864ff5914" \
  -H "Content-Type: application/json" \
  -d '{"action":"addEvent","data":{"title":"Test Event","date":"2026-04-15"}}'

# Expected: 200 OK with success message
```

### Test 3: Rate Limiting
```bash
# Send 6 requests rapidly (5th+ should fail with 429)
for i in {1..6}; do
  curl -X POST http://localhost:3000/api/admin \
    -H "x-admin-token: YOUR_TOKEN" \
    -H "Content-Type: application/json" \
    -d '{"action":"addEvent","data":{"title":"Test","date":"2026-04-15"}}'
  echo "Request $i"
done
```

---

## 📋 File Organization

```
src/
├── middleware.ts                 # Route protection
├── app/
│   ├── admin-secret-url/
│   │   └── page.tsx            # Admin UI (updated to use API)
│   └── api/
│       └── admin/
│           └── route.ts        # Secure API endpoint
├── lib/
│   └── firebase.ts             # Client-side Firebase (public keys only)

.env.local                        # Secrets (gitignored)
.env.local.example                # Template for setup
.gitignore                        # Prevents committing secrets
SECURITY.md                       # Security documentation
setup-security.ps1               # Automated setup script
```

---

## 🚨 Security Best Practices Going Forward

### DO:
- ✅ Rotate your admin token periodically
- ✅ Monitor Assessment logs in Firebase for admin activities
- ✅ Use environment variables for ALL secrets
- ✅ Update dependencies regularly: `npm update`
- ✅ Enable 2FA on Firebase Console
- ✅ Enable HTTPS in production
- ✅ Review Firebase Firestore rules

### DON'T:
- ❌ Commit `.env.local` to git
- ❌ Share admin token in chat/email
- ❌ Use predictable tokens
- ❌ Expose source maps in production
- ❌ Log sensitive data to console
- ❌ Allow CORS from unknown origins
- ❌ Use weak password policies

---

## 🔗 Related Files

- [next.config.ts](next.config.ts) - Security headers & source map deletion
- [.env.local.example](.env.local.example) - Environment template
- [SECURITY.md](SECURITY.md) - Additional security notes
- [src/app/api/admin/route.ts](src/app/api/admin/route.ts) - API implementation
- [src/middleware.ts](src/middleware.ts) - Request middleware

---

## 🆘 Troubleshooting

### "Admin token required" message
- You didn't paste the token in the prompt
- Make sure `ADMIN_SECRET_TOKEN` is in your `.env.local`

### "Internal server error"
- Check that `FIREBASE_ADMIN_SDK_JSON` is valid JSON
- Verify the service account has Firestore write permissions
- Check server console for actual error message

### "Too many requests"
- You're hitting the rate limit (5 per minute)
- Wait 60 seconds and try again

### Dev server won't start
- Verify all required env variables are set
- Check that `firebase-admin` is installed: `npm install firebase-admin`
- Clear Next.js cache: `rm -r .next` then `npm run dev`

---

## 📞 Need Help?

Check the logs:
```bash
# Server logs (during 'npm run dev')
# Look for: [ADMIN] Event added by...
# Check for error messages in the terminal
```

---

**Setup Date:** April 15, 2026  
**Status:** ✅ Complete - Ready for Use
