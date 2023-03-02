const img = document.getElementById('cardfront');
let toggle = true;
img.addEventListener('click', function(){
  toggle = !toggle;
  if (toggle){
    img.src = "css/images/00001.png";
  } else {
    img.src = "css/images/the devil.png";
  }
})
