let btns = document.querySelectorAll(".btn-show");

btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    let cardBody = btn.closest(".card").querySelector(".card-body");
    if (!cardBody) return;
    if (cardBody.style.display === "block") {
      cardBody.style.display = "none";
    } else {
      cardBody.style.display = "block";
    }
  });
});
