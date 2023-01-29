import { version } from '../../package.json'
import { topicssb } from '../.vitepress/topics'

//LINGUAGENS
import { javasb } from '../.vitepress/sidebar/java'
import { javascriptsb } from '../.vitepress/sidebar/javascript'
import { typescriptsb } from '../.vitepress/sidebar/typescript'
import { csharpsb } from '../.vitepress/sidebar/c-sharp'

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
      '/topicos/linguagens/typescript/': typescriptsb,
      '/topicos/linguagens/c-sharp/': csharpsb,
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

