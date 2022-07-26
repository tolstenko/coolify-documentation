---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/andrasbacsai.png',
    name: 'Andras Bacsai',
    title: 'Indie Hacker',
    links: [
      { icon: 'github', link: 'https://github.com/andrasbacsai' },
      { icon: 'twitter', link: 'https://twitter.com/andrasbacsai' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Who we are?
    </template>
    <template #lead>
      The development of Coolify is guided by the following members and our awesome community over Twitter/Discord/Github.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
