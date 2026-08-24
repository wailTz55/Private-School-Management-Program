// scripts/generate-keys.js
// Run once: node scripts/generate-keys.js
// Copy the public key into license.service.ts
// Keep private.key in scripts/ (NEVER commit to git)

const { generateKeyPairSync } = require('crypto')
const fs = require('fs')
const path = require('path')

const { publicKey, privateKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: { type: 'pkcs1', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs1', format: 'pem' }
})

console.log('\n========== PUBLIC KEY (embed in license.service.ts) ==========')
console.log(publicKey)

console.log('========== PRIVATE KEY (keep in scripts/private.key) ==========')
console.log(privateKey)

// Save to files
const scriptsDir = path.join(__dirname)
fs.writeFileSync(path.join(scriptsDir, 'private.key'), privateKey, 'utf8')
fs.writeFileSync(path.join(scriptsDir, 'public.key'), publicKey, 'utf8')

console.log('\n✅ Keys saved to scripts/private.key and scripts/public.key')
console.log('⚠️  Add scripts/private.key to .gitignore immediately!')
