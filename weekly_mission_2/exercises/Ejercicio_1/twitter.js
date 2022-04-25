const user = {
    user: "Giovanni",
    username: "Gio9797",
    bio: "Programador",
    dateJoined: "10/05/2016",
    country: "México",
    followersNumber: 100,
    followingNumber: 200,
    getGeneralInfo: function(){
        return `Username: ${this.username}\n${this.bio}`
      },
}

console.log(user.getGeneralInfo())

const trending_topic = {
    category:"Entertainment",
    hashtag:"#WillSmith",
    tweetNumber:17000,
    getGeneralInfo: function(){
        return `Trending: ${this.hashtag}\n${this.tweetNumber} Tweets`
    }
}

console.log(trending_topic.getGeneralInfo())

const hashtag = {
    name: "Oscars",
    tweetsNumber: 100000,
    trendingPosition: 2,
    getNumberOfTweets: function(){
        return this.tweetsNumber
    }
}

console.log(hashtag.getNumberOfTweets())