var bgCars = ['bg-carousel2.png', 'bg-carousel3.png'];
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

setInterval(changeBackground, 15000);

// Function to find elements causing horizontal overflow
function findOverflowingElements() {
  const bodyWidth = document.body.clientWidth;
  const elements = document.body.getElementsByTagName('*');
  const overflowingElements = [];

  for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const rect = element.getBoundingClientRect();
      if (rect.right > bodyWidth || rect.left < 0) {
          overflowingElements.push(element);
      }
  }

  return overflowingElements;
}

// Log the elements causing horizontal overflow
const overflowingElements = findOverflowingElements();
console.log('Elements causing horizontal overflow:', overflowingElements);
