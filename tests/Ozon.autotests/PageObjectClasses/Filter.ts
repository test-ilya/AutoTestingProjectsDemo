import { Page } from '@playwright/test';

export class Filter{
    private readonly filterCategorySelector = (categoryName: string) => `//div[@data-widget="filtersDesktop"] //a[text() = '${categoryName}']`;

    constructor(public page: Page) { }

    public async setFilterCategory(categoryName: string) {
        await this.page.click(this.filterCategorySelector(categoryName));
    }
}
