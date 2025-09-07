# NodeJs-TS
## Node.js + TypeScript + ESLint + Prettier Boilerplate

A modern template for Node.js projects using TypeScript, code standardization with ESLint, and code formatting with Prettier.

### 📁 Project Structure

```
nodejs-ts/
 ┣ 📂dist           # Build output folder
 ┣ 📂src            # TypeScript source code
 ┃ ┣ 📜index.ts     # Entry point
 ┃ ┗ 📜type.d.ts    # Global type definitions (can be empty)
 ┣ 📜.editorconfig  # Editor configuration
 ┣ 📜.env           # Environment variables
 ┣ 📜.eslintignore  # Ignore files for lint
 ┣ 📜eslint.config.mts # ESLint configuration
 ┣ 📜.gitignore     # Ignore files for git
 ┣ 📜.prettierignore# Ignore files for Prettier
 ┣ 📜.prettierrc    # Prettier configuration
 ┣ 📜nodemon.json   # Nodemon configuration
 ┣ 📜package.json   # Project info & scripts
 ┣ 📜tsconfig.json  # TypeScript configuration
```

### 🚀 Setup & Installation

```bash
# 1. Initialize project
npm init -y

# 2. Install TypeScript & Node.js types
npm install --save-dev typescript @types/node

# 3. Install ESLint, Prettier, and required plugins
npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier tsx tsc-alias rimraf nodemon jiti globals @eslint/js typescript-eslint

# 4. (Recommended) Install ESLint, Prettier, EditorConfig extensions for VS Code
```

### ⚙️ Scripts in package.json

```jsonc
"scripts": {
  "dev": "npx nodemon",
  "build": "rimraf ./dist && tsc && tsc-alias",
  "start": "node dist/index.js",
  "lint": "eslint .",
  "lint:fix": "eslint . --fix",
  "prettier": "prettier --check .",
  "prettier:fix": "prettier --write ."
}
```

### 🛠️ Main configuration files
- `tsconfig.json`: TypeScript config (Node.js, alias, strict mode...)
- `eslint.config.mts`: ESLint config (code standardization, Prettier integration)
- `.prettierrc`: Prettier config (consistent code formatting)
- `.editorconfig`: Editor config for team consistency
- `.gitignore`, `.eslintignore`, `.prettierignore`: Ignore unnecessary files
- `nodemon.json`: Auto-reload server on code changes

### 💡 Notes
- Create `src/type.d.ts` for global types (can be empty if not used)
- Install `@types/library-name` if using external libraries without TypeScript support
- Install ESLint, Prettier, EditorConfig extensions for VS Code for realtime lint/format
- For ES Module imports, use: `(await import('library-name')).default`

### 🏃‍♂️ Run the project

```bash
# Run in dev mode (auto reload)
npm run dev

# Build TypeScript to JavaScript
npm run build

# Run production (after build)
npm run start

# Check & fix lint errors
npm run lint
npm run lint:fix

# Check & format code
npm run prettier
npm run prettier:fix
```

---

> This project helps you quickly start with Node.js + TypeScript, standardize code, and collaborate more efficiently!
