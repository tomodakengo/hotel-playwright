import { Page, Locator } from "@playwright/test";
import { HomePage } from "@pages/homePage";
import { MypagePage } from "@pages/mypagePage";
import { LoginPage } from "@pages/loginPage";

/**
 * ヘッダーメニューを操作するためのクラス
 * サイトのナビゲーションヘッダーにある各リンクやボタンへのアクセスと操作を提供します
 */
export class HeaderMenu {
    private readonly link_home: Locator;
    private readonly link_plans: Locator;
    private readonly link_register: Locator;
    private readonly link_mypage: Locator;
    private readonly button_login: Locator;
    private readonly button_logout: Locator;

    /**
     * HeaderMenuクラスのコンストラクタ
     * @param page - Playwrightのページオブジェクト
     */
    constructor(private page: Page) {
        this.link_home = page.getByRole('link', { name: 'ホーム' });
        this.link_plans = page.getByRole('link', { name: '宿泊予約' });
        this.link_register = page.getByRole('link', { name: '会員登録' });
        this.link_mypage = page.getByRole('link', { name: 'マイページ' });
        this.button_login = page.getByRole('button', { name: 'ログイン' });
        this.button_logout = page.getByRole('button', { name: 'ログアウト' });
    }

    /**
     * 指定されたヘッダーメニュー項目をクリックする
     * @param menu - クリックするメニュー項目
     * @returns クリックしたメニュー項目に対応するページのインスタンス
     * @throws 無効なメニュー項目が指定された場合にエラーをスローします
     */
    async clickHeaderMenu(menu: headerMenuList) {
        switch (menu) {
            case "ホーム":
                await this.link_home.click();
                return new HomePage(this.page);
            case "宿泊予約":
                await this.link_plans.click();
                break;
            case "会員登録":
                await this.link_register.click();
                break;
            case "マイページ":
                await this.link_mypage.click();
                return new MypagePage(this.page);
            case "ログイン":
                await this.button_login.click();
                return new LoginPage(this.page);
            case "ログアウト":
                await this.button_logout.click();
                return new HomePage(this.page);
            default:
                throw new Error(`Invalid menu: ${menu}`);
        }
    }
}
