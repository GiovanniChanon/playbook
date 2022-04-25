class user{
    constructor(username,email,password,dateCreated,dateBirth,phoneNumber,gender){
        this.username = username
        this.email = email
        this.password = password
        this.dateCreated = dateCreated
        this.dateBirth = dateBirth
        this.phoneNumber = phoneNumber
        this.gender = gender
    }
    getEmail(){
        console.log(this.email)
    }
}

class post{
    constructor(user,description,photos,like,love,haha,wow,sad,angry,comments,date){
        this.user = user
        this.description = description
        this.photos = photos
        this.like = like
        this.love = love
        this.haha =haha
        this.wow = wow
        this.sad = sad
        this.angry = angry
        this.comments = comments
        this.date = date
    }

    getReactions(){
        console.log(this.like+this.love+this.haha+this.wow+this.sad+this.angry)
    }
}

class biography{
    constructor(username,relationshipStatus,friendsNumber,residence,dateBirth,jobs,academicFormation,groups,likes){
        this.username = username
        this.relationshipStatus = relationshipStatus
        this.friendsNumber = friendsNumber
        this.residence = residence
        this.dateBirth = dateBirth
        this.jobs = jobs
        this.academicFormation = academicFormation
        this.groups = groups
        this.likes = likes
    }

    getGeneralInfo(){
        console.log(`Name: ${this.username}\nResidence: ${this.residence}\nDate of Birth: ${this.dateBirth}`)
    }
}