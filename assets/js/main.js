/*
	Solid State by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {
  var $window = $(window),
    $body = $("body"),
    $header = $("#header"),
    $banner = $("#banner");

  // Breakpoints.
  breakpoints({
    xlarge: "(max-width: 1680px)",
    large: "(max-width: 1280px)",
    medium: "(max-width: 980px)",
    small: "(max-width: 736px)",
    xsmall: "(max-width: 480px)",
  });

  // Play initial animations on page load.
  $window.on("load", function () {
    window.setTimeout(function () {
      $body.removeClass("is-preload");
    }, 100);
  });

  // Header.
  if ($banner.length > 0 && $header.hasClass("alt")) {
    $window.on("resize", function () {
      $window.trigger("scroll");
    });

    $banner.scrollex({
      bottom: $header.outerHeight(),
      terminate: function () {
        $header.removeClass("alt");
      },
      enter: function () {
        $header.addClass("alt");
      },
      leave: function () {
        $header.removeClass("alt");
      },
    });
  }

  // Menu.
  var $resume = $("#resume");

  $resume._locked = false;

  $resume._lock = function () {
    if ($resume._locked) return false;

    $resume._locked = true;

    window.setTimeout(function () {
      $resume._locked = false;
    }, 350);

    return true;
  };

  $resume._show = function () {
    if ($resume._lock()) $body.addClass("is-resume-visible");
  };

  $resume._hide = function () {
    if ($resume._lock()) $body.removeClass("is-resume-visible");
  };

  $resume._toggle = function () {
    if ($resume._lock()) $body.toggleClass("is-resume-visible");
  };

  $resume
    .appendTo($body)
    .on("click", function (event) {
      event.stopPropagation();

      // Hide.
      $resume._hide();
    })
    .find(".inner")
    .on("click", ".close", function (event) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();

      // Hide.
      $resume._hide();
    })
    .on("click", function (event) {
      event.stopPropagation();
    })
    .on("click", "a", function (event) {
      var href = $(this).attr("href");

      event.preventDefault();
      event.stopPropagation();

      // Hide.
      $resume._hide();

      // Redirect.
      window.setTimeout(function () {
        window.location.href = href;
      }, 350);
    });

  $body
    .on("click", 'a[href="#resume"]', function (event) {
      event.stopPropagation();
      event.preventDefault();

      // Toggle.
      $resume._toggle();
    })
    .on("keydown", function (event) {
      // Hide on escape.
      if (event.keyCode == 27) $resume._hide();
    });
})(jQuery);
