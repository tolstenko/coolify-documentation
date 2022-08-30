---
layout: page
head:
  - - meta
    - name: description
      content: coolLabs - Who we are?
  - - meta
    - name: keywords
      content: coollabs coolify who we are
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - meta
    - name: twitter:site
      content: '@andrasbacsai'
  - - meta
    - name: twitter:title
      content: coolLabs
  - - meta
    - name: twitter:description
      content: Control your digital footprint
  - - meta
    - name: twitter:image
      content: https://cdn.coollabs.io/assets/coollabs/og-image-documentation.png
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://coollabs.io
  - - meta
    - property: og:title
      content: coolLabs
  - - meta
    - property: og:description
      content: Control your digital footprint
  - - meta
    - property: og:site_name
      content: coolLabs
  - - meta
    - property: og:image
      content: https://cdn.coollabs.io/assets/coollabs/og-image-documentation.png
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
