// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});
function changeImage() {
    if (document.getElementById("imgClickAndChange").src == "images/00001.png"){
        document.getElementById("imgClickAndChange").src = "images/the devil.png";
    } else {
        document.getElementById("imgClickAndChange").src = "images/00001.png";
    }
}
