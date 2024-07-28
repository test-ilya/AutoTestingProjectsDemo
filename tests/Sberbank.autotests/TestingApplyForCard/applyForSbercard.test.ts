import { test, expect } from '@playwright/test';

const card = 'Карты';
const deberCards = 'Дебетовые карты'

// TODO - можно перенести в отдельный класс:
const itemsNavigationMenuSelector = (value: string) => `//nav[@aria-label="Основное меню"] //*[text() = "${value}"]`;
const deberCardsSelector = (value: string) => `//li[@class="kitt-top-menu__item"] //*[text() = "${value}"]`
const deberCardsTitleSelector = '//span[text() = "Дебетовые карты"]';
const applyOnlineSelector = '//a[@data-test-id="Button-primary-md"] //span[text() = "Оформить онлайн"]';
// =============================================

test('Переход к подаче заявки на сберкарту', async ({ page }) => {
    // Перейти на сайт сбербанка
    await page.goto('https://www.sberbank.ru');
    
    // Кликнуть в меню навигации на "Карты"
    await page.click(itemsNavigationMenuSelector(card));

    // Кликнуть на "Дебетовые карты"
    await page.click(deberCardsSelector(deberCards));

    // Проверить, что на открывшейся странице есть заголовок "Дебетовые карты"
    expect(page.locator(deberCardsTitleSelector)).toBeVisible();

    // Кликнуть на "Оформить онлайн"
    await page.click(applyOnlineSelector);

    // TODO - Сайт Сбербанк специфичный, требует ру-сертификата, но даже с ним плохо работает... Попробовать в след.раз
});

