class GitHub{
    constructor(){
        this.client_ID = 'e76693f6d68bbf56f817';
        this.client_secret = '831eaa2f9787aa38a2577a27c5cdb977365ccdf6';
        this.repos_count = 10; //10 viimast näitab
        this.repos_sort = 'created: asc'; //värskem repositoorium tuleb välja, sorteerib nö
        this.user = 'kseniagu13';
        this.apiUrl = 'https://api.github.com/users/';
    }
    //meetod async, kutsume välja URL
    async getUserData(){
      let urlProfile = `${this.apiUrl}${this.user}?client_id=${this.client_ID}&client_secret=${this.client_secret}`;
      let urlRepos = `${this.apiUrl}${this.user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_ID}&client_secret=${this.client_secret}`;

      const profileResponse = await fetch(urlProfile); //too vastuse tagasi
      const reposResponse = await fetch(urlRepos); //const tähendab, et püsiv, ei saa muuta

      const profile = await profileResponse.json(); //muudame json formaadiks
      const repos = await reposResponse.json();

      return {
          profile,
          repos
      }


    }
}