import { version } from '../../package.json'
import { javasb } from '../.vitepress/sidebar/java'
import { javascriptsb } from '../.vitepress/sidebar/javascript'
import { topicssb } from '../.vitepress/topics'

export default {
  lang: 'en-US',
  title: 'Sintaxe',
  description: 'Aprenda programar.',

  themeConfig: {
    nav: menu(),

    sidebar: {
      '/topicos/logica': topicssb,
      '/topicos/algoritimos': topicssb,
      '/topicos/linguagens/java/': javasb,
      '/topicos/linguagens/javascript/': javascriptsb,
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
  return topicssb
}

