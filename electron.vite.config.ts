import { resolve } from 'path'
import { defineConfig } from 'electron-vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import javascriptObfuscator from 'vite-plugin-javascript-obfuscator'

// Medium obfuscation preset — identifier renaming + base64 string encryption.
// Applied ONLY in production builds (not during `electron-vite dev`).
const obfuscatorOptions = {
  identifierNamesGenerator: 'hexadecimal' as const,
  renameGlobals: false,
  stringArray: true,
  stringArrayEncoding: ['base64'] as ('base64')[],
  stringArrayThreshold: 0.8,
  controlFlowFlattening: false, // keep startup performance acceptable
  deadCodeInjection: false,
  selfDefending: false, // incompatible with strict-mode bundles
  rotateStringArray: true,
  shuffleStringArray: true,
  splitStrings: false,
  compact: true,
  log: false
}

const isProduction = process.env.NODE_ENV === 'production'

export default defineConfig({
  main: {
    plugins: isProduction ? [javascriptObfuscator({ options: obfuscatorOptions })] : []
  },
  preload: {
    plugins: isProduction ? [javascriptObfuscator({ options: obfuscatorOptions })] : []
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
        '@': resolve('src/renderer/src')
      }
    },
    plugins: [
      tailwindcss(),
      react(),
      ...(isProduction ? [javascriptObfuscator({ options: obfuscatorOptions })] : [])
    ]
  }
})
