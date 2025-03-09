import { test } from '@fixtures';

const loginUsers = [
    {
        email: 'ichiro@example.com',
        password: 'password'
    },
    {
        email: 'sakura@example.com',
        password: 'pass1234'
    },
];

test.describe('ログイン機能', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/ja/');
    });

    test.afterEach(async ({ mypagePage }) => {
        await mypagePage.clickHeaderMenu('ログアウト');
    });

    for (const user of loginUsers) {
        test(`ログイン成功: ${user.email}`, async ({ homePage, loginPage, mypagePage }) => {
            await homePage.clickHeaderMenu('ログイン');
            await loginPage.login(user.email, user.password);
            await mypagePage.assertLoginSuccess();
        });
    }
});
