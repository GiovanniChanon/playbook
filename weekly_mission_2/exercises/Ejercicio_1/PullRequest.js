const PullRequest = {
    title:"Update main.js",
    author:"GiovanniLopez",
    branchName:"main",
    dateCreated:"12/04/2022",
    status:"Closed",
    repositoryNameAssociated:"Curso de introducción NodeJS",
    getStatus: function(){
        return this.status
      },
    getTitleAndAuthor: function(){
        return `Title: ${this.title}\nAuthor: ${this.author}`
      }
}

console.log("Status: "+PullRequest.getStatus())
console.log(PullRequest.getTitleAndAuthor())