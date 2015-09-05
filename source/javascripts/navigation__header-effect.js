//=require velocity/velocity.min.js

const logomark = document.querySelector('.logomark');
var pumpInterval;

logomark.addEventListener('mouseenter', function() {
  if (!pumpInterval) {
    pumpInterval = setInterval(function(){ pumpHeart() }, 1000);
    pumpHeart();

    logomark.addEventListener('mouseleave', function(e) {
      clearInterval(pumpInterval);
      pumpInterval = null;
    });
  }
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
