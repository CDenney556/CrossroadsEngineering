// Photo viewer for the gallery. Tap a photo and it opens big on a
// dark background; tap outside it or hit Close to go back. If
// JavaScript is off, the links still just open the full-size photo.
(function () {
  var dlg = document.querySelector("dialog.viewer");
  if (!dlg || typeof dlg.showModal !== "function") return;
  var img = dlg.querySelector("img"), cap = dlg.querySelector("p");
  document.querySelectorAll(".gallery a").forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      var thumb = a.querySelector("img"), fc = a.querySelector("figcaption");
      img.src = a.href;
      img.alt = thumb ? thumb.alt : "";
      cap.textContent = fc ? fc.textContent : "";
      dlg.showModal();
    });
  });
  dlg.querySelector("[data-close]").addEventListener("click", function () { dlg.close(); });
  dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
})();
