<template>
  <v-row>
    <v-col cols="9" offset="1">
      <v-card class="mx-auto">

        <v-list subheader two-line>

          <v-list-item v-for="folder in folders" :key="folder.name" @click="getContent(url, folder.path)">
            <v-list-item-avatar>
              <v-icon class="grey lighten-1" dark>
                mdi-folder
              </v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-text="folder.name"></v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn icon>
                <v-icon color="grey lighten-1">mdi-information</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>

          <!-- <v-divider inset></v-divider> -->

          <!-- <v-subheader inset>Files</v-subheader> -->

          <v-list-item v-for="file in files" :key="file.name">
            <v-list-item-avatar>
              <v-icon color="grey" dark>mdi-file-code</v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-text="file.name"></v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn icon>
                <v-icon color="grey lighten-1">mdi-information</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>


<script>
import { api } from '@/api/github'
export default {
  props: {
    url: String
  },
  data: () => ({
    files: [],
    folders: [],
  }),
  methods: {
    async getContent(baseUrl, path) {
      this.files = []
      this.folders = []
      const content = await api.listContent(baseUrl, path)
      for (const item of content) {
        const { name, path } = item
        if (item.type === 'dir') {
          this.folders.push({ name, path })
        }
        else {
          this.files.push({ name, path })
        }
      }
    }
  },
  watch: {
    url(baseUrl, path) {
      this.getContent(baseUrl, path)
    }
  }
}
</script>