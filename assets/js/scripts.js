$(document).ready(function() {
    $('.gallery img').click(function() {
      var src = $(this).attr('src');
      var alt = $(this).attr('alt');

      var largeImage = $('<img>').attr('src', src).attr('alt', alt);
      var overlay = $('<div>').addClass('overlay').append(largeImage);
      $('body').append(overlay);

      overlay.click(function() {
        overlay.remove();
      });
    });
  });