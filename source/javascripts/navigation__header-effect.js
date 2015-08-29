//=require velocity/velocity.min.js

const logomark = document.querySelector('.logomark');
const links = document.querySelector('.nav-links');
var pumpInterval;

links.addEventListener('mouseenter', function() {
  if (!pumpInterval) {
    logomark.className = 'logomark red';
    pumpInterval = setInterval(function(){ pumpHeart() }, 1000);
    pumpHeart();
  }
});

links.addEventListener('mouseout', function(e) {
  logomark.className = 'logomark';
  clearInterval(pumpInterval);
  pumpInterval = null;
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
