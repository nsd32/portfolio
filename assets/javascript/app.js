$(function() {
  // Smooth Scrolling
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

window.sr = ScrollReveal();
  sr.reveal('.navbar', {
    duration: 2000,
    origin: 'bottom'
  });
  sr.reveal('.about-left', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
  });
  sr.reveal('.about-right', {
    duration: 2000,
    origin: 'right',
    distance: '300px'
  });
  // sr.reveal('.btn', {
  //   duration: 2000,
  //   delay: 2000,
  //   origin: 'bottom',
  // });
  sr.reveal('#portfolio div', {
    duration: 2000,
    origin: 'bottom',
  });
  sr.reveal('.project-left', {
    duration: 2000,
    origin: 'left',
    distance: '200px',
    viewFactor: 0.2
  });
  sr.reveal('.project-right', {
    duration: 2000,
    origin: 'right',
    distance: '200px',
    viewFactor: 0.2
  });
  sr.reveal('#portfolio-title', {
    duration: 2000,
    origin: 'bottom',
    viewFactor: 0.2
  });
  sr.reveal('#contact', {
    duration: 2000,
    origin: 'bottom',
    viewFactor: 0.2
  });