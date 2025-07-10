function firstName(username) {
    this.username = username;
    console.log("called ");
    
}

function nextName(username , email , loggedIn) {
    firstName.call(this , username);
    this.email = email;
    this.loggedIn = loggedIn;

}

const user = new nextName("john" ,"example@gmial.com " , "234");
console.log(user);