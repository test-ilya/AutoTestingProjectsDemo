import { test, expect } from '../Fixtures/LoginFixture';
import { ProfilePage } from '../PageObjectClasses/ProfilePage';
import { MainPage } from '../PageObjectClasses/MainPage';

test.beforeEach('Login in https://github.com', async ({ login }) => { });

test('Open User Profile', async ({ page }) => {
    const profilePage = new ProfilePage(page);
    const mainPage = new MainPage(page);
 
    await page.goto('https://github.com');
    
    // Open user sidebar menu
    await mainPage.openSideBarMenu();

    // CLick 'Your profile' in sidebar menu
    await mainPage.openYourProfile();

    // Check open profile with user data
    await expect(
        page.locator(profilePage.userInfoSelector('test-ilya'))
    ).toBeVisible({ timeout: 30000 });
});