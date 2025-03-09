import { Page } from "@playwright/test";
import { HeaderMenu } from "./components/headerMenu";

export class MypagePage {
    private readonly headerMenu: HeaderMenu;

    constructor(private page: Page) {
        this.headerMenu = new HeaderMenu(page);
    }

    async init(page: Page) {
        const expectedUrls = "mypage.html";
        await page.waitForLoadState('networkidle');
        const currentUrl = this.page.url();
        if (!currentUrl.includes(expectedUrls)) {
            throw new Error(`${currentUrl} is not the mypage page`);
        }
        return this;
    }

    async clickHeaderMenu(menu: headerMenuList) {
        await this.headerMenu.clickHeaderMenu(menu);
    }
}
