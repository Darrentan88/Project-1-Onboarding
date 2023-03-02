// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});
var card = document.getElementbyId('cardfront');
card.addEventListener('click',function(card){
  card.target.classList.toggle('cardback');
})
