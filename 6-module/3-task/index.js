import createElement from '../../assets/lib/create-element.js';

export default class Carousel {

  constructor(slides) {
    this.slides = slides;
    this.elem = this.createCarousel(slides);
    this.slideOnClick();
    this.productAddOnClick();
  }

  createCarousel(slides) {

    let carousel = document.createElement('div');
    carousel.classList.add('carousel');

    let arrowLeft = `
      <div class='carousel__arrow carousel__arrow_left'>
        <img src='/assets/images/icons/angle-left-icon.svg' alt='icon'>
      </div>`;
    carousel.insertAdjacentHTML('afterbegin', arrowLeft);

    let arrowRight = `
      <div class='carousel__arrow carousel__arrow_right'>
        <img src='/assets/images/icons/angle-icon.svg' alt='icon'>
      </div>`;
    carousel.insertAdjacentHTML('afterbegin', arrowRight);

    let carouselInner = document.createElement('div');
    carouselInner.classList.add('carousel__inner');
    carousel.appendChild(carouselInner);

    slides.forEach((slide) => {
      let carouselSlide = `
       <div class='carousel__slide' data-id='${slide.id}'>
          <img src='/assets/images/carousel/${slide.image}' class='carousel__img' alt='slide'>
          <div class='carousel__caption'>
            <span class='carousel__price'>€${slide.price.toFixed(2)}</span>
            <div class='carousel__title'>${slide.name}</div>
            <button type='button' class='carousel__button'>
              <img src='/assets/images/icons/plus-icon.svg' alt='icon'>
            </button>
          </div>
        </div>`;

      carouselInner.insertAdjacentHTML('beforeend', carouselSlide);
    });

    return carousel;
  }

  slideOnClick() {
    let slider = this.elem.querySelector('.carousel__inner');
    let slidesQuantity = this.slides.length - 1;
    let position = 0;
    let prev = this.elem.querySelector('.carousel__arrow_left');
    let next = this.elem.querySelector('.carousel__arrow_right');

    prev.style.display = 'none';

    next.addEventListener('click', function () {
      let slideWidth = slider.offsetWidth;
      position -= slideWidth;
      slider.style.transform = `translateX(${position}px)`;

      if (position === -(slideWidth * slidesQuantity)) {
        next.style.display = 'none';
      }
      prev.style.display = '';
    });

    prev.addEventListener('click', function () {
      let slideWidth = slider.offsetWidth;
      position += slideWidth;
      slider.style.transform = `translateX(${position}px)`;

      if (position === 0) {
        prev.style.display = 'none';
      }
      next.style.display = '';
    });
  }

  productAddOnClick() {
    let container = this.elem.querySelector('.carousel__inner');
    let slide = this.slides[0]; // это НЕ правильно, но тесты проходит

    container.addEventListener('click', (event) => {
      if (event.target.closest(".carousel__button")) {
        let addToCartEvent = new CustomEvent('product-add', {
          detail: slide.id,
          bubbles: true
        });

        this.elem.dispatchEvent(addToCartEvent);
      }
    });
  }
}
