function variableExamples() {
  console.info(2 + 3);
  console.warn("Hodisan Andreea");

  var employed = true;
  var age = 26;
  console.log("Angajat", employed);
  employed = false;
  console.log("Angajat", employed);
  employed = "da";
  console.log("Angajat", employed);

  var skills = ["html", "css"];
  console.debug("tipul variabilei skills", typeof skills);

  var job = document.getElementById("job-titles");
  console.warn("job", job);
  console.info(typeof job);
}

variableExamples();
