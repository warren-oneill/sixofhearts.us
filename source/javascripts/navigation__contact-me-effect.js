(function() {
  const contactMeLink = document.querySelector('#contact-me-link');
  const contactMethodIcons = document
	.querySelector('.social-links')
	.querySelectorAll('a');

  contactMeLink.addEventListener("click", function(e) {
    e.preventDefault();
    bounceContactMethodIcons();
  });

  function bounceContactMethodIcons() {
    for (var lcv = 0; lcv < contactMethodIcons.length; lcv++) {
      bounceIcon(contactMethodIcons[lcv], lcv * 250);
    }
  };

  function bounceIcon(element, delay) {
    setTimeout(function() {
      element.className = 'hoverEffect';
      setTimeout(function() {
	element.className = '';
      }, 400);
    }, delay);
  };
})();
