document.addEventListener('DOMContentLoaded', (e) => {
  var copiedLogos = document.getElementById('slider-items')?.cloneNode(true)
  document.getElementById('slider')?.appendChild(copiedLogos)  
})