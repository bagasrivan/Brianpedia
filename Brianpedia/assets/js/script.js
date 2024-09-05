function on() {
  var menuBar = document.getElementById("menuBar");

  var overlay = document.getElementById("overlay");

  menuBar.classList.toggle("menuBarStyle");
  overlay.classList.toggle("ovelayStyle");
}

function kategoryOn() {
  var kategory = document.getElementById("kategory");

  kategory.classList.toggle("kategoryStyle");
}

function previewImage(event) {
  var reader = new FileReader();
  reader.onload = function () {
    var preview = document.getElementById("preview");
    preview.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
}

document.getElementById("phoneNumber").addEventListener("input", function (e) {
  this.value = this.value.replace(/[^0-9]/g, "");
});
