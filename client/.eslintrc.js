module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "airbnb",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "react-hooks", "prettier", "import"],
  settings: {
    "eslint.workingDirectories": [{ directory: "client", changeProcessCWD: true }],
    react: { version: "detect" },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ["node_modules", "src/"],
      },
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      },
    },
    "import/parser": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    typescript: {
      project: "./src",
    },
  },
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".tsx", ".ts"] }],
    "import/newline-after-import": "error",
    "import/extensions": "off",
    "no-unused-vars": "off",
    "import/no-unresolved": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { args: "after-used", argsIgnorePattern: "^_" },
    ],
    "@typescript-eslint/no-unsafe-assignment": "warn",
  },
};
