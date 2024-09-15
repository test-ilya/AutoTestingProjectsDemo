import { test, expect } from '../Fixtures/LoginFixture';
import { ProfilePage } from '../PageObjectClasses/ProfilePage';

const userLogin = 'test-ilya';
const repositoryName = 'Set repository name';
const repositoryLinkName = 'Set repository link name';

test.beforeEach('Login in https://github.com', async ({ login }) => { });

test('Deleting repository', async ({ page }) => {

    const profilePage = new ProfilePage(page);

    // Open user profile
    await page.goto(`https://github.com/${userLogin}`);

    // Open repositories tab
    await profilePage.openRepositoriesTab();

    // Open repository
    await profilePage.openRepository(repositoryName);

    // Check repository is open
    await expect(
        page.locator(profilePage.repositoryTitleSelector(repositoryName))
    ).toBeVisible({ timeout: 30000 });

    // Open settings tab
    await profilePage.openSettingsTab();

    // Click "Delete this repository"
    await profilePage.clickDeleteThisRepostiory();

    // Confirm delete repostiory
    await profilePage.clickConfirmDeleteRepository(repositoryLinkName);

    // Check repository is deleted
    await expect(
        page.locator(profilePage.repositoriesListTabSelector)
    ).not.toContainText(repositoryName);
});