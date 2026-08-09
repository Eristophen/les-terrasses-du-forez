function loadInclude(placeholderId, url, onLoaded) {
  const el = document.getElementById(placeholderId);
  if (!el) return;
  fetch(url)
    .then(response => response.text())
    .then(html => {
      el.outerHTML = html;
      if (onLoaded) onLoaded();
    })
    .catch(() => {});
}

function wireMobileNav() {
  document.querySelectorAll(".menu_deroulant > a:not([href])").forEach(function (trigger) {
    trigger.addEventListener("click", function (e) {
      e.preventDefault();
      const li = trigger.parentElement;
      const wasOpen = li.classList.contains("open");
      document.querySelectorAll(".menu_deroulant.open").forEach(function (openLi) {
        openLi.classList.remove("open");
      });
      if (!wasOpen) li.classList.add("open");
    });
  });
}

function wireCreditModal() {
  const trigger = document.getElementById("creditSignature");
  const modal = document.getElementById("creditModal");
  if (!trigger || !modal) return;
  const closeBtn = modal.querySelector(".credit-modal-close");
  trigger.addEventListener("click", function () {
    modal.classList.add("open");
  });
  closeBtn.addEventListener("click", function () {
    modal.classList.remove("open");
  });
  modal.addEventListener("click", function (e) {
    if (e.target === modal) modal.classList.remove("open");
  });
}

loadInclude("nav-placeholder", "partials/nav.html", wireMobileNav);
loadInclude("footer-placeholder", "partials/footer.html", wireCreditModal);
