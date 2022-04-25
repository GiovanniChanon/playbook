const user = {
    username: "Gio Lopez",
    email: "gio@gmail.com",
    password: "asdasdasd",
    dateCreated: "02/05/2011",
    dateBirth: "01/10/1997",
    phoneNumber: 7444444,
    gender:"Hombre",
    getEmail: function(){
        return this.email
    }
}

console.log(user.getEmail())

const post = {
    user: "Gio Lopez",
    description: "",
    photos: [],
    like:10,
    love:0,
    haha: 3,
    wow: 0,
    sad: 1,
    angry: 0,
    comments:15,
    date: "18/04/2022",
    getReactions: function(){
        return this.like+this.love+this.haha+this.wow+this.sad+this.angry
    }
}

console.log(post.getReactions())

const biography = {
    username: "Gio Lopez",
    relationshipStatus: "En una relación",
    friendsNumber: 500,
    residence: "Acapulco",
    dateBirth: "01/10/1997",
    jobs: ["Programador en Arkitem"],
    academicFormation: ["Instituto Tecnológico de Acapulco"],
    groups: [""],
    likes: [""],
    getGeneralInfo: function(){
        return `Name: ${this.username}\nResidence: ${this.residence}\nDate of Birth: ${this.dateBirth}`
    }
}

console.log(biography.getGeneralInfo())