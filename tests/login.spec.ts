import { test } from '@fixtures';

test.describe('ログイン機能', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/ja/');
    });

    /**
     * 1-1 ログイン成功
     */
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

    for (const user of loginUsers) {
        test(`ログイン成功: ${user.email}`, async ({ homePage, loginPage, mypagePage }) => {
            await homePage.clickHeaderMenu('ログイン');
            await loginPage.login(user.email, user.password);
            await mypagePage.assertLoginSuccess();
        });
    }

    /**
     * 1-2 ログイン失敗
     */
    const errorMessages = {
        required: 'このフィールドを入力してください。',
        invalid: 'メールアドレスまたはパスワードが違います。',
        invalidEmail: 'メールアドレスを入力してください。',
    };

    const loginUsersWithErrorMessage = [
        {
            email: '',
            password: '',
            errorField: ['email', 'password'],
            expectedErrorMessage: errorMessages.required
        },
        {
            email: '',
            password: 'password',
            errorField: ['email'],
            expectedErrorMessage: errorMessages.required
        },
        {
            email: 'sakura@example.com',
            password: '',
            errorField: ['password'],
            expectedErrorMessage: errorMessages.required
        },
        {
            email: 'mailexmaple.com',
            password: 'password',
            errorField: ['email'],
            expectedErrorMessage: errorMessages.invalidEmail
        },
        {
            email: 'mitouroku@example.com',
            password: 'password',
            errorField: ['email', 'password'],
            expectedErrorMessage: errorMessages.invalid
        },
        {
            email: 'sakura@example.com',
            password: 'pass',
            errorField: ['email', 'password'],
            expectedErrorMessage: errorMessages.invalid
        },
        {
            email: 'mitouroku@example.com',
            password: 'password12345',
            errorField: ['email', 'password'],
            expectedErrorMessage: errorMessages.invalid
        }
    ];

    for (const user of loginUsersWithErrorMessage) {
        test(`ログイン失敗: ${user.email} ${user.password}`, async ({ homePage, loginPage }) => {
            await homePage.clickHeaderMenu('ログイン');
            await loginPage.login(user.email, user.password);
            for (const field of user.errorField) {
                await loginPage.assertErrorMessageHasExpectedMessage(field as errorField, user.expectedErrorMessage);
            }
        });
    }
});
