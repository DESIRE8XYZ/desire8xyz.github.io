window.onload = function () {
  var accordian = document.getElementsByClassName("accordion");

  for (let index = 0; index < accordian.length; index++) {
    accordian[index].addEventListener("click", function () {
      this.classList.toggle("active");

      this.nextElementSibling.style.display =
        this.nextElementSibling.style.display === "block" ? "none" : "block";
    });
  }
};
