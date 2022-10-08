const sendBtn = document.querySelector(".send-btn");
const chatBox = document.querySelector(".chat-msg-container");

sendBtn.addEventListener("click", function () {
  const msgText = document.querySelector(".msg-text").value;

  if (msgText === "") {
    console.log("");
  } else {
    chatBox.innerHTML += `<div class='chat-bubble'>${msgText}</div>`;
  }
});
