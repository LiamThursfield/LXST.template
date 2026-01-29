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
            htmlAttrs: {
                lang: 'en'
            },
            bodyAttrs: {
                class: 'dark'
            },
            title: 'LXST.template | Premium Website Template',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    key: 'description',
                    name: 'description',
                    content:
                        'A premium, high-performance website template built with Nuxt 4, Tailwind 4, and shadcn-vue.'
                },

                { name: 'theme-color', content: '#00FF99' },

                // Open Graph / Facebook
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: 'https://lxst.template/' },
                { property: 'og:title', content: 'LXST.template | Premium Website Template' },
                {
                    property: 'og:description',
                    content:
                        'A premium, high-performance website template built with Nuxt 4, Tailwind 4, and shadcn-vue.'
                },
                { property: 'og:image', content: '/meta/og_image.png' },

                // Twitter
                { property: 'twitter:card', content: 'summary_large_image' },
                { property: 'twitter:url', content: 'https://lxst.template/' },
                { property: 'twitter:title', content: 'LXST.template | Premium Website Template' },
                {
                    property: 'twitter:description',
                    content:
                        'A premium, high-performance website template built with Nuxt 4, Tailwind 4, and shadcn-vue.'
                },
                { property: 'twitter:image', content: '/meta/og_image.png' }
            ],
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
        }
    }
})
