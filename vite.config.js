import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'

// https設定 - mkcertで生成した証明書を使用
export default defineConfig({
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, './cert.key')),
      cert: fs.readFileSync(path.resolve(__dirname, './cert.crt'))
    },
    port: 3000,
    open: true // ブラウザを自動で開く
  }
})