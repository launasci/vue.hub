<template>
  <v-container>
    <list-repos :user="user" @selected-repo="selectedRepo" />
    <list-tree />
  </v-container>
</template>

<script>

import ListRepos from '@/components/list-repos';
import ListTree from '@/components/list-tree';
export default {
  components: {
    ListRepos,
    ListTree,
  },
  props: {
    user: {
      type: String
    }
  },
  data() {
    return {
      selectedRepoInfos: null
    }
  },
  methods: {
    selectedRepo(infos) {
      this.selectedRepoInfos = infos
    }
  }
}
</script>