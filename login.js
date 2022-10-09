const users = [
  {
    username: "madhuroshan",
    password: "roshan@01",
    profileName: "Madhu Roshan",
    friends: [
      {
        username: "satyabala",
        profileName: "Satya Bala",
      },
      {
        username: "yaminipriya",
        profileName: "Yamini Priya",
      },
      {
        username: "sreecharan",
        profileName: "Sree Charan",
      },
    ],
  },
  {
    username: "satyabala",
    password: "roshan@01",
    profileName: "Satya Bala",
    friends: [
      {
        username: "madhuroshan",
        profileName: "Madhu Roshan",
      },
      {
        username: "yaminipriya",
        profileName: "Yamini Priya",
      },
      {
        username: "sreecharan",
        profileName: "Sree Charan",
      },
    ],
  },
  {
    username: "yaminipriya",
    password: "roshan@01",
    profileName: "Yamini Priya",
    friends: [
      {
        username: "satyabala",
        profileName: "Satya Bala",
      },
      {
        username: "madhuroshan",
        profileName: "Madhu Roshan",
      },
      {
        username: "sreecharan",
        profileName: "Sree Charan",
      },
    ],
  },
  {
    username: "sreecharan",
    password: "roshan@01",
    profileName: "Sree Charan",
    friends: [
      {
        username: "satyabala",
        profileName: "Satya Bala",
      },
      {
        username: "yaminipriya",
        profileName: "Yamini Priya",
      },
      {
        username: "madhu roshan",
        profileName: "Madhu Roshan",
      },
    ],
  },
];

const chatWindow = document.querySelector(".chat-box-container");
const loginWindow = document.querySelector(".login-container");
const loginBtn = document.querySelector(".login-btn");
const friendsWindow = document.querySelector(".friends-list");

loginBtn.addEventListener("click", function () {
  const userName = document.querySelector(".login-username").value;
  const password = document.querySelector(".login-password").value;
  if (userName === "" || password === "") {
    alert("Enter Login Credentials");
  }
  for (let i = 0; i < users.length; i++) {
    if (userName === users[i].username && password === users[i].password) {
      console.log(users[i].username);
      chatWindow.style.display = "flex";
      loginWindow.style.display = "none";
      for (let j = 0; j < users[i].friends.length; j++) {
        friendsWindow.innerHTML += `<div class='friend-contact-wrapper'><img src='./svgs/user-solid.svg' class='friend-icon'/><div class='friend-details'><h3>${users[i].friends[j].profileName}</h3><p>${users[i].friends[j].username}</p></div></div>`;
      }
    }
  }
});
