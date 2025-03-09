import { Page } from "@playwright/test";

export class BasePage {
    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * ヘッダーメニューのクリック
     * @param menu - クリックするメニュー項目
     */
    async clickHeaderMenu(menu: headerMenuList) {
        // 実装はサブクラスで行う
        throw new Error("Method not implemented");
    }
}
