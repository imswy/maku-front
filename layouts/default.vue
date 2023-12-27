<template>
  <div class="h-full w-full flex flex-col">
    <AppHeader></AppHeader>
    <div class="flex flex-1 flex-col">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
// const handleNavigateTo = (path: string) => {
//   navigateTo(path)
// }
</script>

<style></style>
