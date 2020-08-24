function initCarousel() {
  let slider = document.querySelector('.carousel__inner');
  let slideWidth = slider.offsetWidth;
  let prev = document.querySelector('.carousel__arrow_left');
  let next = document.querySelector('.carousel__arrow_right');
  let position = 0;

  prev.style.display = 'none';

  next.addEventListener('click', function () {
    position -= slideWidth;
    slider.style.transform = `translateX(${position}px)`;

    if (position === -(slideWidth * 3)) {
      next.style.display = 'none';
    }
    prev.style.display = '';
  });

  prev.addEventListener('click', function () {
    position += slideWidth;
    slider.style.transform = `translateX(${position}px)`;

    if (position === 0) {
      prev.style.display = 'none';
    }
    next.style.display = '';
  });
}
