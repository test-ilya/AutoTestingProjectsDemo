import { test, expect } from '@playwright/test';
import { SearchString } from '../../../PageObjectClasses/SearchString';
import { Filter } from '../../../PageObjectClasses/Filter';

const itemValue = 'Nokia 8800';
const categoryName = 'Мобильные телефоны';

// Можно сделать ещё один класс под результаты поиска, пока для наглядности пусть тут будет селектор
const resultSearchSelector = `//div[@data-widget="searchResultsV2"] //span[contains(text(), "${itemValue}")]`;

test('Поиск товара через строку поиска', async ({ page }) => {
    const searchString = new SearchString(page);
    const filter = new Filter(page);

    // Открыть сайт https://www.ozon.ru
    await page.goto('https://www.ozon.ru/');

    // Ввести в строку поиска "Nokia 8800"
    await searchString.setValueInSearchString(itemValue);

    // Кликнуть на кнопку поиска
    await searchString.clickSearchButton();

    // В фильтрах выбрать категорию "Мобильные телефоны"
    await filter.setFilterCategory(categoryName);

    // Проверить, что на странице отображается информация по мобильным телефонам "Nokia 8800"
    await expect(page.locator(resultSearchSelector)).toBeVisible();
});