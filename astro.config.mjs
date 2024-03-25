import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare({
    runtime: {
      mode: "local",
    },
  }),
  integrations: [starlight({
    title: "koralle's Tech Memo",
    social: {
      github: "https://github.com/koralle/tech-memo",
      twitter: "https://twitter.com/koralle_tech",
      "x.com": "https://x.com/koralle_tech",
    },
    logo: {
      src: "./src/assets/logo.svg",
    },
    favicon: "/images/favicon.svg",
    sidebar: [
      {
        label: "カテゴリー",
        items: [
          { label: "Rust", link: "/rust/" },
          { label: "React", link: "/react/" },
          { label: "JavaScript", link: "/js/" },
          { label: "TypeScript", link: "/ts/" },
        ],
      },
    ],
  })],
});
