import { defineConfig } from 'astro/config'
import cloudflare from '@astrojs/cloudflare'

import starlight from '@astrojs/starlight'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  vite: {
    ssr: {
      external: ['node:url', 'node:path', 'node:child_process', 'node:fs']
    }
  },
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
      lastUpdated: true,
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
        },
        {
          label: 'Cloudflare',
          autogenerate: {
            directory: 'cloudflare'
          }
        },
        {
          label: 'Git',
          autogenerate: {
            directory: 'git'
          }
        },
        {
          label: 'GitHub Actions',
          autogenerate: {
            directory: 'github-actions'
          }
        },
        {
          label: 'AWS',
          autogenerate: {
            directory: 'aws'
          }
        },
        {
          label: 'Linux',
          autogenerate: {
            directory: 'linux'
          }
        },
        {
          label: 'Python',
          autogenerate: {
            directory: 'python'
          }
        },
        {
          label: 'HTTP',
          autogenerate: {
            directory: 'http'
          }
        },
        {
          label: 'MySQL',
          autogenerate: {
            directory: 'mysql'
          }
        },
        {
          label: 'PostgreSQL',
          autogenerate: {
            directory: 'psql'
          }
        },
        {
          label: 'アルゴリズム',
          autogenerate: {
            directory: 'algorithm'
          }
        },
        {
          label: '暗号',
          autogenerate: {
            directory: 'crypto'
          }
        },
        {
          label: 'Vue',
          autogenerate: {
            directory: 'vue'
          }
        },
        {
          label: 'Astro',
          autogenerate: {
            directory: 'astro'
          }
        },
        {
          label: 'Terraform',
          autogenerate: {
            directory: 'terraform'
          }
        },
        {
          label: 'pnpm',
          autogenerate: {
            directory: 'pnpm'
          }
        },
        {
          label: 'npm',
          autogenerate: {
            directory: 'npm'
          }
        }
      ]
    })
  ]
})
