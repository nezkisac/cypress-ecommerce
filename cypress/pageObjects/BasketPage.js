class BasketPage {
    selectQuantity() {
        return cy.get('input[class="input--small-mobile basketQty"]');
    }

    addToBasket() {
        cy.get('button[class="btn--small btn--primary btn--icon__fa-cart addToBasket__button--productDetail"]').click();
    }

    getMiniBasketQuantityValue() {
        return cy.get('div[class="masthead__main masthead__container"] strong[class="masthead__itemCount"]');
    }

    getBasketItem() {
        return cy.get('div[class="basketTable__descriptionText"]');
    }
}

export default BasketPage;
