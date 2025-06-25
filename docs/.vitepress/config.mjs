import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ReactUsekit",
  description: "ReactUsekit is a developer-friendly CLI that lets you install reusable React hooks and JavaScript/TypeScript utility functions into your project with a single command.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/assets/react.png',
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: '👋 Introduction',
        items: [
          { text: 'What is ReactUsekit?', link: '/what-is-reactusekit' },
          { text: 'Why ReactUsekit?', link: '/why-reactusekit' },
        ]
      },
      {
        text: '⚙️ Configuration',
      },
      {
        text: '🧩 Hooks',
      },
      {
        text: '🧩 Utility Functions',
      }
      
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
