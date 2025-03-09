import { test, expect } from '@playwright/test';

test.describe('ログイン機能', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://hotel-example-site.takeyaqa.dev/ja/');
    });

    test('ログイン成功', async ({ page }) => {


});
