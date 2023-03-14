import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['app/**/*.{jsx,tsx,css}', 'pages/**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next/**/*'],
  },
  // theme: {
  //   extend: {
  //       fontFamily: {
  //           mona: ['var(--font-mona)'],
  //           hubot: ['var(--font-hubot)'],
  //       }
  //   }
  // },
  attributify: true,
  shortcuts: {
    btn: 'rounded-lg border border-gray-300 text-gray-100 bg-blue-500 px-4 py-2 m-2 inline-block hover:shadow',
  },
})