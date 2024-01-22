// class User {
//     constructor(username){
//         this.username = username
//     }

//     logMe(){
//         console.log(`USERNAME is ${this.username}`);
//     }
// }

// class Teacher extends User{
//     constructor(username, email, password){
//         super(username)
//         this.email = email
//         this.password = password
//     }

//     addCourse(){
//         console.log(`A new course was added by ${this.username}`);
//     }
// }

// const chai = new Teacher("chai", "chai@teacher.com", "123")

// chai.logMe()
// const masalaChai = new User("masalaChai")

// masalaChai.logMe()

// chai.addCourse()

// console.log(chai instanceof User);





class anime {
    constructor(name , mainCharacter , waifu){
        this.name = name.toUpperCase(),
        this.mainCharacter = mainCharacter,
        this.waifu = waifu
    }

    details(){
        return `${this.mainCharacter} is the main character of ${this.name} and ${this.waifu} is the love intrest of our Hero.`
    }
}

class allDetails extends anime {
    constructor(name, mainCharacter , waifu,releasedate , episodes , season ){
        super(name)
        this.mainCharacter = mainCharacter,
        this.waifu = waifu
        this.releasedate = releasedate
        this.episodes = episodes
        this.season = season
    }

    watchDetails(){
        return `this anime has ${this.season} and ${this.episodes} and was first released in ${this.releasedate} `;
    }
}

const op = new anime ('One Piece' , 'Luffy' , 'Boa Hancock' )
const naruto = new allDetails('naruto' , 'Naruto' , 'Hinata' , 2002 , 700 , 3);

console.log(naruto.details());

console.log(op.details());