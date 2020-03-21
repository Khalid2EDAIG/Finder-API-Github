class UserInterfaces {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    //Method display profile
    displayProfile(user) {
        this.profile.innerHTML = `
        <div class="card card-body md-3">
        <div class="row">
            <div class="col-md-3">
                <img class="img-thumbnail" src="${user.avatar_url}" alt="">
                <span class="">${user.name}</span>
                <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4 mt-2">Show Profile</a>
            </div>
            <div class="col-md-9">
                <span class="badge badge-primary">Public Repositories : ${user.public_repos}</span>
                <span class="badge badge-secondary">Public Gists : ${user.public_gists}</span>
                <span class="badge badge-success">Public Followers : ${user.followers}</span>
                <span class="badge badge-info">Public Following : ${user.following}</span>
                <br>
                <div class="mt-2">
                    <ul class="list-group">
                        <li class="list-group-item">User Company : ${user.company}</li>
                        <li class="list-group-item">User Blog : ${user.blog}</li>
                        <li class="list-group-item">User Location : ${user.location}</li>
                        <li class="list-group-item">Member Since : ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repositories</h3>
        <div class="" id="repos"></div>
    </div>
        `
    }
    //Method Display repository
    displayRepos(repos) {
        let output = ''
        repos.forEach(repo => {
            output += `
            <div class="card card-body mb-2">
            <div class="row">
                <div class="col-md-6">
                    <a href="${repo.html_url}" target="_blank">${repo.html_url} </a>
                </div>
                <div class="col-md-6">
                    <span class="badge badge-primary">Stars : ${repo.stargazers_count}</span>
                    <span class="badge badge-secondary">Watchers : ${repo.watchers_count}</span>
                    <span class="badge badge-success">Fork : ${repo.forks_count}</span>
                </div>
            </div>
        </div>
            `
        })
        //output repository
        document.getElementById('repos').innerHTML = output
    }
    //Display alert msg
    showAlert(message, className) {
        //Clear any remaining alert
        this.clearAlert()
        //Creat div
        const div = document.createElement('div')
        //add class
        div.className = className
        //Add text
        div.appendChild(document.createTextNode(message))
        //get parent
        const container = document.querySelector('searchContainer')
        //get search box
        const search = document.querySelector('.search')
        container.insertBefore(div, search)
        //timeout after 2sec
        setTimeout(() => {
            this.clearAlert()
        }, 2000)

    }
    //Clear alert msg
    clearAlert() {
        const currentAlert = document.querySelector('.alert')
        if (currentAlert) {
            currentAlert.remove()
        }
    }
    //clear profile
    clearProfile() {
        this.profile.innerHTML = ''
    }
}