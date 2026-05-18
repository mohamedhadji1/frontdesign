# Security Setup Guide

## ✅ Already Implemented

1. **Source Maps Disabled** (next.config.ts)
   - Client-side source maps deleted during build
   - Server-side source maps kept for monitoring

2. **Content Security Policy (CSP)**
   - Restricts script/style sources
   - Prevents inline script execution

3. **Security Headers**
   - HSTS (Strict-Transport-Security)
   - X-Frame-Options: DENY (clickjacking protection)
   - X-Content-Type-Options: nosniff
   - Referrer-Policy: strict-origin-when-cross-origin

## ✅ Newly Implemented

1. **Admin Route Middleware** (src/middleware.ts)
   - Requires `x-admin-token` header
   - Validates against `ADMIN_SECRET_TOKEN` env variable

2. **Secure API Route** (src/api/admin/route.ts)
   - Server-side Firebase Admin SDK operations
   - Rate limiting to prevent abuse
   - Request logging for Assessment trail
   - Token verification

3. **Environment Configuration**
   - `.env.local` (gitignored) contains all secrets
   - `.env.local.example` documents required variables

## 🔐 Best Practices - Still TODO

### 1. **Authentication Method** (Recommended)
   - [ ] Implement proper session-based auth (clerk.com, auth0, supabase)
   - [ ] Replace token header with secure cookies
   - [ ] Add two-factor authentication

### 2. **Database Rules** (Firebase Firestore)
   ```javascript
   // Only authenticated admins can write
   match /databases/{database}/documents {
     match /events/{document=**} {
       allow read: if true;
       allow write: if request.auth != null && request.auth.token.admin == true;
     }
     
     match /news/{document=**} {
       allow read: if true;
       allow write: if request.auth != null && request.auth.token.admin == true;
     }
   }
   ```

### 3. **Enhanced Rate Limiting**
   - [ ] Use Redis for distributed rate limiting
   - [ ] Implement per-route limits
   - [ ] Add exponential backoff for failed attempts

### 4. **Add Request Logging & Monitoring**
   - [ ] Log all admin actions to a separate Assessment collection
   - [ ] Set up alerts for suspicious activity
   - [ ] Monitor failed auth attempts

### 5. **Secure Cloudinary Uploads**
   - [ ] Use signed URLs instead of direct uploads
   - [ ] Add file type/size validation server-side
   - [ ] Generate upload presets with restrictions

### 6. **Additional Headers** (next.config.ts)
   - [ ] X-XSS-Protection: 1; mode=block
   - [ ] Content-Security-Policy-Report-Only for testing
   - [ ] Cache-Control headers for sensitive routes

## 📝 Environment Setup

1. Create `.env.local` file (copy from `.env.local.example`)
2. Generate secure token: `openssl rand -hex 32`
3. Add your Firebase Admin SDK JSON (from Firebase Console → Project Settings → Service Accounts)
4. Never commit `.env.local` to git

## 🚀 Testing

```bash
# Test admin endpoint with token
curl -X POST http://localhost:3000/api/admin \
  -H "x-admin-token: your_token_here" \
  -H "Content-Type: application/json" \
  -d '{"action":"addEvent","data":{"title":"Test","date":"2026-04-15"}}'

# Test without token (should return 401)
curl -X POST http://localhost:3000/api/admin \
  -H "Content-Type: application/json"
```

## 🔗 Resources

- [Next.js Security Best Practices](https://nextjs.org/docs/app/building-your-application/securing-your-application)
- [Firebase Security Rules](https://firebase.google.com/docs/rules)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
