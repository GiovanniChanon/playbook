class profile{
    constructor(name,lastName,phoneNumber,email,profilePicture){
        this.name = name
        this.lastName = lastName
        this.phoneNumber = phoneNumber
        this.email = email
        this.profilePicture = profilePicture
    }

    getFullName(){
        console.log(this.name+" "+this.lastName)
    }
}

class travel{
    constructor(origin,destination,car,timeMinutes,cost,date){
        this.origin = origin
        this.destination = destination
        this.car = car
        this.timeMinutes = timeMinutes
        this.cost = cost
        this.date = date
    }

    getTravelInfo(){
        console.log(`From: ${this.origin}\nTo: ${this.destination}`)
    }
}