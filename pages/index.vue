<template></template>

<script lang="ts" setup>
import { useUserStore } from '../stores'

const nuxtApp = useNuxtApp()
const userStore = useUserStore()

userStore.fetchUserData()

console.log('formatDate', nuxtApp.$formatDate())
</script>

<style lang="scss" scoped>
</style>
