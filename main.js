const github = new GithubAPI()
const ui = new UserInterfaces()
//Search Input
const searchInput = document.getElementById('searchInput');

//search input event listener

searchInput.addEventListener('keyup', e => {
    //get input text
    const userText = e.target.value
    if (userText != '') {
        github.getUser(userText).then(data => {
            if (data.profile.message === 'Not Found') {
                console.log('User not found')
            } else {
                //show profile
                ui.displayProfile(data.profile)
                //show profile
                ui.displayRepos(data.repos)
            }
        })
    } else {
        //clear profile
        ui.clearProfile()
    }
})