 $.ajax({
   url: 'eleve.json',
   type: 'get',
   dataType: 'json',
   success: function (code_html, statut, data) {
    
     var data = data.responseJSON;
     console.log("hhh" + data.projet.length);

     var url = $(location).attr('href');
     var id = url.substring(url.lastIndexOf('#') + 1);

     for (var i = 0; i <= data.projet.length - 1; i++) {
       var id_unique = "nav-hover" + data.projet[i].id;

       //					console.log("i" + i);
       //					console.log("id" + data.projet[i].id);
       //					console.log("desc" + data.projet[i].mandat);

       $(".liste_projet").append(
         "<a class='button secondary url projets-nav' id='nav-hover" + data.projet[i].id + "' href='#" + data.projet[i].id + "'><span class='id'>" + data.projet[i].id + "</span><span class='nom'>" + data.projet[i].nom + "</span></a>"
       )

       $("#owl-example").append(
         "<div class='item disable-owl-swipe' data-hash='" + data.projet[i].id + "'>" +
         "<div class='test1'>" +
         "<div class='desc desc-collapsed text-center'>" +
         "<div class='desc-content'>" +
         "<h2 class='desc-h1' ><span class='description'>DESCRIPTION</span><span class='nom_projet'>" + data.projet[i].nom + "</span></h2>" +
         "<i class='fa fa-angle-double-down rotate' aria-hidden='true'></i><br>" +
         "<a href='" + data.projet[i].site + "' target='blank' title='liens vers le site'><i class='fa fa-link' aria-hidden='true'></i></a><br><br>" +
         "<p class='desc-text'>" + data.projet[i].mandat + "</p>" +
         "<h2 class='h22'>ÉQUIPE</h2>" +
         "<div class='team team" + data.projet[i].id + "'>" +
         "</div>" +
         "</div>" +
         "</div>" +
         "<div class='hell-div'>" +
         "<img class='hell desktop desktop-sh' src='" + data.projet[i].img + "' alt=''>" +
         "<img class='hell mobile mobile-sh' src='" + data.projet[i].imgm + "' alt=''>" +
         "</div>" +
         "</div>"
       )

       for (var h = 0; h <= data.eleve.length - 1; h++) {
         for (var j = 0; j <= data.eleve[h].projet.length - 1; j++) {
           if (data.projet[i].nom == data.eleve[h].projet[j]) {
             console.log(data.projet[i].nom + " ...  " + data.eleve[h].projet[j])
             $(".team" + data.projet[i].id).append(
               "<div class='devs'>" +
               "<a href='" + data.eleve[h].url + "' target='blank' >" +
               "<img class='team-pics' src='" + data.eleve[h].img + "' alt=''>" +
               "<h3 class='team-names'>" + data.eleve[h].nom + "</h3>" +
               "<p class='team-titles'>" + data.eleve[h].domaine + "</p>" +
               "</a>" +
               "</div>"
             )
           }
         }
       }
     }
   },

   error: function (resultat, statut, erreur) {
     console.log(resultat);
   },

   complete: function (resultat, statut) {
     console.log(statut);
     //OWL CAROUSEL CONFIG
     $('.owl-carousel').owlCarousel({
       items: 1,
       loop: false,
       center: true,
       margin: 0,
       URLhashListener: true,
       autoplayHoverPause: false,
       startPosition: 'URLHash',
       smartSpeed: 750,
     });

     //PREVIENT LE SWIPE DE OWL CAROUSEL
     $(".disable-owl-swipe").on("mousedown", function (e) {
       e.stopPropagation();
     });

     //BAR DE DESCRIPTION
     $(".desc-h1, .fa-angle-double-down").click(function () {
       $(".desc-collapsed").toggleClass("desc-expanded");
     });

     //FAIT LA ROTATION DE L'ICONE FLECH DESC    
     $(".desc-h1, .fa-angle-double-down").click(function () {
       $(".rotate").toggleClass("down");
     });
   }

 });


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



   $(".button").hover(function () {

     if ($(window).width() <= 992) {

       $(this).find(".id").css("display", "inline-block");
     } else {
       $(this).find(".nom").css("display", "inline-block");
       $(this).find(".id").css("display", "none");
     }
   }, function () {
     if ($(window).width() <= 725) {
       $(this).find(".nom").css("display", "none");
       $(this).find(".id").css("display", "inline-block");
     } else {
       $(this).find(".nom").css("display", "none");
       $(this).find(".id").css("display", "inline-block");
     }

   });

   var nom_vue = 0;


   $(".desc-h1, .fa-angle-double-down").click(function () {


     if (nom_vue == 0) {


       $("span.description").css("display", "none");
       $("span.nom_projet").css("display", "inline-block");
       nom_vue = 1
     } else {
       $("span.description").css("display", "inline-block");
       $("span.nom_projet").css("display", "none");
       nom_vue = 0
     }
   });
   $(window).resize(function () {
     if ($(window).width() <= 725) {
       console.log("if");
       $(".mobile").css("display", "inline !important");
       $(".desktop").css("display", "none !important");
     } else {
       console.log("else");
       $(".mobile").css("display", "inline !important");
       $(".desktop").css("display", "none !important");
     }
   });

 });
