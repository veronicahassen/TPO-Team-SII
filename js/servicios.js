const items = document.querySelectorAll('.lista li');

setTimeout(() => {
  items.forEach(item => item.classList.add('animate'));
}, 500);

window.addEventListener('scroll', function() {
  var cards = document.querySelectorAll('.card');
  cards.forEach(function(card) {
    var position = card.getBoundingClientRect().top;
    if (position < window.innerHeight) {
      card.classList.add('animate');
    }
  });
});