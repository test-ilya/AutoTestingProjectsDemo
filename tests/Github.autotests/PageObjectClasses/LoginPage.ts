import { Page } from '@playwright/test';

export class LoginPage {
    private readonly loginFieldSelector = '[id="login_field"]';
    private readonly passwordFieldSelector = '[id="password"]';
    private readonly signInBtnSelector = '[data-signin-label="Sign in"]';
    public readonly userLoginInfoSelector = (userLogin: string) => `[data-login="${userLogin}"]`;

    constructor(public page: Page) { }

    public async openLoginPage() {
        await this.page.goto('https://github.com/login');
    }

    public async setLogin(login: string){
        await this.page.fill(this.loginFieldSelector, `${login}`);
    }

    public async setPassword(password: string) {
        await this.page.fill(this.passwordFieldSelector, `${password}`);
    }

    public async clickSignIn() {
        await this.page.click(this.signInBtnSelector);
    }
}
