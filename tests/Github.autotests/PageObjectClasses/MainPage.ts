import { Page } from '@playwright/test';

export class MainPage {
    private readonly searchBtnSelector = '[data-target="qbsearch-input.inputButton"]';
    private readonly searchStringSelector = '[id="query-builder-test"]';
    public readonly searchFormSelector = '[data-target="qbsearch-input.queryBuilderContainer"]';

    constructor(public page: Page) { }

    public async clickSearchBtn() {
        await this.page.click(this.searchBtnSelector);
    }

    public async setSearchValue(searchValue: string) {
        await this.page.fill(this.searchStringSelector, searchValue);
    }
}
