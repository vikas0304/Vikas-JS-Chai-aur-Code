class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value.toUpperCase()
    }
}

const vikas = new User("vikas234@gmail.com" , "abc");

console.log(vikas.password);