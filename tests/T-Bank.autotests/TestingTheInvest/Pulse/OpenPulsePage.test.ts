import { test, expect } from '@playwright/test';
import { InvestPage } from '../../PageObjectClasses/InvestPage/InvestPage';

const url = 'https://www.tbank.ru';
const urlInvest = 'https://www.tbank.ru/invest/';
const urlInvestPulse = 'https://www.tbank.ru/invest/pulse/?internal_source=invest_landing_menu';

test('Переход в "Пульс" с главной страницы', async ({ page }) => {
    const invest = new InvestPage(page);

    // Перейти на главную страницу https://www.tbank.ru
    await page.goto(url);

    // Навести курсор на "Частным лицам" в навигационном меню
    await invest.openNavMenu('Частным лицам')

    // Кликнуть на заголовок "Инвестиции"
    await invest.clickInvestTilte();

    // Проверить, что открылась страница "Инвестиции"
    await expect(page).toHaveURL(urlInvest);

    // Кликнуть на панели "Пульс"
    await invest.clickSlidePulse();

    // Проверить, что открылась страница "Пульс"
    await expect(page).toHaveURL(urlInvestPulse);

    // Проверить, что на странице открыта вкладка "Пульс"
    await expect(page.locator(invest.focusPulseTabSelector)).toBeVisible();
});