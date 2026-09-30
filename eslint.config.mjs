import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
   
const __filename = fileURLToPath(import.meta.url); 
const __dirname = dirname(__filename); 

const compat = new FlatCompat({ 
  baseDirectory: __dirname, 
}); 

  const eslintConfig = [ 
    ...compat.extends("next/core-web-vitals", "next/typescript"), 

    // Disable the warning for @ts-ignore in auth.ts 
     { 
      files: ["auth.ts"], 
      rules: { 
        "@typescript-eslint/ban-ts-comment": "off", 
      }, 
    }, 
  ]; 
  export default eslintConfig;