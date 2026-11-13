(function () {
  var dialog = document.getElementById("demo-dialog");
  var closeButton = document.getElementById("dialog-close");
  var buttons = document.querySelectorAll("[data-demo-cta]");
  var heroCta = document.querySelector(".hero-cta");
  var sticky = document.querySelector(".sticky-cta");
  var lastOpener = null;

  function openDemo(opener) {
    lastOpener = opener;
    if (dialog && typeof dialog.showModal === "function") {
      if (!dialog.open) dialog.showModal();
      closeButton.focus();
      return;
    }
    var fallback = document.getElementById("demo-fallback");
    if (fallback) fallback.scrollIntoView();
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      openDemo(button);
    });
  });

  if (closeButton && dialog) {
    closeButton.addEventListener("click", function () {
      dialog.close();
    });
    dialog.addEventListener("close", function () {
      if (lastOpener) lastOpener.focus();
    });
    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) dialog.close();
    });
  }

  if (sticky && heroCta && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        var visible = entries[0].isIntersecting;
        sticky.hidden = visible;
        document.body.classList.toggle("has-sticky", !visible);
      },
      { threshold: 0.4 }
    );
    observer.observe(heroCta);
  }
})();
