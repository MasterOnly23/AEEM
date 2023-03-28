const slider = document.querySelector('.fotos-testimonios');
let isSliding = false;

function slide() {
  if (!isSliding) {
    isSliding = true;
    const firstImage = slider.firstElementChild;
    slider.appendChild(firstImage);
    slider.addEventListener('transitionend', function endSlide() {
      isSliding = false;
      slider.style.transition = 'none';
      slider.removeEventListener('transitionend', endSlide);
    });
    slider.style.transition = 'transform 1s';
    slider.style.transform = 'translateX(-450px)';
  }
}

setInterval(slide);
