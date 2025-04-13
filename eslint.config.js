import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
// Import Prettier config to disable ESLint formatting rules
import eslintConfigPrettier from "eslint-config-prettier";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,jsx}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,jsx}"], languageOptions: { globals: globals.browser } },
  pluginReact.configs.flat.recommended,

  // Add Prettier config last to override ESLint formatting rules
  eslintConfigPrettier
]);