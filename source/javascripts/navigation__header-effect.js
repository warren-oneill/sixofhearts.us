//=require velocity/velocity.min.js

const logomark = document.querySelector('.logomark');
const links = document.querySelectorAll('.nav-links a');

logomark.addEventListener('mouseenter', function() {
  var pumping = setInterval(function(){ pumpHeart() }, 1000);
  pumpHeart();
  logomark.addEventListener('mouseout', function(e) {
    clearInterval(pumping);
  });
});

function pumpHeart() {
  const vi = logomark.querySelector('.vi');
  const heart = logomark.querySelector('.heart');

  vi.className = 'vi pump';
  setTimeout(function() {
    heart.className = 'heart pump';
    setTimeout(function() {
      vi.className = 'vi';
      heart.className = 'heart';
    }, 300);
  }, 100);
};
