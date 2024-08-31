import { test, expect } from '@playwright/test';
import { MainPage } from '../PageObjectClasses/MainPage';
import { SearchResultPage } from '../PageObjectClasses/SearchResultPage';

const url = 'https://github.com/';
const searchValue = 'test-ilya';
;
test('Searching Profile', async ({ page }) => {
    const mainPage = new MainPage(page);
    const searchResultPage = new SearchResultPage(page);

    // Open https://github.com/
    await page.goto(url);

    // Click search button
    await mainPage.clickSearchBtn();

    // Check open search form
    await expect(
        page.locator(mainPage.searchFormSelector)
    ).toBeVisible();

    // Set value in search string
    await mainPage.setSearchValue(searchValue);

    // Click Enter
    await page.keyboard.press('Enter');

    // Wait and check open result list
    await expect(
        page.locator(searchResultPage.resulListSelector)
    ).toBeVisible();

    // Click filter by Users
    await searchResultPage.filterByUsers();

    // Check search result by "test-ilya"
    await expect(
        page.locator(searchResultPage.resulListSelector)
    ).toContainText(searchValue);
});