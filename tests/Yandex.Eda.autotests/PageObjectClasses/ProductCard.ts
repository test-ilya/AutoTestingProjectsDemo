import { Page } from '@playwright/test';

export class ProductCard {
    private readonly shopCardSelector = (shopName: string) => `//div[@class = "UiKitPlaceInfo_upperInfo"] //*[contains(text(), "${shopName}")]`;
    private readonly productCardSelector = (productName: string) => `//div[@data-testid="product-card-root"] //*[contains(@aria-label, "${productName}")]`;
    private readonly addProductSelector = '//div[@class="UiKitProductFullCard_priceRow"] //*[text() = "Добавить"]';
    private readonly shoppingCart = '[data-testid="desktop-retail-header-cart-button"]';
    private readonly productInShoppingCartSelector = (productName: string) => `//div[@data-testid="desktop-popup"] //*[contains(text(), "${productName}")]`;

    constructor(public page: Page) {};

    public async clickShopCard(shopName: string) {
        await this.page.click(this.shopCardSelector(shopName));
    }

    public async clickProductCard(productName: string) {
        await this.page.click(this.productCardSelector(productName));
    }

    public async clickAddProduct() {
        await this.page.click(this.addProductSelector);
    }

    public async clickShoppingCart() {
        await this.page.click(this.shoppingCart);
    }

    // public async isDisplayedProductInShoppingCart(productName: string) {
    //     return await this.page.isDisabled(this.productInShoppingCartSelector(productName));
    // }

}