<template>
  <div
    class="banner-fade-down absolute bottom-0 left-0 right-0 h-screen text-center text-white"
    :style="coverStyle"
  >
    <div class="absolute inset-x-0 mt-[43vh] text-center space-y-3">
      <h1 class="animate-zoom-in text-4xl font-bold lg:text-5xl">摸鱼高手十一</h1>
      <div class="text-lg lg:text-xl">
        {{ typer.output }}
        <span class="animate-ping"> | </span>
      </div>
    </div>
    <!-- 向下滚动 -->
    <div class="absolute bottom-0 w-full cursor-pointer" @click="scrollDown">
      <span class="i-ep:arrow-down-bold inline-block animate-bounce text-2xl text-white" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, reactive } from 'vue'
import EasyTyper from 'easy-typer-js'

// 打字机特效配置
const typer = reactive({
  output: '',
  isEnd: false, // 全局控制是否终止
  speed: 300, // 打字速度
  singleBack: false, // 单次的回滚
  sleep: 0, // 完整输出一句话后, 睡眠一定时候后触发回滚事件
  type: 'normal', // rollback, normal
  backSpeed: 80, // 回滚速度
  sentencePause: false // 运行完毕后, 句子是否暂停显示
})
onMounted(() => {
  typewriter()
})
// 打字机特效
const typewriter = () => {
  fetch('https://v1.hitokoto.cn?c=i')
    .then((res) => res.json())
    .then(
      (data) =>
        new EasyTyper(
          typer,
          data.hitokoto,
          () => {},
          () => {}
        )
    )
    .catch(
      () =>
        new EasyTyper(
          typer,
          '宠辱不惊，看庭前花开花落；去留无意，望天上云卷云舒。',
          () => {},
          () => {}
        )
    )
}
const scrollDown = () => {
  window.scrollTo({
    behavior: 'smooth',
    top: document.documentElement.clientHeight
  })
}

// 根据后端配置动态获取封面
const coverStyle = computed(() => {
  // pageList.value.find(e => e.label === 'home')
  const page = false
  return page
    ? `background: url('') center center / cover no-repeat;`
    : 'background: grey center center / cover no-repeat;'
})
</script>
