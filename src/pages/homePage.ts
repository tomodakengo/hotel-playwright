import { Page } from "@playwright/test";
import { HeaderMenu } from "@components/headerMenu";

export class HomePage {
    private readonly headerMenu: HeaderMenu;

    constructor(private page: Page) {
        this.headerMenu = new HeaderMenu(page);
    }

    /**
     * ホームページの初期化
     * @param page - Playwrightのページオブジェクト
     * @returns ホームページのインスタンス
     * @throws ホームページでない場合にエラーをスロー
     */
    async init(page: Page) {
        const expectedUrls = ["/", "index.html"];
        await page.waitForLoadState('networkidle');
        const currentUrl = this.page.url();
        if (!expectedUrls.some(url => currentUrl.includes(url))) {
            throw new Error(`${currentUrl} is not the home page`);
        }
        return this;
    }

    /**
     * ヘッダーメニューのクリック
     * @param menu - クリックするメニュー項目
     */
    async clickHeaderMenu(menu: headerMenuList) {
        await this.headerMenu.clickHeaderMenu(menu);
    }
}

