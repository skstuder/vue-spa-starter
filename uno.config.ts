import { defineConfig } from 'unocss'

// Config options: https://unocss.dev/config/
export default defineConfig({
  theme: {
    colors: {
      primary: 'var(--color-primary)',
      primaryDark: 'var(--color-primary-dark)',
      background: 'var(--color-background)',
      surface: 'var(--color-surface)',
      text: 'var(--color-text)',
      textMuted: 'var(--color-text-muted)',
      success: 'var(--color-success)',
      error: 'var(--color-error)',
      warning: 'var(--color-warning)',
    },
  },
})
