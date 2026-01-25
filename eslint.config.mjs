// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default withNuxt(
    {
        files: ['app/**/*.vue'],
        languageOptions: {
            parser: (await import('vue-eslint-parser')).default,
            parserOptions: {
                parser: (await import('@typescript-eslint/parser')).default,
                sourceType: 'module'
            }
        }
    },
    {
        files: ['app/**/*.ts'],
        languageOptions: {
            parser: (await import('@typescript-eslint/parser')).default,
            parserOptions: {
                sourceType: 'module'
            }
        }
    },
    eslintPluginPrettierRecommended
)
