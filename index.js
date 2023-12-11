function show(id) {
  console.info("show", id);
  var page = document.getElementById(id);
  console.info("page", page);
  page.style.display = "block";
}

function hide(id) {
  console.info("hide", id);
  document.getElementById(id).style.display = "none";
}

function showHome() {
  hide("projects");
  hide("languages");
  hide("skills");
  show("home");
}

function showSkills() {
  hide("projects");
  hide("languages");
  hide("home");
  show("skills");
}

function showProjects() {
  hide("skills");
  hide("languages");
  hide("home");
  show("projects");
}

function showLanguages() {
  hide("projects");
  hide("home");
  hide("skills");
  show("languages");
}
