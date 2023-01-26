<template>
  <v-treeview v-model="tree" :open="initiallyOpen" :items="items" activatable item-key="name" open-on-click>
    <template v-slot:prepend="{ item, open }">
      <v-icon v-if="!item.file" @click="subfolderOpen(item)">
        {{ open? 'mdi-folder-open': 'mdi-folder-open' }}
      </v-icon>
      <v-icon v-if="item.file">
        {{ files[item.file] }}
      </v-icon>
    </template>
    <template v-slot:label="{ item }">
      <div @click="subfolderOpen(item)">
        {{ item.name }}
      </div>
    </template>
  </v-treeview>
</template>

<script>

import { api } from '@/api/github';
export default {
  props: {
    repoInfos: {
      type: Object
    }
  },
  data: () => ({
    initiallyOpen: ['public'],
    tree: [],
    items: [],
    files: {
      html: 'mdi-language-html5',
      js: 'mdi-nodejs',
      json: 'mdi-code-json',
      md: 'mdi-language-markdown',
      pdf: 'mdi-file-pdf',
      png: 'mdi-file-image',
      txt: 'mdi-file-document-outline',
      xls: 'mdi-file-excel',
    },
  }),
  watch: {
    repoInfos(d) {
      this.recursiveFillDirectory(d.user, d.repo, '', this.items)
    }
  },
  methods: {
    async getData(user, repo, path) {
      const content = await api.listContent(user, repo, path)
      return content
    },
    async fillDirectory(user, repo, path = '', folder) {
      let data = await this.getData(user, repo, path)
      const formatedData = this.formatFiles(data)
      folder.splice(0)
      folder.push(...formatedData)
      return folder
    },
    async recursiveFillDirectory(user, repo, path, folder) {
      const parent = await this.fillDirectory(user, repo, path, folder)
      for (let file of parent) {
        if (file.type === 'dir') {
          this.fillDirectory(user, repo, file.path, file["children"])
        }
      }
    },
    formatFiles(directoryContent = []) {
      const files = [], folders = []
      for (const item of directoryContent) {
        if (item.type === 'file') {
          const f = item.name.split(".")
          const fileType = f[f.length - 1]
          const formatedItem = { name: item.name, path: item.path, file: fileType, type: item.type }
          files.push(formatedItem)
        }
        else {
          folders.push({ name: item.name, path: item.path, type: item.type, children: [] })
        }
      }
      return [...files, ...folders]
    },
    subfolderOpen(folder) {
      const r = this.repoInfos
      this.recursiveFillDirectory(r.user, r.repo, folder.path, folder.children)
    }
  }
}
</script>