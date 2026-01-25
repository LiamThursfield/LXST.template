// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default withNuxt(
    // This helper adds the prettier plugin and displays
    // formatting issues as ESLint errors
    eslintPluginPrettierRecommended
)
