const promiseOne = new Promise(function (resolve , reject) {
    setTimeout(function() {
        console.log("here set timeout will be run ");
        resolve();
    }, 1000)
});

promiseOne.then(function () {
    console.log("now it run sucessfully after 1 second");
    
})