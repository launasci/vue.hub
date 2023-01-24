<template>
  <div>
    <v-autocomplete label="Pesquise" :items="items" @input.native="event => getItems(event.target.value)" :loading="itemsLoading"/>
  </div>
</template>

<script>
import { api } from '@/api/githubMock';

export default {
  props: {
    typeSearch: {
      type: String,
      default: "user",
      validator(value) {
        return ["user", "repo"].includes(value)
      }
    }
  },
  data() {
    return {
      items: null,
      itemsLoading: false
    }
  },
  methods: {
    async getItems(searchTerm) {
      this.itemsLoading = true
      const search = {
        "user": api.searchUsers,
      }
      const { items } = await search[this.typeSearch](searchTerm)
      console.log(items)
      if (items) {
        this.items = items.map(item => item.login)
      }
      this.itemsLoading = false
    }
  }
}
</script>
