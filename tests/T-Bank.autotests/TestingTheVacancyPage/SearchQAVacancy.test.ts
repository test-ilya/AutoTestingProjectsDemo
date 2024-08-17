import { test, expect } from '@playwright/test';
import { VacancyPage } from '../PageObjectClasses/VacancyPage';

const url = 'https://www.tbank.ru';
const urlInvest = 'https://www.tbank.ru/career/';

test.beforeEach('Переход на страницу "Работа в Т-Банке" с главной страницы', async ({ page }) => {
    const vacancy = new VacancyPage(page);

    // Перейти на главную страницу https://www.tbank.ru
    await page.goto(url);

     // Навести курсор на "Частным лицам" в навигационном меню
     await vacancy.openNavMenu('Еще');

     // Кликнуть на заголовок "Работа в Т-Банке"
     await vacancy.clickJobTilte();
 
     // Проверить, что открылась страница "https://www.tbank.ru/career/"
     await expect(page).toHaveURL(urlInvest);
});

test('Поиск вакансий QA-инженера', async ({ page }) => {
    const vacancy = new VacancyPage(page);

    // На открывшейся странице, кликнуть на "Смотреть вакансии"
    await vacancy.clickViewVacancies();

    // В фильтре в параметре "Направление" выбрать "Работа в ИТ"
    await vacancy.setFilterJobInIt();

    // В параметре "Профессии" кликнуть на "Показать еще"
    await vacancy.clickShowMore();

    // В параметре "Профессии" проставить чек-бокс в "Тестирование"
    await vacancy.setFilterTestingProfession();

    // Проверить, что на странице отображаются вакансии "QA-инженер"
    await expect(
        page.locator(
            vacancy.listVacancySelector('QA-инженер')
        ).first()
    ).toBeVisible({ timeout: 30000 })
});