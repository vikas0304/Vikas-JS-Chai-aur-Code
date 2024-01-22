const user = {
    username : "vikas" ,
    loginCount : 10,
    signedIn : true,

    userDetails(){
        return "vikas Pal";
    }
};

console.log(user.signedIn);
console.log(user.userDetails());