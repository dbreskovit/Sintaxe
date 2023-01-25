import { version } from '../../package.json'

export default {
  lang: 'en-US',
  title: 'Sintaxe',
  description: 'Aprenda programar.',

  themeConfig: {
    nav: menu(),

    sidebar: {
      
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
function menu() {
  return [
  
    { 
      text: 'Linguagens', 
      items:[
        {text:'Java', link:'/topicos/linguagens/java/index'},
        {text:'Java Script', link:'/topicos/linguagens/javascript/index'},
        {text:'Type Script',link:'/java/intermediario'},
        {text:'C-Sharp',link:'/java/avancado'},
      ]
    },
    
    { text: 'Frameworks', link: '/spring/index' },
    { text: 'Dados', link: '/database/index'},
    { text: 'Design', link: '/web/index'},
  
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

