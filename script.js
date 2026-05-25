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

  // Bot delay
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

  // GREETINGS
  if (text.includes("hello") || text.includes("hi") || text.includes("hey")) {
    return getRandomReply([
      "Hey — I’m Ida. How can I help?",
      "Hi there 👋 What can I help with today?",
      "Hey! Ask me anything about Iron Bowl."
    ]);
  }

  // COMPANY / BRAND
  if (text.includes("who are you") || text.includes("what is iron standard")) {
    return "Iron Standard is a New Zealand brand focused on real food, high protein, and practical nutrition without compromising on flavour.";
  }

  if (text.includes("values") || text.includes("mission")) {
    return "Our values focus on quality ingredients, real nutrition, performance, simplicity, and making healthier food practical.";
  }

  if (text.includes("nz owned") || text.includes("new zealand") || text.includes("local")) {
    return "Yes — Iron Bowl is proudly connected to a New Zealand-made food brand.";
  }

  if (text.includes("sustainable") || text.includes("environment")) {
    return "Iron Standard focuses on quality production and practical food solutions while aiming to reduce unnecessary waste.";
  }

  // PRODUCT
  if (text.includes("what is iron bowl") || text.includes("what do you sell")) {
    return "Iron Bowl is a savoury high-protein granola designed as a fast, practical breakfast or snack.";
  }

  if (text.includes("taste") || text.includes("flavour") || text.includes("flavor")) {
    return "It’s cheesy, smoky, savoury, and slightly tangy — built around bold breakfast flavours.";
  }

  if (text.includes("healthy") || text.includes("benefits")) {
    return "Iron Bowl offers protein, fibre, healthy fats, and convenience — designed for satiety and practical nutrition.";
  }

  // INGREDIENTS
  if (text.includes("ingredients") || text.includes("what is in it")) {
    return "Main ingredients include oats, whey protein isolate, pumpkin seeds, hemp seeds, cheddar powder, smoked paprika, nutritional yeast, egg white, and sea salt.";
  }

  if (text.includes("allergens")) {
    return "Iron Bowl contains dairy, oats, and egg. Always check packaging for full allergen information.";
  }

  if (text.includes("gluten")) {
    return "Iron Bowl contains oats and may not be suitable for coeliac disease or gluten intolerance.";
  }

  if (text.includes("dairy") || text.includes("lactose")) {
    return "Yes — it contains whey protein and cheddar powder.";
  }

  if (text.includes("vegan")) {
    return "No vegan version currently — it contains whey protein and egg white.";
  }

  if (text.includes("vegetarian")) {
    return "Yes — it contains dairy and egg, but no meat ingredients.";
  }

  // NUTRITION
  if (text.includes("protein")) {
    return "Iron Bowl contains around 20g of protein per serve.";
  }

  if (text.includes("calories")) {
    return "Calories can vary by serving size — check packaging for exact nutrition info.";
  }

  if (text.includes("carbs")) {
    return "Iron Bowl contains carbohydrates from oats and seeds for sustained energy.";
  }

  if (text.includes("fat")) {
    return "It contains healthy fats from seeds and oils.";
  }

  if (text.includes("fibre") || text.includes("fiber")) {
    return "It includes fibre from oats and seeds which can help fullness and digestion.";
  }

  if (text.includes("serving size")) {
    return "A common serving size is around 60g.";
  }

  // PREP / USE
  if (
    text.includes("prepare") ||
    text.includes("how do i eat") ||
    text.includes("how to eat")
  ) {
    return "Pour a serve into a bowl and add toppings like Greek yoghurt, avocado, cottage cheese, or egg.";
  }

  if (text.includes("cold")) {
    return "Yes — many people eat Iron Bowl cold with toppings.";
  }

  if (text.includes("hot")) {
    return "It’s mainly designed as a savoury crunch product, but some people add warm toppings.";
  }

  if (text.includes("breakfast") || text.includes("snack")) {
    return "It works well as breakfast, a snack, or a high-protein meal add-on.";
  }

  if (text.includes("meal prep")) {
    return "Yes — it’s practical for quick meal prep and busy mornings.";
  }

  if (text.includes("toppings")) {
    return "Popular toppings include Greek yoghurt, smashed avocado, cottage cheese, soft-boiled egg, and tomato.";
  }

  // FITNESS / BENEFITS
  if (text.includes("gym") || text.includes("workout") || text.includes("training")) {
    return "High-protein breakfasts can support recovery, satiety, and practical nutrition around training.";
  }

  if (text.includes("muscle gain")) {
    return "Protein can support muscle repair and growth when paired with proper training and nutrition.";
  }

  if (text.includes("weight loss")) {
    return "Higher protein foods may help satiety, depending on your full diet and goals.";
  }

  if (text.includes("energy")) {
    return "Oats, protein, and fats can help support steady energy.";
  }

  if (text.includes("recovery") || text.includes("post workout")) {
    return "Many people use protein-focused meals after training to support recovery.";
  }

  if (text.includes("rugby") || text.includes("athlete")) {
    return "For active lifestyles like rugby, balanced meals and protein can support recovery and performance.";
  }

  // STORAGE
  if (text.includes("shelf life")) {
    return "Unopened shelf life is typically several months. Check packaging for exact best-before details.";
  }

  if (text.includes("store") || text.includes("storage")) {
    return "Keep sealed in a cool, dry place.";
  }

  // BUYING
  if (text.includes("price") || text.includes("cost")) {
    return "Pricing can vary depending on retailer and pack size.";
  }

  if (text.includes("where can i buy") || text.includes("buy")) {
    return "Iron Bowl may be available online or through selected NZ retailers.";
  }

  if (text.includes("shipping") || text.includes("delivery")) {
    return "Shipping availability depends on the retailer or supplier.";
  }

  if (text.includes("australia") || text.includes("international")) {
    return "International availability may change over time — check official stockists.";
  }

  if (text.includes("wholesale") || text.includes("bulk")) {
    return "For bulk or wholesale enquiries, contact the Iron Standard team.";
  }

  // SUPPORT
  if (text.includes("refund") || text.includes("return")) {
    return "For damaged or incorrect orders, contact support with your order details.";
  }

  if (text.includes("late order") || text.includes("missing order")) {
    return "If an order is delayed, contact support with your order information.";
  }

  if (text.includes("contact") || text.includes("support") || text.includes("email")) {
    return "You can contact the Iron Standard team for product or order support.";
  }

  // GENERAL
  if (text.includes("thanks") || text.includes("thank you")) {
    return getRandomReply([
      "Happy to help 👌",
      "Anytime.",
      "You got it."
    ]);
  }

  if (text.includes("bye")) {
    return "Catch you later 👋";
  }

  if (text.includes("are you ai")) {
    return "I’m Ida — a support chatbot built to help answer Iron Bowl questions.";
  }

  // FALLBACK
  return getRandomReply([
    "I can help with ingredients, nutrition, benefits, buying, shipping, or support questions.",
    "Try asking about protein, allergens, ingredients, storage, shipping, or company info.",
    "I can answer product, nutrition, brand, and support questions."
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
