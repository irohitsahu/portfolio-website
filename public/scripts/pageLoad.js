window.onload = function () {
  renderPortfolio();
  typeWelcome();
};

// ── Render all dynamic content from PORTFOLIO_DATA ──

function renderPortfolio() {
  const d = PORTFOLIO_DATA;

  // Logo / Name
  setText(".part-1", d.personal.firstName);
  setText(".part-2", d.personal.lastName);
  setText(".int-info", d.personal.title);

  // Page title
  document.title = `${d.personal.firstName} ${d.personal.lastName} Portfolio`;

  // Hero social links
  renderHeroSocials(d.socials);

  // Skills marquee
  renderMarquee(d.skills);

  // Projects
  renderProjects(d.projects);

  // About Bio
  setText(".about-bio > div", d.aboutBio);

  // Career tagline
  const careerTagP = document.querySelector("#about .section-heading p");
  if (careerTagP) careerTagP.textContent = d.careerTagline;

  // Experience
  renderExperience(d.experience);

  // Technical Skills
  renderTechnicalSkills(d.technicalSkills);

  // Education
  renderEducation(d.education);

  // Contact section
  renderContactInfo(d);

  // Footer
  const footerSpan = document.querySelector(".made-by span");
  if (footerSpan)
    footerSpan.textContent = `${d.personal.firstName} ${d.personal.lastName}`;
}

// ── Helper: set text content by selector ──
function setText(selector, text) {
  const el = document.querySelector(selector);
  if (el) el.textContent = text;
}

// ── Hero Social Links ──
function renderHeroSocials(socials) {
  const wrapper = document.querySelector(".social-wrapper-line");
  if (!wrapper) return;

  // Keep the vertical line, remove old links
  const line = wrapper.querySelector(".line");
  wrapper.innerHTML = "";
  if (line) wrapper.appendChild(line);

  socials.forEach((s, i) => {
    const a = document.createElement("a");
    a.href = s.url;
    a.target = s.url.startsWith("mailto:") ? "_self" : "_blank";
    a.rel = "noopener";
    a.setAttribute("data-aos", "zoom-in");
    a.setAttribute("data-aos-delay", String((i + 1) * 100));
    const img = document.createElement("img");
    img.src = s.icon;
    img.alt = s.name;
    a.appendChild(img);
    wrapper.appendChild(a);
  });
}

// ── Skills Marquee ──
function renderMarquee(skills) {
  const marquees = document.querySelectorAll(".marquee");
  marquees.forEach((marquee) => {
    marquee.innerHTML = "";
    skills.forEach((skill) => {
      const div = document.createElement("div");
      div.innerHTML = `<img src="${skill.icon}" alt="${skill.name}"><span>${skill.name}</span>`;
      marquee.appendChild(div);
    });
  });
}

// ── Projects ──
function renderProjects(projects) {
  const wrapper = document.querySelector(".project-info-wrapper");
  if (!wrapper) return;
  wrapper.innerHTML = "";

  projects.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.setAttribute("data-aos", "zoom-out");
    card.setAttribute("data-aos-delay", String(100 + i * 50));

    let linksHtml = "";
    if (p.github) {
      linksHtml += `<a href="${p.github}" title="Github" target="_blank" rel="noopener">
        <img class="icn-size" src="icon/github-outline.svg" alt="repo" /></a>`;
    }
    if (p.live) {
      linksHtml += `<a href="${p.live}" title="Live Link" target="_blank" rel="noopener">
        <img class="icn-size" src="icon/external-link.svg" alt="live" /></a>`;
    }

    card.innerHTML = `
      <div class="project-head-wrapper">
        <div class="project-head-decoration">${p.title}</div>
        <span class="project-link">${linksHtml}</span>
      </div>
      <div class="project-date-decoration">(${p.date})</div>
      <div class="project-tech-stack">Tech Stack - ${p.techStack}</div>
      <div class="project-about">${p.description}</div>`;
    wrapper.appendChild(card);
  });
}

// ── Professional Experience ──
function renderExperience(experience) {
  const container = document.querySelector(".prof-exp");
  if (!container) return;

  // Keep the heading, replace experience cards
  const heading = container.querySelector(".section-subheading");
  container.innerHTML = "";
  if (heading) container.appendChild(heading);

  experience.forEach((exp) => {
    const div = document.createElement("div");
    div.className = "about-experience";
    div.innerHTML = `
      <span class="font-bold">${exp.role}</span>
      <span class="font-xs">${exp.duration}</span>
      <span>${exp.company}</span>`;
    container.appendChild(div);
  });
}

// ── Technical Skills ──
function renderTechnicalSkills(technicalSkills) {
  const container = document.querySelector("#skills .skills-info");
  if (!container) return;
  container.innerHTML = "";

  technicalSkills.forEach((skill) => {
    const p = document.createElement("p");
    p.innerHTML = `${skill.category} <span>${skill.items}</span>`;
    container.appendChild(p);
  });
}

// ── Education ──
function renderEducation(education) {
  const container = document.querySelector("#education .skills-info");
  if (!container) return;
  container.innerHTML = "";

  education.forEach((edu) => {
    const div = document.createElement("div");
    div.className = "institute-decoration";
    div.innerHTML = `<div>${edu.period}</div>${edu.detail}`;
    container.appendChild(div);
  });
}

// ── Contact Section Info ──
function renderContactInfo(d) {
  const phoneLink = document.querySelector(
    ".contact-info-item a[href^='tel:']"
  );
  if (phoneLink) {
    phoneLink.href = `tel:${d.personal.phone}`;
    phoneLink.textContent = d.personal.phoneDisplay;
  }

  const emailLink = document.querySelector(
    ".contact-info-item a[href^='mailto:']"
  );
  if (emailLink) {
    emailLink.href = `mailto:${d.personal.email}`;
    emailLink.textContent = d.personal.email;
  }

  const portrait = document.querySelector(".rohit-potrait");
  if (portrait) portrait.src = d.personal.portraitImage;

  // Contact social icons
  const socialWrapper = document.querySelector(
    ".contact-info-item .social-wrapper"
  );
  if (socialWrapper) {
    socialWrapper.innerHTML = "";
    // Only show linkedin, github, whatsapp in contact section
    const contactSocials = d.socials.filter((s) =>
      ["LinkedIn", "GitHub", "WhatsApp"].includes(s.name)
    );
    contactSocials.forEach((s, i) => {
      const a = document.createElement("a");
      a.href = s.url;
      a.className = "icon";
      a.target = "_blank";
      a.rel = "noopener";
      a.setAttribute("data-aos", "zoom-out");
      a.setAttribute("data-aos-delay", String((i + 2) * 100));
      a.innerHTML = `<img src="${s.icon}" alt="${s.name}" />`;
      socialWrapper.appendChild(a);
    });
  }
}

// ── Open Resume ──
function viewResume() {
  window.open(PORTFOLIO_DATA.personal.resumeUrl, "_blank");
}

// ── Sidebar toggle ──
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

// ── Typewriter Effect ──
async function typeWelcome() {
  const messages = PORTFOLIO_DATA.welcomeMessages;

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  async function typeMessage(message, targetElement) {
    for (let i = 0; i < message.length; i++) {
      targetElement.innerHTML += message.charAt(i);
      await delay(30);
    }
    targetElement.innerHTML += "<br>";
    await delay(100);
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
