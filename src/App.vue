<template>
  <v-app>
    <v-app-bar
      app
      color="grey darken-4"
      dark
    >
      <v-app-bar-title>VueHub</v-app-bar-title>
      <v-spacer />
      <v-btn
        href="https://github.com/launasci/vue.hub"
        target="_blank"
        text
      >
        <v-icon>mdi-github</v-icon>
      </v-btn>

    </v-app-bar>
    <v-main>
      <search-box @user-selected="userSelected"/>
      <list-repos :user="user" @selected-repo="selectedRepoUrl" />
      <list-content :url="repoUrl"/>
      
      
    </v-main>
  </v-app>
</template>

<script>
import SearchBox from '@/components/search-box';
import ListRepos from '@/components/list-repos';
import ListContent from '@/components/list-content';

export default {
  name: 'App',
  components: {
    SearchBox,
    ListRepos,
    ListContent,
  },

  data (){
    return{
      user: null,
      repoUrl: null,
    }
  },
  methods: {
    userSelected(user){
      this.user = user
    },
    selectedRepoUrl(url){
      this.repoUrl = url
    }
  },
  watch:{
  }
};
</script>
