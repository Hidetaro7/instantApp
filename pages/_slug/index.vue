<template>
  <main class="main prose max-w-5xl m-auto">
    <div class="py-8">
      <nuxt-link to="/">もどる</nuxt-link>
    </div>
    <!-- <p class="publishedAt">{{ publishedAt }}</p> -->
    <div class="mb-8">
      <div class="text-xl mb-4 font-bold text-gray-500">{{ type }}</div>
      <h1 class="mb-4">{{shape}}</h1>
      <div class="text-sm text-red-700">{{ safety }}</div>
    </div>

    <div class="md:flex mb-8">
      <div class="md:w-80 md:mr-16 flex-shrink-0">
        <img class="m-0 object-cover w-full h-80 rounded-md" :src="image.url" :alt="shape">
        <div class="mt-16">
          <img class="object-cover w-full" :src="product_size.url" alt="">
        </div>
      </div>
      <div class="flex-grow">
        <div class="post" v-html="summary"></div>
        <div class="overflow-scroll">
          <div class="size" v-html="createTable"></div>
        </div>
      </div>
    </div>


  </main>
</template>

<script>
import axios from 'axios'

export default {
  transition: "slide-fade",
  data() {
    return {
      sizeTableDom: []
    }
  },
  computed: {
    createTable () {
      let dom = "<table>";
      this.sizeTableDom.forEach(row => {
        dom+="<tr>"
        row.forEach(cell => {
          dom+="<td>" + cell + "</td>"
        })
        dom+="</tr>"
      })
      dom+="</table>"
      return dom
    }
  },
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://tuqulore.microcms.io/api/v1/instant/${params.slug}`,
      {
        headers: { 'X-API-KEY': 'c1567ee1-ca6e-4d8c-b1c7-0263a1130920' }
      }
    )
    data.sizeTableDom = JSON.parse(data.sizes.replace(/[\u0000-\u0019]+/g,""));
    return data
  }
}
</script>

<style lang="scss" scoped>
.main {
  p {
    @apply text-red-800;
  }
}
</style>
