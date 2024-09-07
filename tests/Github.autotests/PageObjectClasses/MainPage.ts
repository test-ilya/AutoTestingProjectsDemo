import { Page } from '@playwright/test';

export class MainPage {
    private readonly searchBtnSelector = '[data-target="qbsearch-input.inputButton"]';
    private readonly searchStringSelector = '[id="query-builder-test"]';
    public readonly searchFormSelector = '[data-target="qbsearch-input.queryBuilderContainer"]';
    private readonly sideBarMenuSelector = '[aria-label="Open user navigation menu"]';

    constructor(public page: Page) { }

    public async clickSearchBtn() {
        await this.page.click(this.searchBtnSelector);
    }

    public async setSearchValue(searchValue: string) {
        await this.page.fill(this.searchStringSelector, searchValue);
    }

    public async openSideBarMenu() {
        await this.page.locator(this.sideBarMenuSelector).click();
    }

    public async openYourProfile() {
        await this.page.getByLabel('Your profile').click();
    }
}
