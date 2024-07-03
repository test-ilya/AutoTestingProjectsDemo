import { Page } from '@playwright/test';

export class DeliveryAdress{
    private readonly adressButtonSelector = '[class="DesktopAddressButton_address"]';
    private readonly adressInputSelector = '[data-testid="address-input"]';
    private readonly setAdressSelector = (value: string) => `//*[@data-testid="address-input-suggestion"] //*[contains(text(),"${value}")]`;
    private readonly confirmButtonSelector = '[data-testid="desktop-location-modal-confirm-button"]';
    public readonly getDeliveryAdressSelector = '[data-testid="desktop-popup-list-item"]';

    constructor(public page: Page){ }

    public async openDeliveryAdressForm(){
        await this.page.click(this.adressButtonSelector);
        await this.page.waitForTimeout(2000);
    }

    public async setDeliveryAdress(value: string){
        await this.page.click(this.adressInputSelector);
        await this.page.fill(this.adressInputSelector, value);
        await this.page.waitForSelector(this.setAdressSelector(value));

        await this.page.click(this.setAdressSelector(value));
        await this.page.click(this.confirmButtonSelector);
        await this.page.waitForTimeout(3000);
    }

    public async getDeliveryAdress(){
        return this.page.getByText(this.getDeliveryAdressSelector);
    }
}
