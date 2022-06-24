<template>
  <div id="app">
    <Header/>
    <router-view/>
    <footer>Footer</footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
export default {
    components: { Header }
}
</script>

<style lang="scss">

footer{
  padding: 100px;
  text-align: center;
}
</style>
