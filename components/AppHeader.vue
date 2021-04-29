<template>
  <div class="h-16 shadow-md bg-gray-800 ">
    <div class="container flex justify-between items-center h-full text-gray-600">
      <div class="font-bold text-xl text-white">
        <nuxt-link to="/">Instant</nuxt-link>
      </div>

      <Search />

      <div class="flex-shrink-0">
        <nuxt-link to="/contact/" class="button text-sm button-skelton border-gray-500 text-white hover:bg-gray-50 hover:bg-opacity-10">お問い合わせ</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
