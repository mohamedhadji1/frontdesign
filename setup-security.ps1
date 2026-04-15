# Security Setup Script for Keystone
# Run this in PowerShell to set up your security configuration

Write-Host "======================================" -ForegroundColor Cyan
Write-Host "Keystone Security Setup" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""

# Check if .env.local exists
if (Test-Path ".env.local") {
    Write-Host "DONE: .env.local already exists" -ForegroundColor Green
} else {
    Write-Host "Creating .env.local from template..."
    Copy-Item ".env.local.example" ".env.local"
    Write-Host "DONE: .env.local created" -ForegroundColor Green
}

# Generate secure token if not exists
$envContent = Get-Content ".env.local" -Raw
if ($envContent -match "ADMIN_SECRET_TOKEN=your_secure") {
    Write-Host ""
    Write-Host "Generating secure admin token..."
    
    # Generate random token (32 bytes = 64 hex characters)
    $bytes = [System.Byte[]]::new(32)
    [System.Security.Cryptography.RNGCryptoServiceProvider]::Create().GetBytes($bytes)
    $TOKEN = ($bytes | ForEach-Object { $_.ToString("x2") }) -join ""
    
    $newContent = $envContent -replace "ADMIN_SECRET_TOKEN=your_secure_random_token_here", "ADMIN_SECRET_TOKEN=$TOKEN"
    Set-Content ".env.local" $newContent
    
    Write-Host "DONE: Token generated" -ForegroundColor Green
    Write-Host "Admin Token: $TOKEN" -ForegroundColor Yellow
    Write-Host "(Save this token - you will need it for the admin panel)" -ForegroundColor Yellow
} else {
    Write-Host "DONE: Admin token already set" -ForegroundColor Green
}

Write-Host ""
Write-Host "======================================" -ForegroundColor Cyan
Write-Host "SETUP COMPLETE - Next Steps:" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Edit .env.local and add your Firebase credentials:" -ForegroundColor White
Write-Host "   Go to Firebase Console > Project Settings" -ForegroundColor Gray
Write-Host "   Service Accounts tab > Generate new private key" -ForegroundColor Gray
Write-Host ""
Write-Host "2. Add Cloudinary credentials (optional):" -ForegroundColor White
Write-Host "   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME" -ForegroundColor Gray
Write-Host "   NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET" -ForegroundColor Gray
Write-Host ""
Write-Host "3. Save the admin token in a secure location" -ForegroundColor White
Write-Host ""
Write-Host "4. Start the dev server:" -ForegroundColor White
Write-Host "   npm run dev" -ForegroundColor Yellow
Write-Host ""
Write-Host "5. Access admin panel at:" -ForegroundColor White
Write-Host "   http://localhost:3000/admin-secret-url" -ForegroundColor Yellow
Write-Host "======================================" -ForegroundColor Cyan
