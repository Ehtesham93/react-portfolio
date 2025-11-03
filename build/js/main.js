(function ($) {
  "use strict";

  var nav = $("nav");
  var navHeight = nav.outerHeight();

  // Navbar toggler
  $(".navbar-toggler").on("click", function () {
    if (!$("#mainNav").hasClass("navbar-reduce")) {
      $("#mainNav").addClass("navbar-reduce");
    }
  });

  // Preloader
  $(window).on("load", function () {
    if ($("#preloader").length) {
      $("#preloader")
        .delay(100)
        .fadeOut("slow", function () {
          $(this).remove();
        });
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500, "swing"); // faster & smoother
    return false;
  });

  // ScrollTop
  $(".scrolltop-mf").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 500, "swing"); // faster
  });

  // Counter
  $(".counter").counterUp({
    delay: 15,
    time: 2000,
  });

  // Smooth scrolling nav
  $("a.js-scroll[href*='#']:not([href='#'])").on("click", function () {
    if (
      location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          { scrollTop: target.offset().top - navHeight + 5 },
          500, // faster scroll
          "swing"
        );
        return false;
      }
    }
  });

  // Close responsive menu on click
  $(".js-scroll").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Scrollspy
  $("body").scrollspy({
    target: "#mainNav",
    offset: navHeight,
  });

  // Navbar reduce
  $(window).trigger("scroll");
  $(window).on("scroll", function () {
    var pixels = 50;
    var top = 1200;
    if ($(window).scrollTop() > pixels) {
      $(".navbar-expand-md").addClass("navbar-reduce");
      $(".navbar-expand-md").removeClass("navbar-trans");
    } else {
      $(".navbar-expand-md").addClass("navbar-trans");
      $(".navbar-expand-md").removeClass("navbar-reduce");
    }
    if ($(window).scrollTop() > top) {
      $(".scrolltop-mf").fadeIn(500, "swing");
    } else {
      $(".scrolltop-mf").fadeOut(500, "swing");
    }
  });

  // Typed text
  if ($(".text-slider").length == 1) {
    var typed_strings = $(".text-slider-items").text();
    new Typed(".text-slider", {
      strings: typed_strings.split(","),
      typeSpeed: 80,
      loop: true,
      backDelay: 1100,
      backSpeed: 30,
    });
  }

  // Testimonials carousel
  $("#testimonial-mf").owlCarousel({
    margin: 20,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
    },
  });
})(jQuery);
