function sendMessage() {
  let input = document.getElementById("user-input");
  let chatBox = document.getElementById("chat-box");

  let message = input.value.trim();

  if (message === "") {
    return;
  }

  // show user message
  let userDiv = document.createElement("div");
  userDiv.classList.add("user-message");
  userDiv.innerText = message;
  chatBox.appendChild(userDiv);

  // bot reply
  let botDiv = document.createElement("div");
  botDiv.classList.add("bot-message");

  if (message.toLowerCase().includes("hello")) {
    botDiv.innerText = "Hi there!";
  } else if (message.toLowerCase().includes("help")) {
    botDiv.innerText = "How can I help you?";
  } else {
    botDiv.innerText = "I got your message.";
  }

  chatBox.appendChild(botDiv);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}
