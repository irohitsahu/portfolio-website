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

function typeWelcome() {
  const content = `
      Hey there!👋<br>
      I'm Rohit Sahu<br>
      A front-end developer with expertise in transforming design visions into interactive experiences.<br>
      Welcome to my portfolio! 🚀✨
      `;

  const welcomeMsg = document.querySelector(".welcome-msg");
  let index = 0;

  function typeWriter() {
    if (content.slice(index, index + 4) === "<br>") {
      welcomeMsg.innerHTML += "<br>";
      index += 4;
    } else {
      welcomeMsg.innerHTML += content.charAt(index);
      index++;
    }

    if (index < content.length) {
      setTimeout(typeWriter, 30); // Adjust typing speed here (in milliseconds)
    }
  }

  // Start the typewriting effect
  typeWriter();
}
