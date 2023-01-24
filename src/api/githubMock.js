export const api = {
  searchUsers(user) {
    user || 0
    return {
      "total_count": 1,
      "incomplete_results": false,
      "items": [
        {
          "login": "Ronald-ps",
          "id": 104438755,
          "node_id": "U_kgDOBjmb4w",
          "avatar_url": "https://avatars.githubusercontent.com/u/104438755?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/Ronald-ps",
          "html_url": "https://github.com/Ronald-ps",
          "followers_url": "https://api.github.com/users/Ronald-ps/followers",
          "following_url": "https://api.github.com/users/Ronald-ps/following{/other_user}",
          "gists_url": "https://api.github.com/users/Ronald-ps/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/Ronald-ps/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/Ronald-ps/subscriptions",
          "organizations_url": "https://api.github.com/users/Ronald-ps/orgs",
          "repos_url": "https://api.github.com/users/Ronald-ps/repos",
          "events_url": "https://api.github.com/users/Ronald-ps/events{/privacy}",
          "received_events_url": "https://api.github.com/users/Ronald-ps/received_events",
          "type": "User",
          "site_admin": false,
          "score": 1.0
        },
        {
          "login": "Ronald-ps-2",
          "id": 104438755,
          "node_id": "U_kgDOBjmb4w",
          "avatar_url": "https://avatars.githubusercontent.com/u/104438755?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/Ronald-ps",
          "html_url": "https://github.com/Ronald-ps",
          "followers_url": "https://api.github.com/users/Ronald-ps/followers",
          "following_url": "https://api.github.com/users/Ronald-ps/following{/other_user}",
          "gists_url": "https://api.github.com/users/Ronald-ps/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/Ronald-ps/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/Ronald-ps/subscriptions",
          "organizations_url": "https://api.github.com/users/Ronald-ps/orgs",
          "repos_url": "https://api.github.com/users/Ronald-ps/repos",
          "events_url": "https://api.github.com/users/Ronald-ps/events{/privacy}",
          "received_events_url": "https://api.github.com/users/Ronald-ps/received_events",
          "type": "User",
          "site_admin": false,
          "score": 1.0
        }
      ]
    }
  }/* ,
  async listRepos(user, page) {
    if (!page) {
      page = 1
    }
    const response = await axios.get(`/users/${user}/repos?page=${page}`)
    return response.data
  } */
}
