<template>
  <div class="flex flex-grow">
    <div class="relative m-auto w-10/12">
      <input @input="checkSearchRecommend" ref="inputKeyword" placeholder="商品を検索" type="text" class=" h-10 form-input w-full bg-transparent border-gray-500 text-white mt-0">
      <div v-if="results.length > 0" class="rounded-b-md absolute w-full top-10 bg-gray-800 border-gray-500 border border-t-0 overflow-hidden">
        <nuxt-link @click.native.prevent="clickLink" :to="'/' + item.id" class="block p-4 text-white hover:bg-gray-700" v-for="(item, index) in results" :key="index">{{item.shape}}</nuxt-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      results: []
    }
  },
  methods: {
    clickLink() {
      this.results = [];
      this.$refs.inputKeyword.value = "";
    },
    checkSearchRecommend (e) {
      this.results = this.$store.state.items.filter(item => {
        return item.shape.indexOf(e.target.value) >= 0;
      })
    }
  }
}
</script>

<style>

</style>
