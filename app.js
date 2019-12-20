const gitHub = new GitHub; //objekt on loodud
const ui = new UI;

gitHub.getUserData() //kui saad vastuse kätte, siis (then teab, et see on async meetod)
.then (data => {
    console.log(data.profile);

    ui.showProfile(data.profile);
    ui.showRepos(data.repos);
});

