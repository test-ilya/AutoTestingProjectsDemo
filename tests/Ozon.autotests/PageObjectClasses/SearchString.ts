import { Page } from '@playwright/test';

export class SearchString{
    private readonly searchStringSelector = '//div[@data-widget="searchBarDesktop"] //input[@placeholder="Искать на Ozon"]';
    private readonly tagMobileSelector = '[data-search-item-text=" телефон"]';
    private readonly searchButtonSelector = '//button[@aria-label="Поиск"]';

    constructor(public page: Page) { }

    public async setValueInSearchString(value: string) {
       await this.page.fill(this.searchStringSelector, `${value}`);
    }

    public async setTagMobile() {
        await this.page.click(this.tagMobileSelector);
    }

    public async clickSearchButton() {
        await this.page.click(this.searchButtonSelector);
    }  
}
