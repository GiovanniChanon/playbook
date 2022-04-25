const issue = {
    title:"Problema al instalar Node",
    repositoryNameAssociated:"Curso de introducción NodeJS",
    status:"Open",
    numberOfComments:17,
    labels:["Bug"],
    author:"GiovanniLopez",
    dateCreated:"17/04/2022",
    lastUpdated:"19/04/2022",
    getTitleAndAuthor: function(){
        return `Title: ${this.title}\nAuthor: ${this.author}`
      },
    getGeneralInfo: function(){
        return `This issue ${this.title} was created by ${this.author} and the status is ${this.status}`
      }
}

console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())