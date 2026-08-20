// eslint-config-next ships a native flat config as of v15.3, so the
// FlatCompat/eslintrc bridge this file used before is no longer needed
// (and is incompatible with eslint-config-next 16).
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  { ignores: [".next/**", "out/**", "node_modules/**"] },
  ...nextCoreWebVitals,
];

export default eslintConfig;
