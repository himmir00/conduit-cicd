import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly globalFeedTab: Locator;
  readonly newArticleLink: Locator;
  readonly settingsLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.globalFeedTab = page.getByRole('button', { name: 'Global Feed' });
    this.newArticleLink = page.getByRole('link', { name: 'New Article' });
    this.settingsLink = page.getByRole('link', { name: 'Settings' });
  }

  async verifyLoggedIn() {
    await expect(this.newArticleLink).toBeVisible();
    await expect(this.settingsLink).toBeVisible();
  }

  async clickNewArticle() {
    await this.newArticleLink.click();
  }
  
  async verifyArticlePreviewVisible(title: string) {
      await this.globalFeedTab.click();
      // Wait for feed to load and check if text exists
      await expect(this.page.getByText(title).first()).toBeVisible();
  }
}