function sendMessage() {
  let input = document.getElementById("user-input");
  let chatBox = document.getElementById("chat-box");

  let message = input.value.trim();
  if (message === "") return;

  let lower = message.toLowerCase();

  // User message
  let userDiv = document.createElement("div");
  userDiv.classList.add("user-message");
  userDiv.innerText = message;
  chatBox.appendChild(userDiv);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;

  // Typing delay
  setTimeout(() => {
    let botDiv = document.createElement("div");
    botDiv.classList.add("bot-message");
    botDiv.innerText = getBotReply(lower);
    chatBox.appendChild(botDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 500);
}

function getRandomReply(replies) {
  return replies[Math.floor(Math.random() * replies.length)];
}

function getBotReply(text) {

  // Greetings
  if (
    text.includes("hello") ||
    text.includes("hi") ||
    text.includes("hey")
  ) {
    return getRandomReply([
      "Hey — I’m Ida. How can I help?",
      "Hi there 👋 What can I help with today?",
      "Hey! Ask me anything about Iron Bowl."
    ]);
  }

  // What is Iron Bowl
  if (
    text.includes("what is iron bowl") ||
    text.includes("what is this") ||
    text.includes("what do you sell")
  ) {
    return "Iron Bowl is a New Zealand-made savoury high-protein granola designed to taste like a proper breakfast — ready in under 2 minutes.";
  }

  // Protein
  if (
    text.includes("protein") ||
    text.includes("how much protein")
  ) {
    return "Iron Bowl contains 20g of protein per 60g serve.";
  }

  // Ingredients
  if (
    text.includes("ingredients") ||
    text.includes("what's in it") ||
    text.includes("what is in it")
  ) {
    return "Main ingredients include rolled oats, whey protein isolate, pumpkin seeds, hemp seeds, aged cheddar powder, smoked paprika, nutritional yeast, sun-dried tomato flakes, avocado oil, dried egg white, and sea salt.";
  }

  // Gluten
  if (
    text.includes("gluten") ||
    text.includes("gluten free") ||
    text.includes("coeliac")
  ) {
    return "Iron Bowl contains oats and is not suitable for coeliac disease or gluten intolerance.";
  }

  // Dairy / lactose
  if (
    text.includes("lactose") ||
    text.includes("dairy") ||
    text.includes("milk")
  ) {
    return "Iron Bowl contains dairy (aged cheddar powder and whey protein isolate), so it isn’t suitable for dairy allergy or lactose intolerance.";
  }

  // Vegan
  if (
    text.includes("vegan")
  ) {
    return "No vegan version currently — this one contains whey protein and dried egg white.";
  }

  // Vegetarian
  if (
    text.includes("vegetarian")
  ) {
    return "Yes — Iron Bowl contains dairy and egg, but no meat ingredients.";
  }

  // Kids
  if (
    text.includes("kids") ||
    text.includes("children")
  ) {
    return "Iron Bowl is formulated for adults and performance-focused nutrition. Parents can make their own call, but each serve is designed around adult macro targets.";
  }

  // Taste
  if (
    text.includes("taste") ||
    text.includes("flavour") ||
    text.includes("flavor")
  ) {
    return "It’s cheesy, smoky, savoury, and slightly tangy — think aged cheddar, smoked paprika, sun-dried tomato, and nutritional yeast.";
  }

  // Prep
  if (
    text.includes("how do i eat") ||
    text.includes("how to eat") ||
    text.includes("prepare") ||
    text.includes("prep")
  ) {
    return "Pour about a 60g serve into a bowl and add toppings like Greek yoghurt, smashed avocado, cottage cheese, or a soft-boiled egg.";
  }

  // Shelf life
  if (
    text.includes("shelf life") ||
    text.includes("how long does it last")
  ) {
    return "Unopened shelf life is 9 months. Once opened, best eaten within 4–6 weeks for top crunch and flavour.";
  }

  // Storage
  if (
    text.includes("store") ||
    text.includes("storage")
  ) {
    return "Keep it sealed in the resealable pouch in a cool, dry place.";
  }

  // Price
  if (
    text.includes("price") ||
    text.includes("cost") ||
    text.includes("how much")
  ) {
    return "Iron Bowl typically retails around NZD $12–14 per unit.";
  }

  // Buy / stockists
  if (
    text.includes("where can i buy") ||
    text.includes("buy") ||
    text.includes("stock")
  ) {
    return "You can find Iron Bowl at Woolworths NZ, New World, or order online through Iron Standard.";
  }

  // Bulk / wholesale
  if (
    text.includes("bulk") ||
    text.includes("wholesale")
  ) {
    return "For bulk or wholesale orders, reach out to hello@ironstandard.co.nz.";
  }

  // Refund
  if (
    text.includes("refund") ||
    text.includes("return")
  ) {
    return "If there’s damage or a quality issue, email hello@ironstandard.co.nz with your order number and a photo. They’ll sort it.";
  }

  // Order late / missing
  if (
    text.includes("late order") ||
    text.includes("missing order") ||
    text.includes("hasn't arrived") ||
    text.includes("not arrived")
  ) {
    return "That’s frustrating. If your order hasn’t arrived, contact hello@ironstandard.co.nz with your order number and email.";
  }

  // Shipping
  if (
    text.includes("shipping") ||
    text.includes("delivery") ||
    text.includes("ship")
  ) {
    return "Iron Bowl currently ships within New Zealand only.";
  }

  // International
  if (
    text.includes("australia") ||
    text.includes("international")
  ) {
    return "International shipping isn’t available yet — NZ only for now.";
  }

  // Contact
  if (
    text.includes("contact") ||
    text.includes("support") ||
    text.includes("email")
  ) {
    return "You can reach the team at hello@ironstandard.co.nz.";
  }

  // Made in NZ
  if (
    text.includes("where made") ||
    text.includes("made in")
  ) {
    return "Iron Bowl is proudly made in New Zealand.";
  }

  // Gym / workout
  if (
    text.includes("before gym") ||
    text.includes("after workout") ||
    text.includes("post workout") ||
    text.includes("training")
  ) {
    return "A high-protein breakfast can support recovery and satiety. Many people use Iron Bowl around training depending on their nutrition goals.";
  }

  // Rugby
  if (
    text.includes("rugby")
  ) {
    return "For active training like rugby, protein and balanced meals can help recovery and energy support.";
  }

  // Toppings
  if (
    text.includes("toppings") ||
    text.includes("what should i add")
  ) {
    return "Greek yoghurt, smashed avocado, cottage cheese, or a soft-boiled egg are all solid choices.";
  }

  // Brand story
  if (
    text.includes("brand") ||
    text.includes("company")
  ) {
    return "Iron Bowl is part of Iron Standard — focused on real food, real protein, and no compromise on flavour.";
  }

  // Thanks
  if (
    text.includes("thanks") ||
    text.includes("thank you")
  ) {
    return getRandomReply([
      "Anytime 👌",
      "Happy to help.",
      "You got it."
    ]);
  }

  // Bye
  if (
    text.includes("bye") ||
    text.includes("see ya")
  ) {
    return "Catch you later 👋";
  }

  // Fallback
  return getRandomReply([
    "I can help with product info, ingredients, shipping, refunds, protein, flavours, or support questions.",
    "I didn’t quite catch that — ask me anything about Iron Bowl.",
    "Try asking about shipping, ingredients, allergens, protein, or orders."
  ]);
}

// Enter key support
document.addEventListener("DOMContentLoaded", function () {
  let input = document.getElementById("user-input");

  input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });
});
