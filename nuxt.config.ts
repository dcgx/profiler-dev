// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/apollo", "@pinia/nuxt"],
  runtimeConfig: {
    githubApiUrl: process.env.GITHUB_API_URL,
    githubToken: process.env.GITHUB_TOKEN,
  },
  css: ["~/assets/css/main.css", "~/assets/scss/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/_variables.scss";',
        },
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  apollo: {
    clients: {
      default: {
        httpEndpoint: "http://localhost:3000/graphql",
      },
    },
  },
});
