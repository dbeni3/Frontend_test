$('.slick-slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplayspeed: 1800,
    slidesToShow: 1,
    pauseOnDotsHover: true,
    prevArrow: '<span class="prev-Arrow"><svg width="18" height="30" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5704 30L18 27.5704L5.43826 15L18 2.42964L15.5704 0L0.561747 15L15.5704 30Z" fill="#212121" /></svg></span>',
    nextArrow: ' <span class="next-Arrow"><svg width="18" height="30" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.42964 30L0 27.5704L12.5617 15L0 2.42964L2.42964 0L17.4383 15L2.42964 30Z" fill="#212121"/></svg></span>'
});
function myFunction() {
    var x = document.getElementById("mobile-links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

var i = 0;
setInterval(() => {
    var url = ["image36.jpg", "image37.jpg", "image38.jpg"];
    document.getElementById("bg").style.backgroundImage = `url('./assets/${url[i]}')`;
    i == 2 ? i = 0 : i++;
}, 7000);