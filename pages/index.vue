<template>
  <div class="container mt-8">
    <ul class="md:grid grid-cols-3 gap-3 gap-y-12">
      <li v-for="content in contents" :key="content.id">
        <nuxt-link :to="`/${content.id}`">
          <div class="mb-12 md:mb-0 hover:opacity-75 text-center">
            <img class="object-contain md:h-52 rounded-md m-auto border border-gray-300 w-full" :src="content.image.url" :alt="content.shape">
            <div class="md:ml-0 mt-4">
              <div class="text-lg font-bold text-gray-400">{{ content.type }}</div>
              <div class="text-lg md:text-lg font-bold text-gray-900">{{ content.shape }}</div>

            </div>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>

</template>

<script>
// https://blog.microcms.io/microcms-nuxt-jamstack-blog/
import axios from 'axios'
export default {
  data() {
    return {
      contents: []
    }
  },
  created() {
    this.$store.dispatch("getItems").then(item => {
      this.contents = item;
    })
  }
}
</script>
