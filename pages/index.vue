<template>
  <HomeBanner></HomeBanner>
  <div class="mx-auto mb-8 max-w-[1230px] flex flex-col justify-center px-3" style="margin-top: calc(100vh + 30px)">
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-12 lg:col-span-9 space-y-5">
        <HomeTalkingCarousel></HomeTalkingCarousel>
        <div class="space-y-5">
          <HomeArticleCard></HomeArticleCard>
        </div>
      </div>
      <div class="col-span-0 lg:col-span-3">
      <div class="sticky top-5 space-y-5">
        <HomeAnnouncement></HomeAnnouncement>
      </div>
    </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '../stores'

const nuxtApp = useNuxtApp()
const userStore = useUserStore()

userStore.fetchUserData()

console.log('formatDate', nuxtApp.$formatDate())
</script>

<style lang="scss" scoped>
</style>
