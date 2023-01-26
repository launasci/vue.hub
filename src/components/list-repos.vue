<template>
  <div>
    <v-row>
      <v-col cols="9" offset="1">
              <v-card class='mb-4 card' elevation="0" v-for="repo in repos" :key="repo.id">
                  <v-card-title class='justify-space-between' @click="$emit('selected-repo', repo.url)">{{ repo.name }}   
                    <v-chip outlined>
                      {{ repo.visibility }} 
                    </v-chip>
                  </v-card-title>
                  <v-chip small outlined class="mb-1 ml-4 mt-n3" v-if="repo.language">
                    {{repo.language }} 
                  </v-chip>
              </v-card>
      </v-col>
    </v-row>
</div>
</template>

<script>
import { api } from '@/api/github';

export default {

props:{
  user: String
}, 

data() {
  return {
    repos: [],
  }
},

watch:{
  user(user){
    this.getRepos(user)
  }
},
methods:{
  async getRepos(user){ 
    const repos = await api.listRepos(user)
    this.repos = repos
  },
}
}
</script>

<style>
.card {
  border-bottom: thin solid rgba(0, 0, 0, 0.12) !important;
  border-radius: 0 !important;
}
</style>