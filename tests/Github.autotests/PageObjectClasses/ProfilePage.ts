import { Page } from '@playwright/test';

export class ProfilePage {
    public readonly userInfoSelector = (userLogin: string) => `//div[@class="Layout-sidebar"] //span[contains(text(), "${userLogin}")]`;
    private readonly repositoriesTabSelector = '[id="repositories-tab"]';
    public readonly repositoriesListTabSelector = '//div[@id="user-repositories-list"]';
    private readonly repositorySelector = (repositoryName: string) => `//div[@id="user-repositories-list"] //*[contains(text(), "${repositoryName}")]`;
    public readonly repositoryTitleSelector = (repositoryName: string) => `//div[@id="repo-title-component"] //*[contains(text(), "${repositoryName}")]`;
    private readonly settingsTabSelector = '[id="settings-tab"]';
    private readonly settingsSelector = '[data-item-id="repo_settings"]';
    private readonly deleteRepositorySelector = '[id="dialog-show-repo-delete-menu-dialog"]';
    private readonly repoDeleteMenuDialogSelector = '[id="repo-delete-menu-dialog"]'
    private readonly confirmDeleteRepositorySelector = '[id="repo-delete-proceed-button"]';
    private readonly repoNameForConfirmDeleteSelector = '[data-test-selector="repo-delete-proceed-confirmation"]';
    
    constructor(public page: Page) { }

    public async openRepositoriesTab() {
        await this.page.click(this.repositoriesTabSelector);
        await this.page.isVisible(this.repositoriesListTabSelector, { timeout: 5000 });
    }

    public async openRepository(repositoryName: string) {
        await this.page.click(this.repositorySelector(repositoryName));
    }

    public async openSettingsTab() {
        await this.page.click(this.settingsTabSelector);
        await this.page.isVisible(this.settingsSelector, { timeout: 5000 });
    }

    public async clickDeleteThisRepostiory() {
        await this.page.click(this.deleteRepositorySelector);
        await this.page.isVisible(this.repoDeleteMenuDialogSelector, { timeout: 5000 });
    }

    public async clickConfirmDeleteRepository(repositoryLinkName: string) {
        await this.page.click(this.confirmDeleteRepositorySelector);
        await this.page.click(this.confirmDeleteRepositorySelector);
        await this.page.fill(this.repoNameForConfirmDeleteSelector, repositoryLinkName);
        await this.page.click(this.confirmDeleteRepositorySelector);
        await this.page.isVisible(this.repositoriesListTabSelector, { timeout: 5000 });
    }
}
