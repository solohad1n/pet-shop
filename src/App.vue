<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <footer>Footer</footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
footer {
  padding: 100px;
  text-align: center;
}
</style>
