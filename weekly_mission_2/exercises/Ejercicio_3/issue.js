class issue{
    constructor(title,repositoryNameAssociated,status,numberOfComments,labels,author,dateCreated,lasUpdated){
        this.title = title
        this.repositoryNameAssociated = repositoryNameAssociated
        this.status = status 
        this.numberOfComments = numberOfComments
        this.labels = labels
        this.author = author
        this.dateCreated = dateCreated
        this.lasUpdated = lasUpdated
    }
    getTitleAndAuthor(){
        console(`Title: ${this.title}\nAuthor: ${this.author}`)
      }
    getGeneralInfo(){
        console.log(`This issue ${this.title} was created by ${this.author} and the status is ${this.status}`)
      }
}