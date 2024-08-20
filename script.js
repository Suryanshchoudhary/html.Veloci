// JavaScript for Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// JavaScript for Chatbot Toggle
function toggleBot() {
    let bot = document.getElementById("chatbot");
    if (bot.style.display === "none" || bot.style.display === "") {
        bot.style.display = "block";
    } else {
        bot.style.display = "none";
    }
}

// JavaScript for Sending a Message in Chatbot
function sendMessage() {
    let inputField = document.getElementById("botInput");
    let message = inputField.value.trim();

    if (message !== "") {
        let chatBody = document.querySelector(".chat-body");
        let userMessage = document.createElement("p");
        userMessage.style.color = "#00ff00";  // User's message in green
        userMessage.textContent = "You: " + message;
        chatBody.appendChild(userMessage);

        // Simple bot response logic
        let botResponse = document.createElement("p");
        botResponse.textContent = "Bot: I'm still learning! Please try asking another question.";
        chatBody.appendChild(botResponse);

        // Scroll to the bottom of the chat
        chatBody.scrollTop = chatBody.scrollHeight;

        // Clear input field
        inputField.value = "";
    }
}
