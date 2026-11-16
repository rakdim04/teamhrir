
const menuButton = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

if (menuButton && navigation) {
  menuButton.addEventListener("click", function () {
    navigation.classList.toggle("open");
  });

  navigation.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navigation.classList.remove("open");
    });
  });
}

document.getElementById("year").textContent =
  new Date().getFullYear();
