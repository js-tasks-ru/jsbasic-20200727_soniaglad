import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.elem = this.createProductCard(product);
    this.productAdd();
  }

  // функция по созданию карточки
  createProductCard(product) {

    // создаем контейнер карточки товара
    let card = document.createElement('div');
    card.classList.add('card');


    // создаем верхний блок карточки
    let cardTop = document.createElement('div');
    cardTop.classList.add('card__top');
    card.appendChild(cardTop);

    let cardImage = document.createElement('img');
    cardImage.src = `/assets/images/products/${product.image}`;
    cardImage.classList.add('card__image');
    cardImage.alt = 'product';
    cardTop.appendChild(cardImage);

    let cardPrice = document.createElement('span');
    cardPrice.classList.add('card__price');
    cardPrice.textContent = `€${product.price.toFixed(2)}`;
    cardTop.appendChild(cardPrice);


    // создаем нижний блок карточки
    let cardBody = document.createElement('div');
    cardBody.classList.add('card__body');
    card.appendChild(cardBody);

    let cardTitle = document.createElement('div');
    cardTitle.classList.add('card__title');
    cardTitle.textContent = product.name;
    cardBody.appendChild(cardTitle);

    let button = document.createElement('button');
    button.classList.add('card__button');
    cardBody.appendChild(button);

    let icon = document.createElement('img');
    icon.src = `/assets/images/icons/plus-icon.svg`;
    icon.alt = 'icon';
    button.appendChild(icon);

    return card;
  }

  productAdd() {
    let container = this.elem;

    container.addEventListener('click', (event) => {
      if (event.target.closest(".card__button")) {
        let addToCartEvent = new CustomEvent('product-add', {
          detail: this.product.id,
          bubbles: true
        });

        this.elem.dispatchEvent(addToCartEvent);
      }
    });
  }
}
