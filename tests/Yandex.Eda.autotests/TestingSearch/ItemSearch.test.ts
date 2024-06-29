import { test, expect } from '@playwright/test';
import { SearchString } from '../PageObjectClasses/SearchString';
import { LanguageChange } from '../PageObjectClasses/LanguageChange';
import { Languages } from '../TestingChangeLanguage/LanguagesTestData';

test('Поиска товара по названию', async ({ page }) => {
  const languageChange = new LanguageChange(page);
  const searchString = new SearchString(page);
  const donut = 'пончик';

  await page.goto('https://eda.yandex.ru');

  // Изменить язык страницы на Русский
  await languageChange.changeLanguage(Languages.Russian);

  // Выполнить поиск по значение "пончик" через строку поиска
  await searchString.setSearchInput(donut);
  await searchString.clickSearchButton();

  await page.waitForTimeout(3000);

  // Проверить, что на странице поиска присутствуют товары со значением "пончик"
  expect(page.locator(searchString.getSearchValue(donut)).first()).toBeVisible();
});
