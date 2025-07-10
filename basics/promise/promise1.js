 /*const promiseOne = new Promise(function (resolve , reject) {
    setTimeout(function() {
        console.log("here set timeout will be run ");
        resolve();
    }, 1000)
});

promiseOne.then(function () {
    console.log("now it run sucessfully after 1 second");
    
}) */


/*const promiseTwo = new Promise(function (resolve, reject) {
    setTimeout(function() {
        
        let error = true;
        if(!error) {
            resolve({username :"jamson" , email : "bhu@gmail.com"})
        }
        else {
            console.log("somthing went wrong ");
        }
    },1000)
});

promiseTwo.then((user) =>{
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch(function(error) {
    console.log(error);
}).finally( () => {
    console.log("finally you complete your code :");
})
*/

/*
const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function( ) {
        const error = true;
        if(!error) {
            resolve(usermame = "sonu " , password = "234" );
        }
       else {
        console.log("you don't get any data")
       }
    },1000)
});

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
}).catch( (error) => 
    console.log("get any error ")
)

*/


const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function( ) {
        const error = false;
        if(!error) {
            resolve(usermame = "sonu " , password = "234" );
        }
       else {
        console.log("you don't get any data")
       }
    },1000)
});

async function numberallget( ) {


try {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary');
    const data = await response.json();
    console.log(data);
} catch (error) {
    console.log("get any error ", error);
}
}
numberallget();