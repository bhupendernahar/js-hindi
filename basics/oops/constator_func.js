function user(username, email, isloggedIn) {
    this.username = username;
    this.isloggedIn = isloggedIn;
    this.email = email;

    return this;
}

const userOne = new user("bhupender", "example@com", true);
const promiseTWO = new user("sonu", "example@com", false);

console.log(userOne);