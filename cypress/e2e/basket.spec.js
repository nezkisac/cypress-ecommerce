import BasketPage from '../pageObjects/BasketPage';

describe('Basket Functionality', () => {
    const basketPage = new BasketPage();
    const productDetailUrl = '/product/xerox-performer-a4-white-80gsm-paper/ilosew';

    it('AC6: Should update mini-basket and show product in basket details', () => {
        cy.visit(productDetailUrl);
        basketPage.selectQuantity().invoke('val').then(value => {
            const quantity = parseInt(value, 10);
            expect(quantity).to.be.greaterThan(0);
        });
        basketPage.addToBasket();
        basketPage.getMiniBasketQuantityValue().should('contain', '(1)');
        cy.visit('/basket/details');
        basketPage.getBasketItem().should('contain', 'Xerox PerFormer A4 White 80gsm Paper');
    });
});
