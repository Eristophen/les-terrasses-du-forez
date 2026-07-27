function loadInclude(placeholderId, url) {
  const el = document.getElementById(placeholderId);
  if (!el) return;
  fetch(url)
    .then(response => response.text())
    .then(html => { el.outerHTML = html; })
    .catch(() => {});
}

loadInclude("nav-placeholder", "partials/nav.html");
loadInclude("footer-placeholder", "partials/footer.html");
