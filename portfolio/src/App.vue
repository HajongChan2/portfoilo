<template>
  <div v-haeder-scroll class="main_container">
    <header class="header col-12" :style="headerBackground" @click="headerClicked">
      <my-header :headerIndex="headerIndex" @some-event="handleChildEvent"/>
    </header>
    <div v-for="(section, index) in sections" :key="index" class="full-height"
      :class="{ active: index === currentSection, 'fade-in': index === currentSection }"
      :style="{ backgroundColor: section.backgroundColor }">
      
      <component :is="section.content" />
    </div>
  </div>
</template>


<script>
import MyProfile from './components/MyProfile.vue';
import MyHeader from './components/MyHeader.vue';
import Mypage from './components/mainPage.vue';
import MySkils from './components/MySkils.vue';
import ContentScroll from '@/js/ContentScroll.js'
import MyProject from '@/components/MyProject.vue';
import { markRaw } from 'vue';

export default {
  components: {
    MyHeader,
    ContentScroll,
  },
  data() {
    return {
      sections: [
        { content: markRaw(Mypage), backgroundColor: 'transparent' },
        { content: markRaw(MyProfile), backgroundColor: '#3498db' },
        { content: markRaw(MySkils), backgroundColor: '#2c3e50' },
        { content: markRaw(MyProject), backgroundColor: '#7f8c8d' },
      ],
      currentSection: 0,
      headerIndex : 0,
      headerBackground: { 'background-color': 'transparent'},
      bodyMargin : {'margin-top' : '100px'}
    };
  },

  directives: {
    'haeder-scroll': {
      mounted(el, binding) {
        window.addEventListener('scroll', binding.value);
      },
      unmounted(el, binding) {
        window.removeEventListener('scroll', binding.value);
      },
    },
  },

  methods: {
    handleScroll() {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      const newIndex = Math.floor((scrollY + 70) / windowHeight);
      if (newIndex !== this.currentSection && newIndex < this.sections.length) {
        this.currentSection = newIndex;
        this.headerIndex = newIndex;
      }
    },
    haederScroll() {
      const scrollY = window.scrollY;
      this.headerBackground = scrollY >= 10 ? {'background-color': '#fff'} : {'background-color': 'transparent'};
      
    },
    headerClicked(e) {
      const textContent = e.target.innerText;
      const offsetTop = ContentScroll(textContent);

      window.scrollTo({
        top: offsetTop - 70,
        behavior: 'smooth',
      });
    },
    handleChildEvent(index) {
      this.headerIndex = index;
    },
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('scroll', this.haederScroll);
    this.handleChildEvent;
    
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('scroll', this.haederScroll);
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@100;200;300;400;500;600;700;800;900&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');

* {
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Lora', serif;
  color: #333;
  list-style: none;
  text-decoration: none !important;
}
.main_container{
  max-width: 1920px;
}
.header {
  position: fixed;
  z-index: 1;
  top: 0;
  height: 60px;
  transition: .3s;
}

.full-height {
  height: 130vh;
  transition: background-color 0.3s;
  opacity: 0.2; 
  overflow: hidden;
}

.fade-in {
  opacity: 1; 
  transition: opacity 0.3s ease-in-out;
}

@media (max-width: 820px) {
  .full-height{
    height: 120vh;
  }
}

</style>
