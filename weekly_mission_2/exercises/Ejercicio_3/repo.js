class repo{
    constructor(name,author,language,numberOfCommits,stars,forks,issues_open,issues_close){
        this.name = name
        this.author = author
        this.language = language
        this.numberOfCommits = numberOfCommits
        this.stars = stars
        this.forks = forks
        this.issues_open = issues_open
        this.issues_close = issues_close
    }
    getTotalIssues(){
        console.log(this.issues_open + this.issues_close)
      }
      getGeneralInfo(){
        console.log(`This repository ${this.name} was created by ${this.author}`)
      }
}