window.onload = function () {
  window.scrollTo(0, 0);
  console.log("Page loaded and scrolled to top");
};

function openForm(type, button) {
  const skills = document.getElementById("skills");
  const projects = document.getElementById("projects");
  const education = document.getElementById("education");

  if (type === "skills") {
    skills.classList.add("active");
    projects.classList.remove("active");
    education.classList.remove("active");
  }
  if (type === "education") {
    skills.classList.remove("active");
    projects.classList.remove("active");
    education.classList.add("active");
  }
  if (type === "projects") {
    skills.classList.remove("active");
    projects.classList.add("active");
    education.classList.remove("active");
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