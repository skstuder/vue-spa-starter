# vue-spa-starter

Basic template for Vue 3, TypeScript, UnoCSS, and Pinia.

## How to Use and Extend UnoCSS for Long-Term Maintainability

UnoCSS provides utility classes similar to Tailwind, but with a simpler and more flexible configuration. To keep your styles maintainable and scalable, follow this approach:

1. **Define Design Tokens in CSS**

   - In `src/assets/main.css`, create two blocks of CSS variables:
     - The first block contains specific values for colors, fonts, sizing, etc.
     - The second block maps those values to semantic variables (e.g., `--color-primary`, `--color-background`).
   - This separation lets you update a base value and have it reflected everywhere the semantic variable is used.

2. **Expose Tokens to UnoCSS**

   - In `uno.config.ts`, add your semantic variables to the UnoCSS theme config:
     - Example: `primary: 'var(--color-primary)'` enables utility classes like `text-primary`, `bg-primary`, and `border-primary`.
   - You can override or add custom class names as needed. See the UnoCSS documentation for more options.

3. **Use Utility Classes in Components**
   - Use your semantic utility classes in your Vue components for consistent, maintainable styling.
   - Example: `<div class="bg-primary text-surface">...</div>`

This setup makes it easy to change your design system in one place and have those changes reflected throughout your app.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
