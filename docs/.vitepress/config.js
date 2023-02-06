import { topicssb } from "../.vitepress/topics";

//LINGUAGENS
import { csharpsb } from "../.vitepress/sidebar/c-sharp";
import { javasb } from "../.vitepress/sidebar/java";
import { javascriptsb } from "../.vitepress/sidebar/javascript";
import { typescriptsb } from "../.vitepress/sidebar/typescript";

export default {
  lang: "pt-BR",
  title: "Sintaxe",
  description: "Aprenda programar.",
  cleanUrls: true,
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/assets/favicon.svg",
      },
    ],
  ],
  themeConfig: {
    nav: menu(),
    sidebar: {
      "/topicos/logica": topicssb,
      "/topicos/algoritimos": topicssb,
      "/topicos/linguagens/java/": javasb,
      "/topicos/linguagens/javascript/": javascriptsb,
      "/topicos/linguagens/typescript/": typescriptsb,
      "/topicos/linguagens/c-sharp/": csharpsb,
    },

    editLink: {
      pattern: "https://github.com/glysns",
      text: "Acesse nosso GitHub",
    },

    socialLinks: [{ icon: "github", link: "https://github.com/glysns" }],

    footer: {
      message: "Distribuição sobre MIT License.",
      copyright: "Copyright © 2022 Digytal",
    },
  },
};
function menu() {
  return topicssb;
}
