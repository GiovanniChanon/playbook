const profile = {
    name: "Giovanni",
    lastName: "López",
    phoneNumber: 7444444,
    email: "gio@gmail.com",
    profilePicture: "",
    getFullName: function(){
        return this.name+" "+this.lastName
    }
}

console.log(profile.getFullName())

const travel = {
    origin: "Plaza Las Palmas Acapulco",
    destination: "Galerías Acapulco",
    car: "Nissan",
    timeMinutes:45,
    cost:100,
    date:"18/04/2022",
    getTravelInfo: function(){
        return `From: ${this.origin}\nTo: ${this.destination}`
    }
}

console.log(travel.getTravelInfo())
