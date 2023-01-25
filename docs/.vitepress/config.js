import { version } from '../../package.json'

export default {
  lang: 'en-US',
  title: 'Sintaxe',
  description: 'Aprenda programar.',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/java/fundamentos': javaFundamentos(),
    },

    editLink: {
      pattern: 'https://github.com/glysns',
      text: 'Acesse nosso GitHub'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/glysns' }
    ],

    footer: {
      message: 'Distribuição sobre MIT License.',
      copyright: 'Copyright © 2022 Digytal'
    }
  }
}
function javaFundamentos(){
  return [
    {
      text: 'Fundamentos',collapsible: true,
      items: [
      { text: 'Era Sun', link: '/guide/what-is-vitepress' },
      { text: 'Era Oracle', link: '/guide/what-is-vitepress', items: [
        { text: 'Era Sun', link: '/guide/what-is-vitepress' },
        { text: 'Era Oracle', link: '/guide/what-is-vitepress' },
      ] },
      ]
    },
    {
      text: 'Fundamentos',collapsible: true,
      items: [
      { text: 'Era Sun', link: '/guide/what-is-vitepress' },
      { text: 'Era Oracle', link: '/guide/what-is-vitepress', items: [
        { text: 'Era Sun', link: '/guide/what-is-vitepress' },
        { text: 'Era Oracle', link: '/guide/what-is-vitepress' },
      ] },
      ]
    },
    {
      text: 'Fundamentos',collapsible: true,
      items: [
      { text: 'Era Sun', link: '/guide/what-is-vitepress' },
      { text: 'Era Oracle', link: '/guide/what-is-vitepress', items: [
        { text: 'Era Sun', link: '/guide/what-is-vitepress' },
        { text: 'Era Oracle', link: '/guide/what-is-vitepress' },
      ] },
      ]
    },
];
}
function nav() {
  return [
  
    { 
      text: 'Java', 
      items:[
        {text:'Fundamentos',link:'/java/fundamentos/index'},
        {text:'Básico',link:'/java/basico'},
        {text:'Intermediário',link:'/java/intermediario'},
        {text:'Avançado',link:'/java/avancado'},
      ]
    },
    
    { text: 'Spring', link: '/spring/index', activeMatch: '/spring/' },
    { text: 'Database', link: '/database/index', activeMatch: '/database/' },
    { text: 'Web', link: '/web/index', activeMatch: '/web/' },
  
    {
      text: version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
        },
        {
          text: 'Contributing',
          link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
        }
      ]
    }
  ]
}

function controleFluxoSb() {
  return [
    {
      text: 'Estruturas condicionais',
      collapsible: true,
      items: [
        { text: 'if-else', link: '/guide/what-is-vitepress' },
        { text: 'switch-case', link: '/guide/what-is-vitepress' },
      ]
    },
    {
      text: 'Estruturas de repetição',
      collapsible: true,
      items: [
        { text: 'for', link: '/guide/what-is-vitepress' },
        { text: 'while', link: '/guide/what-is-vitepress' },
        { text: 'do-while', link: '/guide/what-is-vitepress' },
      ]
    },
    {
      text: 'Estruturas excepcionais',
      collapsible: true,
      items: [
        { text: 'try-catch-finally', link: '/guide/what-is-vitepress' },
        { text: 'throw', link: '/guide/what-is-vitepress' }
      ]
    }
  ]
}

function sidebarConfig() {
  return [
    {
      text: 'Config',
      items: [
        { text: 'Introduction', link: '/config/introduction' },
        { text: 'App Configs', link: '/config/app-configs' },
        { text: 'Theme Configs', link: '/config/theme-configs' },
        { text: 'Frontmatter Configs', link: '/config/frontmatter-configs' }
      ]
    }
  ]
}