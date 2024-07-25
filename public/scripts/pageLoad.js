window.onload = function () {
  window.scrollTo(0, 0);
  typeWelcome();
  console.log("Page loaded and scrolled to top");
};

function openForm(type, button) {
  const skills = document.getElementById("skills");
  const education = document.getElementById("education");

  if (type === "skills") {
    skills.classList.add("active");
    education.classList.remove("active");
  }
  if (type === "education") {
    skills.classList.remove("active");
    education.classList.add("active");
  }

  const tabBtns = document.querySelectorAll(".tab-links");
  tabBtns.forEach((btn) => btn.classList.remove("active"));
  button.classList.add("active");
}

function openSidebar() {
  const sidebar = document.querySelector(".sidebar");

  if (sidebar.classList.contains("active")) {
    sidebar.classList.remove("active");
  } else {
    sidebar.classList.add("active");
  }
}

async function typeWelcome() {
  const messages = [
    "Hey there!👋",
    "I'm Rohit Sahu",
    "A front-end developer with expertise in transforming design visions into interactive experiences.",
    "Welcome to my portfolio! 🚀✨",
  ];

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  async function typeMessage(message, targetElement) {
    for (let i = 0; i < message.length; i++) {
      targetElement.innerHTML += message.charAt(i);
      await delay(30);
    }
    targetElement.innerHTML += "<br>";
    await delay(500);
  }

  const welcomeMsgOne = document.querySelector(".welcome-msg-1");
  const welcomeMsgTwo = document.querySelector(".welcome-msg-2");
  const welcomeMsgThree = document.querySelector(".welcome-msg-3");
  const welcomeMsgFour = document.querySelector(".welcome-msg-4");

  await typeMessage(messages[0], welcomeMsgOne);
  await typeMessage(messages[1], welcomeMsgTwo);
  await typeMessage(messages[2], welcomeMsgThree);
  await typeMessage(messages[3], welcomeMsgFour);
}
