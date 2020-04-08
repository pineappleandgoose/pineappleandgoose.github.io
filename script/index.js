$(document).ready(function() {
  console.log($(window).width());
  if ($(window).width() > 1024) {
    $(".picture-container").hover(
      function() { $(this).children(".picture-information").show() },
      function() { $(this).children(".picture-information").hide() }
    );
  }
});
