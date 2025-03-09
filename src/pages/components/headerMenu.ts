import { Page, Locator } from "@playwright/test";

/**
 * ヘッダーメニューを操作するためのクラス
 * サイトのナビゲーションヘッダーにある各リンクやボタンへのアクセスと操作を提供します
 */
export class HeaderMenu {
    private readonly page: Page;
    private readonly link_home: Locator;
    private readonly link_plans: Locator;
    private readonly link_register: Locator;
    private readonly link_mypage: Locator;
    private readonly link_login: Locator;
    private readonly button_logout: Locator;

    /**
     * HeaderMenuクラスのコンストラクタ
     * @param page - Playwrightのページオブジェクト
     */
    constructor(page: Page) {
        this.page = page;
        this.link_home = page.getByRole('link', { name: 'ホーム' });
        this.link_plans = page.getByRole('link', { name: '宿泊予約' });
        this.link_register = page.getByRole('link', { name: '会員登録' });
        this.link_mypage = page.getByRole('link', { name: 'マイページ' });
        this.link_login = page.getByRole('link', { name: 'ログイン' });
        this.button_logout = page.getByRole('button', { name: 'ログアウト' });
    }

    /**
     * 指定されたヘッダーメニュー項目をクリックする
     * @param menu - クリックするメニュー項目
     * @throws 無効なメニュー項目が指定された場合にエラーをスローします
     */
    async clickHeaderMenu(menu: headerMenuList) {
        switch (menu) {
            case "ホーム":
                await this.link_home.click();
                break;
            case "宿泊予約":
                await this.link_plans.click();
                break;
            case "会員登録":
                await this.link_register.click();
                break;
            case "マイページ":
                await this.link_mypage.click();
                break;
            case "ログイン":
                await this.link_login.click();
                break;
            case "ログアウト":
                await this.button_logout.click();
                break;
            default:
                throw new Error(`Invalid menu: ${menu}`);
        }
    }
}
