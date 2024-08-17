import { Page } from '@playwright/test';

export class BasePage {
    private readonly pageTabSelector = (pageTabName: string) => `//span[@data-qa-file="MenuItem"] //span[text() = "${pageTabName}"]`;
    private readonly menuValueSelector = (menuValueName: string) => `//nav[@data-test="navigation"] //span[text() = "${menuValueName}"]`;
    private readonly modalNavMenuSelector = '[data-schema-path="items"]';

    constructor(public page: Page){ }

    public async openPageTab(pageTabName: string) {
        await this.page.click(this.pageTabSelector(pageTabName));
    }

    public async openNavMenu(menuValue: string) {
        await this.page.hover(this.menuValueSelector(menuValue));
    }
}
