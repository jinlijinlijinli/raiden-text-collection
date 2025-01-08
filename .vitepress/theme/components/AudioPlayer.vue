<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

// 接收组件的 src 参数
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
});

const audio = ref(null);
const isPlaying = ref(false);

// 播放音频
const startPlayback = () => {
  // 停止其他正在播放的音频
  if (window.currentlyPlaying && window.currentlyPlaying !== audio.value) {
    window.currentlyPlaying.audio.pause();
    window.currentlyPlaying.audio.currentTime = 0;
    window.currentlyPlaying.isPlaying = false;  // 更新按钮状态为播放
  }

  // 播放当前音频
  audio.value.play();
  isPlaying.value = true;
  window.currentlyPlaying = { audio: audio.value, isPlaying: isPlaying.value };

  // 广播当前音频播放状态
  window.dispatchEvent(new CustomEvent("audio-playing", {
    detail: window.currentlyPlaying,
  }));
};

// 取消播放
const stopPlayback = () => {
  audio.value.pause();
  audio.value.currentTime = 0; // 重置音频播放进度
  isPlaying.value = false;
  window.currentlyPlaying = null;

  // 广播当前音频停止状态
  window.dispatchEvent(new CustomEvent("audio-playing", {
    detail: null,
  }));
};

// 播放完成后恢复按钮状态
const handleAudioEnded = () => {
  isPlaying.value = false;
  window.currentlyPlaying = null;

  // 广播当前音频播放完成状态
  window.dispatchEvent(new CustomEvent("audio-playing", {
    detail: null,
  }));
};

onMounted(() => {
  audio.value.addEventListener('ended', handleAudioEnded);

  // 监听其他音频播放状态的变化
  window.addEventListener("audio-playing", (e) => {
    if (e.detail && e.detail.audio !== audio.value) {
      // 如果其他音频正在播放，当前按钮应该变成播放状态
      isPlaying.value = false;
    }
  });
});

onBeforeUnmount(() => {
  audio.value.removeEventListener('ended', handleAudioEnded);
});
</script>

<template>
  <div class="audio-player">
    <!-- 隐藏原生 audio 元素 -->
    <audio ref="audio" :src="src" preload="auto" />

    <div class="controls">
      <!-- 播放按钮 -->
      <button class="play-btn" @click="startPlayback" v-if="!isPlaying">
        <svg
          t="1735474823039"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="874"
          width="16"
          height="16"
        >
          <path
            d="M780.8 475.733333L285.866667 168.533333c-27.733333-17.066667-64 4.266667-64 36.266667v614.4c0 32 36.266667 53.333333 64 36.266667l492.8-307.2c29.866667-14.933333 29.866667-57.6 2.133333-72.533334z"
            fill="#ffffff"
            p-id="875"
          ></path>
        </svg>
      </button>
      <!-- 取消播放按钮 -->
      <button class="stop-btn" @click="stopPlayback" v-if="isPlaying">
        <svg
          t="1735474861059"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1382"
          width="16"
          height="16"
        >
          <path
            d="M256 192h512c35.392 0 64 28.608 64 64v512c0 35.392-28.608 64-64 64H256c-35.392 0-64-28.608-64-64V256c0-35.392 28.608-64 64-64z"
            fill="#ffffff"
            p-id="1383"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
audio {
  display: none;
}

.play-btn,
.stop-btn {
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  background-color: #967c68;
  color: white;
  border: none;
  border-radius: 20px;
  margin: 5px;
}
</style>
