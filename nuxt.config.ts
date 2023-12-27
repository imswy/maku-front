// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt','@vueuse/nuxt','nuxt-icon',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // 自动引入 `defineStore()`
          'defineStore',
          // 自动引入 `defineStore()` 并重命名为 `definePiniaStore()`
          ['defineStore', 'definePiniaStore']
        ]
      }
    ],
    '@pinia-plugin-persistedstate/nuxt'
  ],
  css: ['@unocss/reset/tailwind-compat.css', '~/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/var.scss" as *;'
        }
      },
      postcss: {
        plugins: [

        ]
      }
    }
  }
})
