<template>
  <div class="card-view animate-zoom-in animate-duration-600">
    <div class="flex text-center">
      <Icon name="i-mdi-chat-outline" class="text-xl" />
      <div class="flex-1">
        {{ sentence }}
      </div>
      <Icon name="i-mdi-chevron-double-right" class="animate-arrow text-2xl" />
      <!-- <button class="animate-arrow i-mdi-chevron-double-right text-2xl" /> -->
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'

const sentence = ref('书山有路勤为径，学海无涯苦作舟。')

onMounted(() => {
  fetch('https://v1.hitokoto.cn?c=i')
    .then((res) => res.json())
    .then((data) => (sentence.value = data.hitokoto))
})
</script>

<style scoped>
.animate-arrow {
  animation: 1s passing infinite;
}

/* 左 -> 右 闪的特效 */
@keyframes passing {
  0% {
    transform: translateX(-50%);
    opacity: 0;
  }
  50% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(50%);
    opacity: 0;
  }
}
</style>
