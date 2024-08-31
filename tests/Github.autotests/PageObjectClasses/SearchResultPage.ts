import { Page } from '@playwright/test';

export class SearchResultPage {
    private readonly filterByUsersSelector = '[data-testid="nav-item-users"]';
    public readonly resulListSelector = '[data-testid="results-list"]';

    constructor(public page: Page) { }

    public async filterByUsers() {
        await this.page.click(this.filterByUsersSelector);
    }
}
