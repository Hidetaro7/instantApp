<template>
  <div class="app">
    <AppHeader />
    <div class="container pt-16">
      <Nuxt />
    </div>
  </div>

</template>

<script>
import AppHeader from "../components/AppHeader";
export default {
  components: {
    AppHeader
  }
}
</script>

<style>
.slide-fade-enter-active {
  transition: all .5s ;
}
.slide-fade-leave-active {
  transition: all .5s ease;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(30px);
  opacity: 0;
}
</style>
