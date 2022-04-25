class user{
    constructor(user,username,bio,dateJoined,country,followersNumber,followingNumber){
        this.user = user
        this.username = username
        this.bio = bio
        this.dateJoined = dateJoined
        this.country = country
        this.followersNumber = followersNumber
        this.followingNumber = followingNumber
    }

    getGeneralInfo(){
        console.log(`Username: ${this.username}\n${this.bio}`)
      }
}

class trending_topic{
    constructor(category,hashtag,tweetsNumber){
        this.category = category
        this.hashtag = hashtag
        this.tweetsNumber = tweetsNumber
    }

    getGeneralInfo(){
        console.log(`Trending: ${this.hashtag}\n${this.tweetNumber} Tweets`)
    }
}

class hashtag{
    constructor(name,tweetsNumber,trendingPosition){
        this.name = name
        this.tweetsNumber = tweetsNumber
        this.trendingPosition = trendingPosition
    }

    getNumberOfTweets(){
        console.log(this.tweetsNumber)
    }
}