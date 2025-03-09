import { test as base } from '@playwright/test';
import { HomePage } from '@pages/homePage';
import { LoginPage } from '@pages/loginPage';
import { MypagePage } from '@pages/mypagePage';

type Fixtures = {
    homePage: HomePage;
    loginPage: LoginPage;
    mypagePage: MypagePage;
}

export const test = base.extend<Fixtures>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    mypagePage: async ({ page }, use) => {
        await use(new MypagePage(page));
    },
});

export { expect } from '@playwright/test';
