<template>
  <div class="app">
    <AppHeader />
    <div class="container md:pt-8">
      <Nuxt />
    </div>
  </div>

</template>

<script>
import AppHeader from "../components/AppHeader";
export default {
  components: {
    AppHeader
  },
  mounted() {
    this.$store.dispatch("getItems").then(item => {
      console.log(this.$store.state.items)
    })
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
