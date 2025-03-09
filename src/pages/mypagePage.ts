import { expect, Page } from "@playwright/test";
import { BasePage } from "@pages/basePage";
import { HeaderMenu } from "@components/headerMenu";

export class MypagePage extends BasePage {
    private readonly headerMenu: HeaderMenu;

    constructor(page: Page) {
        super(page);
        this.headerMenu = new HeaderMenu(page);
    }

    /**
     * ヘッダーメニューのクリック
     * @param menu - クリックするメニュー項目
     */
    async clickHeaderMenu(menu: headerMenuListWithAuth) {
        await this.headerMenu.clickHeaderMenu(menu);
    }

    async assertLoginSuccess() {
        await expect(this.page).toHaveURL("mypage.html");
    }
}
