import { BasePage } from "../BasePage/BasePage";

export class InvestPage extends BasePage {
    private readonly investPageSelector = '[data-item-name="Инвестиции"]';
    private readonly slidePulseSelector = '//div[@data-test="panel slides"] //p[text() = "Пульс"]';
    public readonly focusPulseTabSelector = '//a[@aria-current="page"] //span[text() = "Пульс"]';

    public async openInvestTab() {
        await this.openPageTab('Инвестиции');
    }

    public async clickInvestTilte() {
        await this.page.click(this.investPageSelector);
    }

    public async clickSlidePulse() {
        await this.page.click(this.slidePulseSelector);
    }

    public async isFocusInvestTabDisplayed() {
        await this.page.isVisible(this.focusPulseTabSelector);
    }
}