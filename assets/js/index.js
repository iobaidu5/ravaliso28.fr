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


var owl = $(".owl");
owl.owlCarousel({
  items: 2,
  navigation: false,
  loop: true,
  stagePadding: 100,
  rewind: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: false,
  dots: false,
  margin: 30,
  // animateIn: "fadeIn",
  // animateOut: "fadeOut",
  // navText: [
  //   "<i class='fas fa-chevron-left nav-left'></i>",
  //   "<i class='fas fa-chevron-right nav-right'></i>",
  // ],
  responsiveClass: true,
  responsive: {
    200: {
      items: 1,
      nav: true,
    },
    350: {
      items: 1,
      nav: true,
    },
    380: {
      items: 1,
      nav: true,
    },
    400: {
      items: 1,
      nav: true,
    },
    768: {
      items: 1,
      nav: true,
    },
    990: {
      items: 1,
      nav: true,
    },
    1200: {
      items: 2,
      nav: true,
    },
    1600: {
      items: 2,
      nav: true,
      loop: true,
    },
  },
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [5000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});


const myCustomSlider = document.querySelectorAll('.swiper-container');

for (let i = 0; i < myCustomSlider.length; i++) {
  myCustomSlider[i].classList.add('swiper-container-' + i);

  // Initialize Swiper for each slider separately
  const swiper = new Swiper('.swiper-container-' + i, {
    centeredSlides: true,
    effect: 'coverflow',
    loop: true,
    slidesPerView: 3,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
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
        $("#form-1-btn").show("slow");
        $("#step4").removeClass("reservation_step-active");
        $("#step4").removeClass("reservation_step-active2");
        $("#step3").addClass("reservation_step-active");
    });

