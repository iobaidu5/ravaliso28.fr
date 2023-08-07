$(document).ready(function () {
    $('li.active').removeClass('active');
    $('a[href="' + location.pathname + '"]').closest('li').addClass('active');
});

const nav = document.querySelector(".fixedNav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("navbar-active");
  } else {
    nav.classList.remove("navbar-active");
  }
}

const myCustomSlider = document.querySelectorAll('.swiper-container');

for( i=0; i< myCustomSlider.length; i++ ) {
  
  myCustomSlider[i].classList.add('swiper-container-' + i);

const swiper = new Swiper('.swiper-container-' + i, {
  // Optional parameters
  centeredSlides: true,
  effect: 'coverflow',
  loop: true,
  slidesPerView: 3,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    enabled: false,
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
}



$('.multi-item-carousel').on('slide.bs.carousel', function (e) {
  let $e = $(e.relatedTarget),
      itemsPerSlide = 3,
      totalItems = $('.carousel-item', this).length,
      $itemsContainer = $('.carousel-inner', this),
      it = itemsPerSlide - (totalItems - $e.index());
  if (it > 0) {
    for (var i = 0; i < it; i++) {
      $('.carousel-item', this).eq(e.direction == "left" ? i : 0).
        // append slides to the end/beginning
        appendTo($itemsContainer);
    }
  }
});


lightGallery(document.getElementById('lightgallery'))


    $("#btn1").click(function () {
        $(".btn1").css("background-color", "#F4E6D9");
        $(".btn2").css("background-color", "#fff");
    });

    $("#btn2").click(function () {
        $(".btn2").css("background-color", "#F4E6D9");
        $(".btn1").css("background-color", "#fff");
    });


    $("#form-1-btn").click(function () {

        $(".form-1").hide("slow");
        $(".form-4").show("slow");
        $("#step1").addClass("reservation_step-active2");
        $("#step4").addClass("reservation_step-active");
    });


    $("#form-4-btn-back").click(function () {

        $(".form-4").hide("slow");
        $(".form-3").show("slow");
        $("#step4").removeClass("reservation_step-active");
        $("#step4").removeClass("reservation_step-active2");
        $("#step3").addClass("reservation_step-active");
    });


