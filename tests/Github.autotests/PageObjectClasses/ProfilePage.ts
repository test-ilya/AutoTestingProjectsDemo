import { Page } from '@playwright/test';

export class ProfilePage {
    public readonly userInfoSelector = (userLogin: string) => `//div[@class="Layout-sidebar"] //span[contains(text(), "${userLogin}")]`;
    
    constructor(public page: Page) { }

    
}
