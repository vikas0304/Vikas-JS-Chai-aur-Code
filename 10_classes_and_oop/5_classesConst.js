// ES6

class user {
    constructor(usernamr , email , password){
        this.usernamr = usernamr,
        this.email = email,
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    capitalUsername(){
        return `${this.usernamr.toUpperCase()}`
    }
}

const user1 = new user('vikas' , 'vikpal@gmail.com' , '123');

console.log(user1.capitalUsername());


// Behind the scene without class