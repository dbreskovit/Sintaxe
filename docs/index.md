---
layout: home

hero:
  name: Sintaxe
  text: Aprenda programar
  tagline: Powered by Digytal
  image:
    src: /assets/img/dev.png
  actions:
    - theme: brand
      text: Saber mais
      link: /team
    - theme: alt
      text: Nosso GitHub
      link: https://github.com/glysns

features:
  - title: 📖 Conteúdos
    details: Disponibilizamos de uma estrutura de conteúdos totalmente atualizada e aderente ao mercado.
  - title: ⚡ Metodologia
    details: Mapeamos um percurso em forma de conteúdos para cada etapa de sua evolução repleto de direcionamentos, desafios e soluções que irão te preparar para o mercado de trabalho.
  - title: 🔧️ Desafios
    details: Por em prática tudo o que você aprendeu é a melhor certeza da nossa evolução.
  - title: 💻️ Projetos
    details: O mercado de trabalho espera profisionais qualificados, então juntos vamos desenvolver o que há de mais desafiador.
  - title: 🌙 Mentorias
    details: A qualquer momento iremos te auxiliar nesta nova jornada em busca de novas conquistas
  - title: 💎 Certificação
    details: Iremo te ajudar a ser um profissional certificado e de destaque no mercado.
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamPageSection,
  VPTeamMembers
} from 'vitepress/theme'
import { core, emeriti } from './_data/team'
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Time</template>
    <template #lead>
       Conheça nossos entusiastas
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="core" />
  
</VPTeamPage>

