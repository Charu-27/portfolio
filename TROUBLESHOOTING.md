# Troubleshooting npm install Issues

## Common Issues and Solutions

### 1. npm Log Permission Error
If you see: `npm error Log files were not written due to an error writing to the directory`

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Or set npm to use a different log directory
npm config set cache ~/.npm-cache
```

### 2. Network/Proxy Issues
If packages fail to download:

**Solution:**
```bash
# Check npm registry
npm config get registry

# If needed, set to default registry
npm config set registry https://registry.npmjs.org/

# Or use a different registry (if in restricted network)
npm config set registry https://registry.npmmirror.com
```

### 3. Node Version Compatibility
Make sure you have Node.js 18+ installed:
```bash
node --version  # Should show v18.x.x or higher
```

### 4. Permission Issues (macOS/Linux)
If you get permission errors:

**Solution:**
```bash
# Don't use sudo with npm (can cause issues)
# Instead, fix npm permissions:
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
```

### 5. Clean Install
If nothing works, try a clean install:

```bash
# Remove node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Clear npm cache
npm cache clean --force

# Install again
npm install
```

### 6. Alternative: Use yarn
If npm continues to have issues, you can use yarn:

```bash
# Install yarn globally (if not installed)
npm install -g yarn

# Then use yarn instead
yarn install
yarn dev
```

### 7. Check for Specific Error Messages
Please share the exact error message you're seeing. Common ones:

- **"EACCES"** - Permission issue
- **"ETIMEDOUT"** - Network timeout
- **"ENOTFOUND"** - DNS/network issue
- **"ERR! code ELIFECYCLE"** - Build script failed

## Quick Fix Commands

```bash
# Navigate to portfolio directory
cd portfolio

# Try these in order:
npm cache clean --force
npm install --verbose

# If that doesn't work:
rm -rf node_modules package-lock.json
npm install

# If still failing, try:
npm install --legacy-peer-deps
```

## Still Having Issues?

Please share:
1. The exact error message you see
2. Your operating system (macOS/Windows/Linux)
3. Output of: `node --version` and `npm --version`

