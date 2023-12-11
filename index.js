function hide(id) {
  console.info("hide", id);
  document.getElementById(id).style.display = "none";
}

function showHome() {
  hide("projects");
  hide("languages");
  hide("skills");

  var page = document.getElementById("home");
  page.style.display = "block";
}

function showSkills() {
  hide("projects");
  hide("languages");
  hide("home");

  var page = document.getElementById("skills");
  page.style.display = "block";
}

function showProjects() {
  hide("skills");
  hide("languages");
  hide("home");

  var page = document.getElementById("projects");
  page.style.display = "block";
}

function showLanguages() {
  hide("projects");
  hide("home");
  hide("skills");

  var page = document.getElementById("languages");
  page.style.display = "block";
}
