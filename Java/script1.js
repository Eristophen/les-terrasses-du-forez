const modal = document.getElementById("myModal");
const img = document.getElementById("img01");
const thumbnails = document.getElementsByClassName("thumbnail");

for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].onclick = function() {
    modal.style.display = "block";
    img.src = this.src;
  }
}

const span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}