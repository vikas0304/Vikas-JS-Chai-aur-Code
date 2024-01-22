class user {
    constructor(username){
        this.username = username
    }

    logeedIn(){
        return `username : ${this.username}`
    }

    static createID(){
        return '123';
    }
} 

class employee extends user{
    constructor(username , email){
        super(username)
        this.email = email
    }
}

const user1 = new user ('vikas');
// console.log(user1);
// console.log(user1.createID());

const user2 = new employee('pal' , 'pal@gmail.com')

console.log(user2);
console.log(user2.logeedIn());