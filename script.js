function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  if (input.value.trim() === "") return;

  const userMessage = document.createElement("div");
  userMessage.className = "user-message";
  userMessage.textContent = input.value;
  chatBox.appendChild(userMessage);

  const botMessage = document.createElement("div");
  botMessage.className = "bot-message";

  const text = input.value.toLowerCase();

  if (text.includes("hello")) {
    botMessage.textContent = "Hi there!";
  } else if (text.includes("price")) {
    botMessage.textContent = "Please contact support for pricing details.";
  } else if (text.includes("help")) {
    botMessage.textContent = "I’m here to help. Ask me anything.";
  } else {
    botMessage.textContent = "Thanks — I received your message.";
  }

  chatBox.appendChild(botMessage);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}
