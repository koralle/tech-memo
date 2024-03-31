import { defineConfig } from 'astro/config'
import cloudflare from '@astrojs/cloudflare'

import starlight from '@astrojs/starlight'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    runtime: {
      mode: 'local'
    }
  }),
  integrations: [
    starlight({
      title: "koralle's Tech Memo",
      social: {
        github: 'https://github.com/koralle/tech-memo',
        twitter: 'https://twitter.com/koralle_tech',
        'x.com': 'https://x.com/koralle_tech'
      },
      logo: {
        src: './src/assets/logo.svg'
      },
      favicon: '/images/favicon.svg',
      sidebar: [
        {
          label: 'React',
          autogenerate: {
            directory: 'react'
          }
        },
        {
          label: 'JavaScript',
          autogenerate: {
            directory: 'javascript'
          }
        },
        {
          label: 'TypeScript',
          autogenerate: {
            directory: 'typescript'
          }
        },
        {
          label: 'Rust',
          autogenerate: {
            directory: 'rust'
          }
        },
        {
          label: 'フロントエンド',
          autogenerate: {
            directory: 'frontend'
          }
        }
      ]
    })
  ]
})
