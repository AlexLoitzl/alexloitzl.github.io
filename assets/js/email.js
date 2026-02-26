document.addEventListener("DOMContentLoaded", function () {
  const user = ["alexander","loitzl"].join(".");
  const domain = ["ista","ac.at"].join(".");
  const email = user + "@" + domain;

  const link = document.getElementById("email-link");
  if (link) {
    link.href = "mailto:" + email;
  }
});
