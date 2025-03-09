import { Page, expect } from "@playwright/test";
import { BasePage } from "@pages/basePage";
import { HeaderMenu } from "@components/headerMenu";

export class HomePage extends BasePage {
    private readonly headerMenu: HeaderMenu;

    constructor(page: Page) {
        super(page);
        this.headerMenu = new HeaderMenu(page);
    }

    /**
     * ヘッダーメニューのクリック
     * @param menu - クリックするメニュー項目
     */
    async clickHeaderMenu(menu: headerMenuList) {
        await this.headerMenu.clickHeaderMenu(menu);
    }

    async assertLogoutSuccess() {
        await expect(this.page).toHaveURL('index.html?');
    }
}
