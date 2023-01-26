<template>
  <div>
    <v-row>
      <v-col cols="9" offset="1" class="d-flex">
        <v-avatar class="ma-2" v-if='user'>
          <img
            :src="avatar"
          >
        </v-avatar>
        <v-autocomplete label="Procure por um usuario" v-model='user' hide-no-data :items="items" 
        @input.native="event => debounceInput(event.target.value)" color='black'
        :loading="itemsLoading"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { api } from '@/api/github';
import debounce from 'lodash/debounce'

export default {
  data() {
    return {
      items: null,
      itemsLoading: false,
      user: '',
      avatar: null
    }
  },
  
  watch:{
    user(){
        this.$emit('user-selected', this.user)
      }
  },

  methods: {
    debounceInput: debounce(async function (searchTerm) {
      this.itemsLoading = true
      const { items } = await api.searchUsers(searchTerm)
      if (items) {
        this.items = items.map(item => item.login)
        this.avatar = items.map(item => item.avatar_url)
      }
      this.itemsLoading = false
    }, 500)
  }
}
</script>