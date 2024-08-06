import eslint from 'eslint';
import reactPlugin from 'eslint-plugin-react';
import reactNativePlugin from 'eslint-plugin-react-native';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import airbnbBase from 'eslint-config-airbnb-base';
import globals from 'globals';

export default [
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        plugins: {
            '@typescript-eslint': typescriptPlugin,
            react: reactPlugin,
            'react-native': reactNativePlugin,
        },
        extends: [
            'eslint:recommended',
            'plugin:react/recommended',
            'plugin:@typescript-eslint/recommended',
            'plugin:react-native/all',
            'airbnb',
        ],
        rules: {
          "react/react-in-jsx-scope": "off",
          "react/jsx-one-expression-per-line": "off",
          "react/no-unescaped-entities": "off"
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
    {
        files: ['**/*.js', '**/*.jsx'],
        languageOptions: {
            ecmaFeatures: {
                jsx: true,
            },
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        plugins: {
            react: reactPlugin,
            'react-native': reactNativePlugin,
        },
        extends: [
            'eslint:recommended',
            'plugin:react/recommended',
            'plugin:react-native/all',
            'airbnb',
        ],  
        rules: {
          "react/react-in-jsx-scope": "off",
          "react/jsx-one-expression-per-line": "off",
          "react/no-unescaped-entities": "off"
        },      
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
    {
        files: ['**/*.mjs'],
        languageOptions: {
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
    },
    {
        env: {
            browser: true,
            node: true,
            es2021: true,
        },
        globals: globals.browser,
    },
];
