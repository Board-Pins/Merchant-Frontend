module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { 
    react: { version: 'detect' },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx']
      }
    }
  },
  plugins: ['react-refresh', 'import'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'import/no-unresolved': 'error',
    'import/named': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-unused-vars': 'warn',
    
    // Add performance improvements
    'react/prop-types': 'off', // Disable prop-types checking if you're not using it
    'import/namespace': 'off', // Can be slow
    'import/no-named-as-default': 'off', // Can be slow
  },
}


