function changeImage() {
  var image = document.getElementById('myImage');
  if (image.src.match("thedevil.png")) {
    image.src = "images/120.png";
    }
  else {
    image.src = "images/thedevil.png";
  }
    }
