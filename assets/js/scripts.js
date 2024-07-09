/*
* Situs Panesse <situs.ok@gmail.com>
* https://bio.site/situspanesse
*/
var bgCars = ['bg-carousel2.jpg', 'bg-carousel3.jpg'];
var bgCarIdx = 0;

function changeBackground() {
  if (bgCarIdx == 0) {
    bgCarIdx = 1;
  } else if (bgCarIdx == 1) {
    bgCarIdx = 0;
  }

  var bgCarElem = document.getElementById('bg-carousel');
  bgCarElem.classList.add('bg-carousel-fade');

  setTimeout(() => {
    bgCarElem.style.backgroundImage = 'url(assets/images/' + bgCars[bgCarIdx] + ')';
    bgCarElem.classList.remove('bg-carousel-fade');
  }, 1000)
}

setInterval(changeBackground, 5000);

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  const backToTopButton = document.getElementById("backToTop");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopButton.style.display = "block";
  } else {
      backToTopButton.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
