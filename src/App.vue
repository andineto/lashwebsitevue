<template>
  <div class="flex flex-col items-center w-screen bg-[#32302F] h-fit max-w-full" >
    <div class="w-screen max-w-full h-fit flex flex-col justify-start lg:w-[1440px] gap-1" style="scroll-behavior: smooth">
      <Header class="sticky top-0 w-full" />
      <Content class="overflow-hidden w-full"/>
      <Footer class="overflow-hidden w-full" />
    </div>
  </div>
  </template>
  
  <script>
  import Header from './components/Header.vue'
  import Content from './components/Content.vue'
import Footer from './components/Footer.vue';
  
  export default {
    name: 'App',
    components: {
      Header,
      Content,
      Footer,
    }
  }
  </script>
  
  