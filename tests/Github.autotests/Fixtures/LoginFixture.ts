import { expect, test as loginTest } from '@playwright/test';
import { LoginPage } from '../PageObjectClasses/LoginPage';

type LoginFixture = {
  login: LoginPage;
};

export const test = loginTest.extend<LoginFixture>({
    login: async ({ page }, use) => {

    const login = new LoginPage(page);

    await login.openLoginPage();
    await login.setLogin('Set user login');
    await login.setPassword('Set user password');
    await login.clickSignIn();

    await expect(
        page.locator(login.userLoginInfoSelector('test-ilya'))
    ).toBeVisible({ timeout: 30000 });

    await use(login);
  },
});
export { expect } from '@playwright/test';