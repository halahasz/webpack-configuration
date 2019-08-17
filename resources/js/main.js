$(document).ready(function() {
  //
  // ─── NAVIGATION TOGGLE ──────────────────────────────────────────────────────────
  //

  var hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
  });

  //
  // ─── TOP BANNER SLIDER ──────────────────────────────────────────────────────────
  //

  $(".top-slider").owlCarousel({
    loop: true,
    // margin: 10,
    nav: false,
    dots: true,
    // dotsContainer: "#carousel-custom-dots",
    items: 1,
    autoplay: true,
    lazyLoad: true
  });

  //
  // ─── NEWS CAROUSEL ──────────────────────────────────────────────────────────────
  //

  $(".news-carousel").owlCarousel({
    loop: false,
    // margin: 10,
    lazyLoad: true,
    nav: true,
    dots: true,
    // dotsContainer: '#carousel-custom-dots',
    navText: ["<span></span>", "<span></span>"],
    autoplay: false,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    autoplay: 3000, // time for slides changes
    smartSpeed: 1000, // duration of change of 1 slide
    lazyLoad: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      991: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  });
});

//
// ─── FADE ON PAGE LOAD ───────────────────────────────────────────────────────────────
//

$(window).on("load", function() {
  $("main").addClass("loaded");
});



