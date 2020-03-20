class GithubAPI {
    constructor() {
        this.client_id = '84f04ed22f1f23760009',
            this.client_secret = '7f18c4fca6795da582d13f9e18637d51da8420c2',
            this.repos_count = 5,
            this.repos_sort = 'created:asc'
    }
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }
    }
}