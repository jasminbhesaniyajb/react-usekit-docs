<template>
  <DefaultTheme.Layout>
    <template #home-features-after>
      <div class="team-section">
        <h2 class="team-heading">🙌 Credits</h2>
        <VPTeamMembers size="small" :members="members" />
      </div>
    </template>
  </DefaultTheme.Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/jasminbhesaniyajb.png',
    name: 'Jasmin Bhesaniya',
    title: 'Sr. Frontend Developer',
    links: [
      { icon: 'github', link: 'https://github.com/jasminbhesaniyajb' },
    ]
  },
  {
    avatar: 'https://github.com/brijeshkumaryadav16.png',
    name: 'Brijesh Yadav',
    title: 'Sr. Frontend Developer',
    links: [
      { icon: 'github', link: 'https://github.com/brijeshkumaryadav16' }
    ]
  }
]
</script>

<style scoped>
.team-section {
  margin-top: 3rem;
  padding: 2rem;
  /* background-color: var(--vp-c-bg-soft); */
  border-radius: 8px;
  text-align: center;
}
.team-heading {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}
</style>
