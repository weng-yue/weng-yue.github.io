(function () {
  var target = document.querySelector("[data-pat-target]");

  if (!target) {
    return;
  }

  var status = target.querySelector("[data-pat-status]");
  var patCount = 0;

  function showPat(event) {
    var rect = target.getBoundingClientRect();
    var x = rect.width / 2;
    var y = rect.height / 2;

    if (event && typeof event.clientX === "number" && typeof event.clientY === "number") {
      x = event.clientX - rect.left;
      y = event.clientY - rect.top;
    }

    var pop = document.createElement("span");
    pop.className = "pat-pop";
    pop.textContent = "+1";
    pop.style.setProperty("--pat-x", x + "px");
    pop.style.setProperty("--pat-y", y + "px");
    target.appendChild(pop);

    patCount += 1;
    if (status) {
      status.textContent = patCount + (patCount === 1 ? " pat" : " pats");
    }

    target.classList.remove("is-patted");
    window.requestAnimationFrame(function () {
      target.classList.add("is-patted");
    });

    window.setTimeout(function () {
      pop.remove();
      target.classList.remove("is-patted");
    }, 780);
  }

  target.addEventListener("click", showPat);
})();
