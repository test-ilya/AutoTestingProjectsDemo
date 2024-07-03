import { test, expect } from '@playwright/test';
import { DeliveryAdress } from '../PageObjectClasses/DeliveryAdress';
import { LanguageChange } from '../PageObjectClasses/LanguageChange';
import { Languages } from '../TestingChangeLanguage/LanguagesTestData';

test('Выбор адреса доставки', async ({ page })  => {
    const languageChange = new LanguageChange(page);
    const deliveryAdress = new DeliveryAdress(page);
    const adress = '1-й Красногвардейский проезд, 19';

    await page.goto('https://eda.yandex.ru');

    // Изменить язык страницы на Русский
    await languageChange.changeLanguage(Languages.Russian);

    // Открыть модальное окно выбора адреса доставки
    await deliveryAdress.openDeliveryAdressForm();

    // Выбрать адрес доставки
    await deliveryAdress.setDeliveryAdress(adress);

    // Открыть поп-ап выбранных адресов
    await deliveryAdress.openDeliveryAdressForm();
    
    // Проверить, что адрес доставки выбран
    expect(page.locator('[class="DesktopAddressButton_option"]')).toContainText(adress);
});
//test