import { BasePage } from "../PageObjectClasses/BasePage";

export class VacancyPage extends BasePage {
    private readonly jobPageSelector = '[data-item-type="/career/"]';
    private readonly viewVacanciesSelector = '//*[@data-test="htmlTag button"] //span[text() = "Смотреть вакансии"]';
    private readonly filterOptionJobItSelector = '//div[@data-qa-type="fitem:category"] //span[@data-qa-type="fitem:option:it.fieldWrapper"]';
    private readonly showMoreSelector = '[data-qa-type="fitem:specialty:show-more-btn.content"]';
    private readonly filterOptionTestingSelector = '//div[@data-qa-type="fitem:specialty"] //input[@data-qa-type="fitem:option:testirovanie.input.input"]';
    public readonly listVacancySelector = (vacancyName: string) => `//div[@data-test="atom"] //div[contains(text(), "${vacancyName}")]`;

    // Кликнуть на "Работа в Т-Банке"
    public async clickJobTilte() {
        await this.page.click(this.jobPageSelector);
    }

    // Кликнуть на "Смотреть вакансии"
    public async clickViewVacancies() {
        await this.page.click(this.viewVacanciesSelector);
    }

    // В фильтре выбрать "Направление" - "Работа в ИТ"
    public async setFilterJobInIt() {
        await this.page.click(this.filterOptionJobItSelector);
    }

    // В фильтре "Профессии" кликнуть на "Показать еще"
    public async clickShowMore() {
        await this.page.click(this.showMoreSelector);
    }

    // В фильтре выбрать "Профессии" - "Тестирование"
    public async setFilterTestingProfession() {
        await this.page.click(this.filterOptionTestingSelector);
    }
}