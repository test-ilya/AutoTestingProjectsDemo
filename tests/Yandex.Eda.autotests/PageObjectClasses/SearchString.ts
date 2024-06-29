import { Page } from "@playwright/test";

export class SearchString {
    private readonly searchInputSelector = '[data-testid="search-input"]';
    private readonly searchButtonSelector = '//*[@data-testid="new-header-root"] //span[text() = "Найти"]';
    public getSearchValue = (value: string) => `//*[@data-testid="product-card-root"] //*[contains(text(),"${value}")]`;
    
    constructor(public page: Page){ }

    public async setSearchInput(value: string) {
        await this.page.click(this.searchInputSelector);
        await this.page.locator(this.searchInputSelector).fill(value);
    }

    public async clickSearchButton() {
        await this.page.click(this.searchButtonSelector);
    }
}


