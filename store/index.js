import axios from 'axios'

export const state = () => ({
  items: []
})

export const mutations = {
  setItems(state, payload) {
    state.items = payload;
  }
}

export const actions = {
  getItems(context) {
    console.log(context)
    return new Promise(async (resolve, result) => {
      const data = await axios.get(
        `https://tuqulore.microcms.io/api/v1/instant/`,
        {
          headers: { 'X-API-KEY': 'c1567ee1-ca6e-4d8c-b1c7-0263a1130920' }
        }
      )
      console.log(data.data.contents)
      context.commit("setItems", data.data.contents)
      resolve (data.data.contents);
    })

  }
}
