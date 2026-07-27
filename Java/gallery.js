function netlifyImageUrl(path, opts) {
  const params = new URLSearchParams({ url: path });
  if (opts.w) params.set("w", opts.w);
  if (opts.h) params.set("h", opts.h);
  if (opts.fit) params.set("fit", opts.fit);
  params.set("q", opts.q || 75);
  return "/.netlify/images?" + params.toString();
}

function wireGalleryModal() {
  const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("img01");
  if (!modal || !modalImg) return;
  document.querySelectorAll(".thumbnail").forEach(function (thumb) {
    thumb.onclick = function () {
      modal.style.display = "block";
      modalImg.src = this.dataset.full || this.src;
    };
  });
  const closeBtn = document.querySelector(".close");
  if (closeBtn) {
    closeBtn.onclick = function () {
      modal.style.display = "none";
    };
  }
}

function renderGallery(container) {
  const jsonUrl = container.dataset.src;
  if (!jsonUrl) return;
  fetch(jsonUrl)
    .then(function (response) { return response.json(); })
    .then(function (data) {
      (data.photos || []).forEach(function (photo, index) {
        const img = document.createElement("img");
        img.src = netlifyImageUrl(photo.image, { w: 400, h: 400, fit: "cover" });
        img.alt = photo.alt || "Réalisation " + (index + 1);
        img.className = "thumbnail";
        img.loading = "lazy";
        img.dataset.full = netlifyImageUrl(photo.image, { w: 1600, q: 80 });
        container.appendChild(img);
      });
      wireGalleryModal();
    })
    .catch(function () {});
}

document.querySelectorAll(".gallery[data-src]").forEach(renderGallery);
