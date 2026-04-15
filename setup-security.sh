#!/bin/bash
# Security Setup Script for Keystone

echo "======================================"
echo "Keystone Security Setup"
echo "======================================"
echo ""

# Check if .env.local exists
if [ -f ".env.local" ]; then
    echo "✓ .env.local already exists"
else
    echo "Creating .env.local from template..."
    cp .env.local.example .env.local
    echo "✓ .env.local created"
fi

# Generate secure token if not exists
if grep -q "ADMIN_SECRET_TOKEN=your_secure" .env.local; then
    echo ""
    echo "Generating secure admin token..."
    TOKEN=$(openssl rand -hex 32)
    sed -i "s/your_secure_random_token_here/$TOKEN/" .env.local
    echo "✓ Token generated: $TOKEN"
    echo "  (Copy this token - you'll need it to access admin panel)"
else
    echo "✓ Admin token already set"
fi

echo ""
echo "======================================"
echo "Next Steps:"
echo "======================================"
echo ""
echo "1. Edit .env.local and add your Firebase credentials:"
echo "   - Get these from Firebase Console → Project Settings"
echo "   - For Admin SDK: Service Accounts tab"
echo ""
echo "2. Add Cloudinary credentials (optional):"
echo "   - NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME"
echo "   - NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET"
echo ""
echo "3. Save your admin token in a secure location"
echo ""
echo "4. Start the dev server:"
echo "   npm run dev"
echo ""
echo "5. Access admin panel at: http://localhost:3000/admin-secret-url"
echo "======================================"
