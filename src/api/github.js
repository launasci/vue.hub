import axios from 'axios'

axios.defaults.baseURL = 'https://api.github.com'

export const api = {
  searchUsers(user) {
    return axios.get(`/search/users?q=${user}`).then(response => response.data)
  },
  async listRepos(user, page) {
    if (!page) {
      page = 1
    }
    const response = await axios.get(`/users/${user}/repos?page=${page}`)
    return response.data
  }
}
