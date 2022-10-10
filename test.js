class User {
  constructor(userName, profileName, password) {
    this.userName = userName;
    this.profileName = profileName;
    this.password = password;
    this.sent = [];
    this.received = [];
  }

  sendMessage(user, str) {
    user.received.push(str);
  }
}

const user1 = new User("roshan", "Madhu Roshan", "roshan@01");
const user2 = new User("charan", "Sree Charan", "roshan@01");

user2.sendMessage(user1, "hii");
user2.sendMessage(user1, "empeekutunnav ra pumka");

console.log(user1.received);
