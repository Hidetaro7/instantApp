<template>
  <div class="container">
    <ul class="">
      <li v-for="content in contents" :key="content.id">
        <nuxt-link :to="`/${content.id}`">
          <div class="flex items-center hover:opacity-75">
            <img class="object-cover w-72 h-96 rounded-md" :src="content.image.url" :alt="content.shape">
            <div class="ml-8">
              <div class="text-xl font-bold text-gray-400">{{ content.type }}</div>
              <div class="text-4xl font-bold text-gray-900">{{ content.shape }}</div>

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
    console.log(data)
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
