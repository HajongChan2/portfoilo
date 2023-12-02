<template>
    <div class="size">
      <div class="background-image col-12">
        <div class="TextAnime1">
          <span
            v-for="(t, index) in text"
            :key="index"
            class="item"
            :style="{ animationDelay: index * 100 + 'ms' }"
            v-text="t"
          />
          <br />
          <span
            v-for="(t, index) in text2"
            :key="index"
            class="item"
            :style="{ animationDelay: (index + text.length) * 100 + 'ms' }"
            v-text="t"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        text: '안녕하세요',
        text2: '프론트엔드 개발자 하종찬입니다.',
      };
    },
    mounted() {
      const items = document.querySelectorAll('.item');
      items.forEach((item) => {
        item.addEventListener('animationiteration', () => {
          item.style.animation = 'none';
          void item.offsetWidth;
          item.style.animation = 'text-in 3s cubic-bezier(0.22, 0.15, 0.25, 1.43) 0s backwards infinite';
        });
      });
    },
  };
  </script>
  
<style>
.size{
    width: 100%;
    height: 100%;
}
.background-image {
    background-image: url("../assets/back.png");
    background-size: 100%;
    background-position: center 20%;
    height: 100%;
    position: relative;
    top: 0;
    z-index: -1;
    
}

.background-image::before {
    display: inline-block;
    content: "asd";
    width: 100%;
    height: 100%;
    background-color: #333;
    opacity: 0.4;
}
.TextAnime1{
    position : absolute;
    top : 30%;
    left : 30%;
    text-align: center;
}
@keyframes text-in {
  0% {
    transform: translate(0, -20px);
    opacity: 0;
  }
}
.item {
  display: inline-block;
  min-width: 0.3em;
  font-size: 2rem;
  animation: text-in 3s cubic-bezier(0.22, 0.15, 0.25, 1.43) 0s backwards infinite;
  color: #fff;
}
</style>
  