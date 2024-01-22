function setuserName(user) {
    this.user = user
}


function createUser(user , email , password){
    setuserName.call(this, user);
    this.email = email;
    this.password = password
}

const emp1 = new createUser('vikas' , 'vik@gmail.com' , '123')
console.log(emp1);