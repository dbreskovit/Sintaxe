---
layout: page
title: Conheça o nosso time
description: Este conteúdo é destinado para pessoas que buscam dominar linguagens de programação como o Java
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
    <template #title>Conheça o projeto</template>
    <template #lead>
       Este conteúdo é destinado para pessoas que buscam dominar linguagens de programação como o Java
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="core" />
  <VPTeamPageSection>
    <template #title>Team Emeriti</template>
    <template #lead>
      Aquí destacamos a algunos miembros del equipo que ya no están activos y que han hecho valiosas
      contribuciones en el pasado.
    </template>
    <template #members>
      <VPTeamMembers size="small" :members="emeriti" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
