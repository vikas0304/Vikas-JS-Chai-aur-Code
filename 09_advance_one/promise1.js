// const promiseOne = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('Task is happening');
//         resolve()
//     },3000)
// })

// promiseOne.then(()=>{
//     console.log('Task Completed');
// });

// new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         console.log("Task 2");
//         resolve()
//     },2000)
// }).then(()=>{
//     console.log("Task 2 Completed");
// });

// const promiseThree = new Promise((resolve,reject)=>{
//     resolve({
//         username : "Vikas" ,
//         email : "Vikpal377@gmail.com"
//     })
// });

// promiseThree.then((user)=>{
//     console.log(user);
// });




// const promiseFour = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = false;
//         if(!error){
//             resolve({
//                 username : "Vikas",
//                 password : 123
//             })
//         }else{
//             reject('Something went Wrong');
//         }
//     },3000)
// });
// promiseFour.then((user)=>{
//     return user.username;
// }).then((username)=>{
//     console.log(username);
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=> console.log(`it's Done`));



// const promiseFive = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//                 let error = false;
//                 if(!error){
//                     resolve({
//                         username : "Vikas",
//                         password : 123
//                     })
//                 }else{
//                     reject('Something went Wrong');
//                 }
//             },3000)
// });
// async function consumePromideFive(){
//     try{
//         const resolve = await promiseFive;
//         console.log(resolve.password);
//     }
//     catch(err) {
//         console.log(err);
//     }
// }

// consumePromideFive()


// async function getAllUsers(){
//    try {
//     const respone = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await respone.json();
//     console.log(data);
//    } catch (error) {
//     console.log(error);
//    }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((respone)=>{
    return respone.json()
})
.then((data)=>{
    console.log(data[0].address.city);
})
.catch((err)=>{
    console.log(err);
})
;