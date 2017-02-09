$(document).ready(function () {

  // HOVER EFFECT SUR LE LANDING PAGE
  $("#js-div1").hover(function () {
    $('#fd').stop().fadeIn();
  }, function () {
    $('#fd').stop().fadeOut(200);
  });

  $("#js-div2").hover(function () {
    $('#fd2').stop().fadeIn();
  }, function () {
    $('#fd2').stop().fadeOut(200);
  });

  $("#js-div3").hover(function () {
    $('#fd3').stop().fadeIn();
  }, function () {
    $('#fd3').stop().fadeOut(200);
  });

  //BURGER MENU EXPAND
  $(".menu-collapsed").click(function () {
    $(this).toggleClass("menu-expanded");
  });

  //BAR DE DESCRIPTION
  $(".desc-h1").click(function () {
    $(".desc-collapsed").toggleClass("desc-expanded");
  });

  //FAIT LA ROTATION DE L'ICONE FLECH DESC    
  $(".desc-h1").click(function () {
    $(".rotate").toggleClass("down");
  });



});