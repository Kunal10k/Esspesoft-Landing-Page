$(document).ready(function () {
  $('.my-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false, // ✅ Disable dots
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1 // on very small screens
      },
      600: {
        items: 2 // on medium screens
      },
      1000: {
        items: 3 // on large screens
      }
    }
  });
});




$(".clints").owlCarousel({
  items: 1,
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  nav: true,
  dots: true,
  animateOut: 'fadeOut'
});



$(document).ready(function () {
  $('.testimonial-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 6000,
    smartSpeed: 800,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1024: {
        items: 3
      }
    }
  });
});





const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});




$('.clints-logo').owlCarousel({
  loop: true,
  margin: 40,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  dots: false,
  nav: false,
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 4
    },
    1000: {
      items: 6
    }
  }
});


  // setInterval(function () {
  //   // Reload the page with a unique parameter to bypass cache
  //   const url = window.location.href.split('?')[0];
  //   const timestamp = new Date().getTime();
  //   window.location.href = `${url}?cacheBust=${timestamp}`;
  // }, 3000); // 3000 milliseconds = 3 seconds

