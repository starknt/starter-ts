import path from 'path'
import { defineConfig } from 'vite'

const alias = {
  'pkg-name': path.resolve(__dirname, 'src', 'index.ts'),
}

export default defineConfig({
  resolve: {
    alias,
  },
})
