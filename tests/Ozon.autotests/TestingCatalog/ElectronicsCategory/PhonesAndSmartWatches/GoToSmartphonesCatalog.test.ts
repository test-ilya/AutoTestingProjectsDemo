import { test, expect } from '@playwright/test';

const catalogButtonSelector = '//div[@data-widget="catalogMenu"] //div[text() = "Каталог"]';
const electronicsCatalogSelector = '//span[text() = "Электроника"]';
const smartphonesCatalogSelector = '//a[text() = "Смартфоны"]';
const isDisplayedSmartphonesCatalogSelector = '//div[@data-widget="resultsHeader"] //h1[text() = "Смартфоны"]';

test('Переход в каталог "Смартфоны"', async ({ browser }) => {
    const context = browser.newContext();
    const pageOne = await (await context).newPage();

    // Переходим на сайта https://www.ozon.ru'
    await pageOne.goto('https://www.ozon.ru');

    // Кликаем на кнопку "Каталог"
    await pageOne.click(catalogButtonSelector);

    // Наводим на каталог "Элаектроника"
    await pageOne.hover(electronicsCatalogSelector);

    // Кликаем на каталог "Смартфоны"
    await pageOne.click(smartphonesCatalogSelector);

    const pagePromise = (await context).waitForEvent('page');
    const pageTwo = await pagePromise;

    // Проверяем? что на открытой странице отображается раздел "Смартфоны"
    await expect(pageTwo.locator(isDisplayedSmartphonesCatalogSelector)).toBeVisible();
});