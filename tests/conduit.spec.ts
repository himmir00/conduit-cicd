import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { EditorPage } from '../pages/EditorPage';

test.describe('Conduit App Tests', () => {
  let loginPage: LoginPage;
  let homePage: HomePage;
  let editorPage: EditorPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    editorPage = new EditorPage(page);

    const email = process.env.USER_EMAIL!;
    const password = process.env.USER_PASSWORD!;

    await loginPage.goto();
    await loginPage.login(email, password);
  });

  test('Test Case 1: Verify successful login', async ({ page }) => {
    // Verify we are redirected to home and see the "New Article" button
    await expect(page).toHaveURL('https://conduit.bondaracademy.com/');
    await homePage.verifyLoggedIn();
  });

  test('Test Case 2: Create a new article', async ({ page }) => {
    const articleTitle = `Playwright Test Article ${Date.now()}`;
    
    await homePage.clickNewArticle();
    await editorPage.createArticle(
      articleTitle, 
      'This is a test description', 
      'This is the body of the article.', 
      'playwright,automation'
    );

    // Verify we are redirected to the article page
    await expect(page.getByRole('heading', { name: articleTitle })).toBeVisible();
  });

  test('Test Case 3: Verify Global Feed content', async ({ page }) => {
     // Just ensuring the feed loads and contains at least one article
    //  await homePage.globalFeedTab.click();
     await page.getByText('Global Feed').click();
     await expect(page.locator('app-article-preview').first()).toBeVisible();
  });
});