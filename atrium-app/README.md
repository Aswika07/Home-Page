# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Tailwind CSS

This project includes a Tailwind CSS setup. To enable it locally:

1. Install the new dev dependencies:

```powershell
cd atrium-app; npm install
```

2. Start the dev server:

```powershell
cd atrium-app; npm run dev
```

Files added/updated:
- `postcss.config.cjs` — PostCSS configuration with Tailwind and Autoprefixer
- `tailwind.config.cjs` — Tailwind config with `content` paths
- `src/index.css` — now includes Tailwind directives (`@tailwind base;`, `@tailwind components;`, `@tailwind utilities;`)

You can now use Tailwind utility classes in your components. If you want to customize themes or add plugins, edit `tailwind.config.cjs`.
