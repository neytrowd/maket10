$(".header-slider-block_home").slick({
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  dots: false,
  arrows:true,
});

$(".choose-block-slider").slick({
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  dots: true,
  arrows:false,
});


$(".post-slider").slick({
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  dots: true,
  arrows:false,
});

$(".client-inner-block").slick({
  autoplay: true,
  autoplaySpeed: 3000,
  dots: false,
  slidesToShow: 5,
  slidesToScroll: 1,
});


$(".say-block-slider-inner").slick({
  autoplay: true,
  autoplaySpeed: 3000,
  arrows:true,
});


$(".project-PortfolioDetail").slick({
  arrows: true,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,

  prevArrow: $('.project-prev'),
  nextArrow: $('.project-next'),

});


$(".blog-slider_first").slick({
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
});

$(".blog-slider_second").slick({
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
});



$(".header-slider_homeStyle1").slick({
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
});

$(".header-slider_homeStyle2").slick({
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
});

$(".products-block_home1Slide").slick({
  arrows: true,
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 1,
});


$(".product-block_home2Style").slick({
  arrows: true,
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
});

$(".product-block_home2Recom").slick({
  arrows: true,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
});

$(".news-block_home2").slick({
  arrows: true,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
});


$(".news-block-gallery_home2").slick({
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
});

$(".category-slider_blogDetail").slick({
  arrows: true,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,

  prevArrow: $('.category-arrow-prev'),
  nextArrow: $('.category-arrow-next'),
});


$(".inter-block_cart").slick({
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 1,
});


$(".product-block-items-inner_PrList").slick({
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
});

$(".product-block-inner_PrList").slick({
  arrows:true,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,

  prevArrow: $('.product-block-nav-prev'),
  nextArrow: $('.product-block-nav-next'),
});


$('.set-slider').slick({
    responsive: [
      {
        breakpoint: 375,
        settings: {
          arrows:false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
          centerMode: true,
          centerPadding: "30px",
        }
      },
      {
        breakpoint: 770,
        settings: {
          arrows:false,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
          dots: true,
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
          dots: true,
        }
      }
    ]
  });

