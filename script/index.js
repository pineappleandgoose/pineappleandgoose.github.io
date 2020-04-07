$(document).ready(function() {
  $(".picture-container").hover(
    function() { $(this).children(".picture-information").show() },
    function() { $(this).children(".picture-information").hide() }
  );
});
