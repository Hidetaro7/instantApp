<template>
  <div class="container mt-8">
    <ul class="">
      <li v-for="content in contents" :key="content.id">
        <nuxt-link :to="`/${content.id}`">
          <div class="md:flex items-center hover:opacity-75">
            <img class="object-cover md:w-72 md:h-96 rounded-md" :src="content.image.url" :alt="content.shape">
            <div class="md:ml-8 mt-4">
              <div class="text-xl font-bold text-gray-400">{{ content.type }}</div>
              <div class="text-3xl md:text-4xl font-bold text-gray-900">{{ content.shape }}</div>

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
  async asyncData() {
    const { data } = await axios.get(
      `https://tuqulore.microcms.io/api/v1/instant/`,
      {
        headers: { 'X-API-KEY': 'c1567ee1-ca6e-4d8c-b1c7-0263a1130920' }
      }
    )
    return data
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/


</style>
