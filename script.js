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

  // ===== GREETINGS / HUMAN =====
  if (
    text.includes("hello") ||
    text.includes("hi") ||
    text.includes("hey") ||
    text.includes("good morning") ||
    text.includes("good afternoon")
  ) {
    return getRandomReply([
      "Hey 👋 I’m Ida. Happy to help with anything Iron Bowl related.",
      "Hi there 😊 Ask me anything about Iron Bowl, nutrition, ingredients, or support.",
      "Hey! Great to have you here — what can I help with?"
    ]);
  }

  if (text.includes("how are you")) {
    return getRandomReply([
      "Doing great 😄 Ready to talk all things Iron Bowl.",
      "I’m good — thanks for asking 👌 What can I help with?",
      "Pretty good! Ready when you are 😊"
    ]);
  }

  if (text.includes("who are you") || text.includes("are you ai")) {
    return "I’m Ida — a friendly support chatbot built to help with Iron Bowl questions, nutrition info, ingredients, and customer support.";
  }

  if (text.includes("what can you do") || text.includes("help me")) {
    return "I can help with ingredients, nutrition, calories, protein, healthy eating questions, shipping, orders, and anything Iron Bowl related 😊";
  }

  // ===== COMPANY / BRAND =====
  if (
    text.includes("iron standard") ||
    text.includes("company") ||
    text.includes("brand")
  ) {
    return "Iron Standard focuses on practical, real-food nutrition — high protein, strong flavour, and simple food that fits real life.";
  }

  if (
    text.includes("mission") ||
    text.includes("values")
  ) {
    return "The focus is quality ingredients, practical nutrition, flavour, simplicity, and making healthier choices easier.";
  }

  if (
    text.includes("new zealand") ||
    text.includes("nz") ||
    text.includes("local")
  ) {
    return "Iron Bowl is proudly connected to a New Zealand-made food brand 🇳🇿";
  }

  // ===== PRODUCT BASICS =====
  if (
    text.includes("what is iron bowl") ||
    text.includes("what do you sell") ||
    text.includes("what is this")
  ) {
    return "Iron Bowl is a savoury high-protein granola built for fast breakfasts, snacks, and practical high-protein eating.";
  }

  if (
    text.includes("taste") ||
    text.includes("flavour") ||
    text.includes("flavor")
  ) {
    return "It’s cheesy, smoky, savoury, slightly tangy, and built around bold breakfast-style flavours.";
  }

  if (
    text.includes("texture") ||
    text.includes("crunchy")
  ) {
    return "Yep — it’s designed to have a crunchy savoury granola texture.";
  }

  // ===== HEALTH =====
  if (
    text.includes("healthy") ||
    text.includes("healthy for me") ||
    text.includes("is it healthy")
  ) {
    return getRandomReply([
      "Great question 👌 Iron Bowl is designed around protein, fibre, healthy fats, and convenience. Whether it fits *you* depends on your diet and goals.",
      "It can absolutely fit into a balanced diet 😊 It’s built for practical nutrition with protein and satisfying ingredients.",
      "That depends on your goals — but it’s designed to be a protein-focused, practical food option."
    ]);
  }

  if (
    text.includes("benefits") ||
    text.includes("why eat this")
  ) {
    return "People often choose higher-protein foods for satiety, convenience, recovery support, and practical nutrition.";
  }

  // ===== NUTRITION =====
  if (text.includes("protein")) {
    return "Iron Bowl contains around 20g of protein per serve 💪";
  }

  if (
    text.includes("calories") ||
    text.includes("kcal")
  ) {
    return "Great question 👌 Calories can vary depending on serving size, so packaging gives the most accurate breakdown.";
  }

  if (
    text.includes("fat") ||
    text.includes("fats")
  ) {
    return "Iron Bowl contains fats from seeds and oils, which can help with satiety and energy.";
  }

  if (
    text.includes("healthy fats")
  ) {
    return "Seeds and oils can contribute beneficial fats depending on your overall diet.";
  }

  if (
    text.includes("carbs") ||
    text.includes("carbohydrates")
  ) {
    return "Carbs mainly come from oats and can help provide steady energy.";
  }

  if (
    text.includes("sugar") ||
    text.includes("low sugar")
  ) {
    return "For exact sugar values, the nutrition label is best — but feel free to ask about the broader nutrition profile 😊";
  }

  if (
    text.includes("fibre") ||
    text.includes("fiber")
  ) {
    return "It includes fibre from oats and seeds, which can support fullness and digestion.";
  }

  if (
    text.includes("salt") ||
    text.includes("sodium")
  ) {
    return "For exact sodium levels, check the label for the most accurate nutrition details.";
  }

  if (
    text.includes("macros") ||
    text.includes("nutrition")
  ) {
    return "I can help with protein, fats, carbs, fibre, calories, and general nutrition questions 👌";
  }
    // ===== INGREDIENTS =====
  if (
    text.includes("ingredients") ||
    text.includes("what is in it") ||
    text.includes("what's in it")
  ) {
    return "Main ingredients include oats, whey protein isolate, pumpkin seeds, hemp seeds, cheddar powder, smoked paprika, nutritional yeast, egg white, and sea salt.";
  }

  if (
    text.includes("allergens") ||
    text.includes("allergy")
  ) {
    return "Iron Bowl contains dairy, oats, and egg. Always check packaging for full allergen details 😊";
  }

  if (
    text.includes("gluten") ||
    text.includes("coeliac")
  ) {
    return "Iron Bowl contains oats, so it may not be suitable for coeliac disease or gluten intolerance.";
  }

  if (
    text.includes("dairy") ||
    text.includes("milk")
  ) {
    return "Yep — it contains dairy-based ingredients like whey protein and cheddar powder.";
  }

  if (
    text.includes("lactose")
  ) {
    return "Because it contains dairy, it may not be ideal for lactose intolerance depending on sensitivity.";
  }

  if (
    text.includes("vegan")
  ) {
    return "No vegan version currently — it contains whey protein and egg white.";
  }

  if (
    text.includes("vegetarian")
  ) {
    return "Yes 😊 It contains dairy and egg, but no meat ingredients.";
  }

  if (
    text.includes("halal")
  ) {
    return "For halal-specific certification, it’s best to check directly with the brand or packaging.";
  }

  if (
    text.includes("keto")
  ) {
    return "Because it contains oats, it may not suit strict keto diets depending on carb targets.";
  }

  if (
    text.includes("paleo")
  ) {
    return "Since it includes oats and processed ingredients, it may not fit strict paleo guidelines.";
  }

  // ===== LIFESTYLE =====
  if (
    text.includes("kids") ||
    text.includes("children")
  ) {
    return "It’s designed around adult nutrition targets, but parents can decide what suits their child’s diet.";
  }

  if (
    text.includes("teen") ||
    text.includes("teenager")
  ) {
    return "Teen nutrition depends on age, activity, and needs — higher-protein foods can fit depending on overall diet.";
  }

  if (
    text.includes("pregnant") ||
    text.includes("pregnancy")
  ) {
    return "For pregnancy-specific dietary advice, it’s always best to check with a health professional 😊";
  }

  if (
    text.includes("elderly") ||
    text.includes("older people")
  ) {
    return "Protein-rich foods can be helpful in many diets, but individual needs vary.";
  }

  // ===== EATING / PREP =====
  if (
    text.includes("breakfast")
  ) {
    return "That’s what Iron Bowl was built for 😄 A quick savoury, high-protein breakfast option.";
  }

  if (
    text.includes("snack")
  ) {
    return "Yep — many people use it as a protein-focused snack too.";
  }

  if (
    text.includes("lunch") ||
    text.includes("dinner")
  ) {
    return "It’s mainly breakfast-focused, but people can definitely use it however it fits their meals.";
  }

  if (
    text.includes("how do i eat") ||
    text.includes("prepare") ||
    text.includes("prep")
  ) {
    return "Easy 👌 Add a serve to a bowl and pair it with toppings like yoghurt, avocado, cottage cheese, or egg.";
  }

  if (
    text.includes("cold")
  ) {
    return "Yep — it’s commonly eaten cold with toppings.";
  }

  if (
    text.includes("hot")
  ) {
    return "It’s mainly a crunchy savoury product, but warm toppings can work too.";
  }

  if (
    text.includes("milk")
  ) {
    return "Some people pair it differently than sweet cereal — yoghurt, avocado, or egg are popular.";
  }

  if (
    text.includes("toppings") ||
    text.includes("what should i add")
  ) {
    return "Great options: Greek yoghurt, smashed avocado, cottage cheese, soft-boiled egg, tomato, or herbs 😍";
  }

  if (
    text.includes("meal prep")
  ) {
    return "Yep — really handy for meal prep and busy mornings.";
  }

  if (
    text.includes("office") ||
    text.includes("work")
  ) {
    return "A practical high-protein option for busy workdays or quick meals.";
  }

  if (
    text.includes("travel")
  ) {
    return "Its dry shelf-stable format can make it useful for travel or quick meals.";
  }

  // ===== FITNESS =====
  if (
    text.includes("gym") ||
    text.includes("training")
  ) {
    return "Higher-protein foods can support satiety, recovery, and practical nutrition around training 💪";
  }

  if (
    text.includes("muscle gain") ||
    text.includes("gain muscle")
  ) {
    return "Protein can support muscle repair and growth when paired with training and enough total calories.";
  }

  if (
    text.includes("bulking")
  ) {
    return "During bulking, protein-focused foods can be useful alongside enough total calories.";
  }

  if (
    text.includes("cutting")
  ) {
    return "Many people prioritize protein and satiety-focused foods while cutting.";
  }

  if (
    text.includes("weight loss")
  ) {
    return "Higher-protein foods may support fullness, but overall calorie balance matters most 😊";
  }

  if (
    text.includes("lose fat")
  ) {
    return "Fat loss usually comes down to overall diet, movement, and consistency.";
  }

  if (
    text.includes("energy")
  ) {
    return "Protein, fats, and carbs can all help support sustained energy.";
  }

  if (
    text.includes("recovery") ||
    text.includes("post workout")
  ) {
    return "Protein-focused meals are commonly used to support recovery after training.";
  }

  if (
    text.includes("pre workout") ||
    text.includes("before gym")
  ) {
    return "Depending on timing and preference, people often use balanced meals before training.";
  }

  if (
    text.includes("athlete") ||
    text.includes("sport")
  ) {
    return "Athletes often prioritize protein, recovery, and practical fuel choices.";
  }

  if (
    text.includes("rugby")
  ) {
    return "For active sports like rugby, balanced meals and recovery nutrition matter a lot 💪";
  }

  if (
    text.includes("runner") ||
    text.includes("running")
  ) {
    return "Runners often balance carbs, protein, and recovery depending on training load.";
  }
    // ===== BUYING =====
  if (
    text.includes("where can i buy") ||
    text.includes("buy") ||
    text.includes("purchase")
  ) {
    return "You can usually buy Iron Bowl through approved stockists or the official store 😊";
  }

  if (
    text.includes("price") ||
    text.includes("cost") ||
    text.includes("how much")
  ) {
    return "Pricing can vary depending on pack size and retailer.";
  }

  if (
    text.includes("shipping") ||
    text.includes("delivery")
  ) {
    return "Shipping times depend on location and retailer, but check the store for exact delivery info 📦";
  }

  if (
    text.includes("stockist") ||
    text.includes("stores") ||
    text.includes("retailers")
  ) {
    return "Check approved retailers or the official website for current stockists.";
  }

  if (
    text.includes("nz") ||
    text.includes("new zealand")
  ) {
    return "Yep — Iron Bowl is available in New Zealand 🇳🇿";
  }

  if (
    text.includes("australia") ||
    text.includes("aus")
  ) {
    return "Availability can depend on distribution — check current stockists 😊";
  }

  // ===== STORAGE =====
  if (
    text.includes("shelf life") ||
    text.includes("expiry")
  ) {
    return "Check packaging for exact shelf-life dates.";
  }

  if (
    text.includes("store it") ||
    text.includes("storage")
  ) {
    return "Best stored sealed in a cool, dry place.";
  }

  if (
    text.includes("fridge")
  ) {
    return "Normally dry pantry storage is ideal unless packaging says otherwise.";
  }

  // ===== SUPPORT =====
  if (
    text.includes("refund") ||
    text.includes("return")
  ) {
    return "For refunds or returns, check the retailer or official support team 😊";
  }

  if (
    text.includes("contact") ||
    text.includes("support")
  ) {
    return "Happy to help here, or you can contact the official team directly.";
  }

  if (
    text.includes("problem") ||
    text.includes("issue")
  ) {
    return "Sorry about that 😅 Tell me what’s going on and I’ll try help.";
  }

  // ===== SMALL TALK =====
  if (
    text.includes("hello") ||
    text.includes("hi")
  ) {
    return "Hey 👋 I’m Ida. Ask me anything about Iron Bowl, nutrition, ingredients, or how to use it.";
  }

  if (
    text.includes("how are you")
  ) {
    return "Doing great 😄 Ready to help.";
  }

  if (
    text.includes("thank you") ||
    text.includes("thanks")
  ) {
    return "You’re very welcome 😊";
  }

  if (
    text.includes("who are you")
  ) {
    return "I’m Ida — here to help with Iron Bowl questions, nutrition info, and general support.";
  }

  if (
    text.includes("what can you do")
  ) {
    return "I can help with ingredients, protein, calories, health questions, storage, prep ideas, and more 💪";
  }

  // ===== FUN =====
  if (
    text.includes("joke")
  ) {
    return "Why did the protein shake break up with the soda? Too many empty calories 😄";
  }

  if (
    text.includes("best breakfast")
  ) {
    return "Depends what you like 😄 But high-protein, balanced breakfasts are a strong start.";
  }

  if (
    text.includes("i am hungry")
  ) {
    return "Sounds like breakfast time 😎";
  }

  if (
    text.includes("love this")
  ) {
    return "Love that 😄";
  }

  if (
    text.includes("you suck")
  ) {
    return "Haha fair 😅 Tell me what you need and I’ll do better.";
  }

  if (
    text.includes("stupid")
  ) {
    return "😂 I’m trying my best. Hit me with another question.";
  }

  // ===== SMART FALLBACK =====
  return "That’s a good question 😊 I may not know that exact answer yet, but I can help with Iron Bowl ingredients, protein, calories, nutrition, healthy eating, prep ideas, fitness, storage, buying, and more. Try asking another way!";
}
