# NodeJs-TS
## Node.js + TypeScript + ESLint + Prettier ボイラープレート

TypeScript を使い、ESLint でコード標準化、Prettier でコード整形を行う Node.js プロジェクトのための最新テンプレートです。

### 📁 ディレクトリ構成

```
nodejs-ts/
 ┣ 📂dist           # ビルド出力フォルダ
 ┣ 📂src            # TypeScript ソースコード
 ┃ ┣ 📜index.ts     # エントリーポイント
 ┃ ┗ 📜type.d.ts    # グローバル型定義（空でもOK）
 ┣ 📜.editorconfig  # エディタ設定
 ┣ 📜.env           # 環境変数
 ┣ 📜.eslintignore  # Lint 対象外ファイル
 ┣ 📜eslint.config.mts # ESLint 設定
 ┣ 📜.gitignore     # Git 対象外ファイル
 ┣ 📜.prettierignore# Prettier 対象外ファイル
 ┣ 📜.prettierrc    # Prettier 設定
 ┣ 📜nodemon.json   # Nodemon 設定
 ┣ 📜package.json   # プロジェクト情報・スクリプト
 ┣ 📜tsconfig.json  # TypeScript 設定
```

### 🚀 セットアップ & インストール

```bash
# 1. プロジェクト初期化
npm init -y

# 2. TypeScript & Node.js 型定義インストール
npm install --save-dev typescript @types/node

# 3. ESLint, Prettier, 必要なプラグインをインストール
npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier tsx tsc-alias rimraf nodemon jiti globals @eslint/js typescript-eslint

# 4. （推奨）VS Code 拡張機能 ESLint, Prettier, EditorConfig をインストール
```

### ⚙️ package.json のスクリプト

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

### 🛠️ 主な設定ファイル
- `tsconfig.json`: TypeScript 設定（Node.js, エイリアス, strict モード...）
- `eslint.config.mts`: ESLint 設定（コード標準化、Prettier 連携）
- `.prettierrc`: Prettier 設定（コード整形統一）
- `.editorconfig`: チームでエディタ設定統一
- `.gitignore`, `.eslintignore`, `.prettierignore`: 不要ファイル除外
- `nodemon.json`: コード変更時に自動リロード

### 💡 注意点
- グローバル型定義用に `src/type.d.ts` を作成（未使用なら空でもOK）
- TypeScript 未対応の外部ライブラリ利用時は `@types/ライブラリ名` を追加
- VS Code 拡張機能 ESLint, Prettier, EditorConfig を導入し、リアルタイムで lint/format
- ES Module の import は `(await import('ライブラリ名')).default` を利用

### 🏃‍♂️ プロジェクト実行

```bash
# 開発モード（自動リロード）
npm run dev

# TypeScript を JavaScript にビルド
npm run build

# 本番実行（ビルド後）
npm run start

# Lint チェック & 修正
npm run lint
npm run lint:fix

# コード整形チェック & 実行
npm run prettier
npm run prettier:fix
```

---

> このプロジェクトは Node.js + TypeScript で素早く開発を始め、コード標準化・チーム開発を効率化します！
