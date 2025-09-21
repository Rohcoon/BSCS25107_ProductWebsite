window.onload=function(){if (window.location.pathname.includes("BSCS25107_Home.html"))
alert("Welcome to my page 🐱!!");}

document.addEventListener("DOMContentLoaded", function(){
    const yearSpan = document.getElementById("year");
    if(yearSpan){
        const currentyear=new Date().getFullYear();
        yearSpan.textContent=currentyear;
    }
})
const statusData= {
  p1: "Adopted",
  p2: "Waiting",
};
function Status(id){
    alert("Product Status: "+statusData[id]);
}

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
    return false; 
  }
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    return false;
  }

  alert("Form submitted successfully ദ്ദി（• ˕ •マ.ᐟ");
  return true; 
}


function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();
  const chatWindow = document.getElementById("chatWindow");

  if (message === "") return; 


  const userMsg = document.createElement("p");
  userMsg.className = "user-message";
  userMsg.textContent = message;
  chatWindow.appendChild(userMsg);

 
  const botMsg = document.createElement("p");
  botMsg.className = "bot-message";
  botMsg.textContent = getBotResponse(message); 
  chatWindow.appendChild(botMsg);

 
  chatWindow.scrollTop = chatWindow.scrollHeight;

  input.value = "";
}
  function getBotResponse(input) {
  input = input.toLowerCase(); 

  if (input.includes("hello") || input.includes("hi")) {
    return "Meow! Hello there 🐾";
  } else if (input.includes("how are you")) {
    return "I'm just a cute bot cat, always purr-fect! 🐱✨";
  } else if (input.includes("bye")) {
    return "Goodbye! Come back soon 🐾";
  } else if (input.includes("thanks") || input.includes("thank you")) {
    return "You're welcome! 🐾";
  } else if (input.includes("adoption")||input.includes("cats")) {
    return "Check out our pearl jewelry products on the Pawducts Page ✨";
  } else {
    return "Meow? I don’t understand that yet 🐾";
  }
}
