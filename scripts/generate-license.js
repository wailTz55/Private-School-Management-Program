// scripts/generate-license.js
// DEVELOPER-ONLY CLI key generator.
// Usage: node scripts/generate-license.js --machineId DZ-XXXX-XXXX-XXXX-XXXX --client "School Name" --type PERPETUAL
// NEVER bundle or expose this script to end users.

const { createSign } = require('crypto')
const fs = require('fs')
const path = require('path')

// ─── Load Private Key ─────────────────────────────────────────────────────
const privateKeyPath = path.join(__dirname, 'private.key')
if (!fs.existsSync(privateKeyPath)) {
  console.error('\n❌ Error: scripts/private.key not found!')
  console.error('Run: node scripts/generate-keys.js first\n')
  process.exit(1)
}
const PRIVATE_KEY_PEM = fs.readFileSync(privateKeyPath, 'utf8')

// ─── Parse CLI Args ───────────────────────────────────────────────────────
function getArg(flag) {
  const idx = process.argv.indexOf(flag)
  return idx !== -1 ? process.argv[idx + 1] : null
}

const machineId = getArg('--machineId')
const clientName = getArg('--client')
const licenseType = getArg('--type') || 'PERPETUAL'

if (!machineId || !clientName) {
  console.error('\nUsage:')
  console.error('  node scripts/generate-license.js \\')
  console.error('    --machineId DZ-XXXX-XXXX-XXXX-XXXX \\')
  console.error('    --client "School Name" \\')
  console.error('    --type PERPETUAL|ANNUAL\n')
  process.exit(1)
}

if (!['PERPETUAL', 'ANNUAL'].includes(licenseType)) {
  console.error('\n❌ --type must be PERPETUAL or ANNUAL\n')
  process.exit(1)
}

// ─── Build Payload ────────────────────────────────────────────────────────
const issuedAt = new Date().toISOString()
let expiresAt = undefined
if (licenseType === 'ANNUAL') {
  const expiry = new Date()
  expiry.setFullYear(expiry.getFullYear() + 1)
  expiresAt = expiry.toISOString()
}

const payload = {
  machineId,
  clientName,
  issuedAt,
  licenseType,
  ...(expiresAt ? { expiresAt } : {})
}

// ─── Sign Payload ─────────────────────────────────────────────────────────
function toBase64Url(buffer) {
  return buffer.toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '')
}

try {
  const payloadJson = JSON.stringify(payload)
  const payloadBuffer = Buffer.from(payloadJson, 'utf8')
  const payloadB64 = toBase64Url(payloadBuffer)

  const signer = createSign('RSA-SHA256')
  signer.update(payloadBuffer)
  const signature = signer.sign({ key: PRIVATE_KEY_PEM, format: 'pem', type: 'pkcs1' })
  const signatureB64 = toBase64Url(signature)

  const token = `${payloadB64}.${signatureB64}`

  console.log('\n' + '═'.repeat(60))
  console.log('✅  LICENSE TOKEN GENERATED SUCCESSFULLY')
  console.log('═'.repeat(60))
  console.log(`\nClient:        ${clientName}`)
  console.log(`Machine ID:    ${machineId}`)
  console.log(`License Type:  ${licenseType}`)
  console.log(`Issued At:     ${issuedAt}`)
  if (expiresAt) console.log(`Expires At:    ${expiresAt}`)
  console.log('\n── Activation Token (send this to the client) ──')
  console.log('\n' + token + '\n')
  console.log('═'.repeat(60) + '\n')
} catch (err) {
  console.error('\n❌ Failed to sign license:', err.message, '\n')
  process.exit(1)
}
