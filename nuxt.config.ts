// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    srcDir: 'app',
    modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon', '@nuxt/image', 'shadcn-nuxt'],

    vite: {
        plugins: [tailwindcss()]
    },

    css: ['./app/assets/css/tailwind.css'],

    shadcn: {
        /**
         * Prefix for all the imported component
         */
        prefix: '',
        /**
         * Directory that the component lives in.
         * @default "~/components/ui"
         */
        componentDir: '@/components/ui'
    },

    app: {
        head: {
            bodyAttrs: {
                class: 'dark'
            }
        }
    }
})
