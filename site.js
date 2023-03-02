function changeImage() {
  var image = document.getElementById('myImage');
  if (image.src.match("thedevil")) {
    image.src = "css/images/00001.png";
    }
  else {
    image.src = "css/images/thedevil.png";
  }
    }
