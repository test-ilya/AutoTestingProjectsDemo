import { test, expect } from '@playwright/test';
import { ProductCard } from '../PageObjectClasses/ProductCard';
import { SearchString } from '../PageObjectClasses/SearchString';
import { LanguageChange } from '../PageObjectClasses/LanguageChange';
import { Languages } from '../TestingChangeLanguage/LanguagesTestData';
import { DeliveryAdress } from '../PageObjectClasses/DeliveryAdress';

const shopName = 'Пятёрочка';
const productName = 'Бананы Global Village';
const adress = '1-й Красногвардейский проезд, 19';

test('Добавление товара в корзину', async ({ page }) => {
    const productCard = new ProductCard(page);
    const languageChange = new LanguageChange(page);
    const searchString = new SearchString(page);
    const deliveryAdress = new DeliveryAdress(page);

    await page.goto('https://eda.yandex.ru');

    // Изменить язык страницы на Русский
    await languageChange.changeLanguage(Languages.Russian);

    // Открыть модальное окно выбора адреса доставки
    await deliveryAdress.openDeliveryAdressForm();

    // Выбрать адрес доставки
    await deliveryAdress.setDeliveryAdress(adress);

    // Выполнить поиск магазина
    await searchString.setSearchInput(shopName);
    await searchString.clickSearchButton();

    // Открыть карточку магазина
    await productCard.clickShopCard(shopName);

    // Выполнить поиск товара
    await searchString.setSearchInput(productName);

    // Перейти в карточку товара
    await productCard.clickProductCard(productName);

    // // Добавить товар в корзину
    await productCard.clickAddProduct();

    // // Открыть поп-ап с корзиной
    await productCard.clickShoppingCart();

    // Проверить, что товар отображается в корзине
    const locator = page.locator(`//div[@data-testid="desktop-popup"] //*[contains(text(), "${productName}")]`);
    await expect(locator).toBeVisible();

});