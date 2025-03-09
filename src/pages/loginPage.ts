import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "@pages/basePage";
import { HeaderMenu } from "@components/headerMenu";

type input = "email" | "password";

export class LoginPage extends BasePage {
    private readonly headerMenu: HeaderMenu;

    private readonly input_email: Locator;
    private readonly input_password: Locator;
    private readonly button_login: Locator;
    private readonly text_error_message_email: Locator;
    private readonly text_error_message_password: Locator;

    constructor(page: Page) {
        super(page);
        this.headerMenu = new HeaderMenu(page);
        this.input_email = page.getByLabel('メールアドレス');
        this.input_password = page.getByLabel('パスワード');
        this.button_login = page.locator('#login-button');
        this.text_error_message_email = page.locator('#email-error');
        this.text_error_message_password = page.locator('#password-error');
    }

    /**
     * ヘッダーメニューのクリック
     * @param menu - クリックするメニュー項目
     */
    async clickHeaderMenu(menu: headerMenuListWithoutAuth) {
        await this.headerMenu.clickHeaderMenu(menu);
    }

    /**
     * メールアドレスとパスワードを入力してログインを行う
     * ログインの成功や失敗は検証しない
     * @param email - メールアドレス
     * @param password - パスワード
     */
    async login(email: string, password: string) {
        await this.input_email.fill(email);
        await this.input_password.fill(password);
        await this.button_login.click();
    }

    /**
     * エラーメッセージを取得する
     * @param input - エラーメッセージを取得する入力項目
     * @returns エラーメッセージ
     */
    private async getErrorMessage(input: input) {
        switch (input) {
            case "email":
                return await this.text_error_message_email.textContent();
            case "password":
                return await this.text_error_message_password.textContent();
            default:
                throw new Error(`Invalid input: ${input}`);
        }
    }

    /**
     * エラーメッセージに引数の文字列が表示されているかを検証する
     * @param input - エラーメッセージを確認する入力項目
     * @param expectedMessage - 期待するエラーメッセージ
     * @returns エラーメッセージに期待するエラーメッセージが表示されているか
     */
    async assertErrorMessageHasExpectedMessage(input: input, expectedMessage: string) {
        const errorMessage = await this.getErrorMessage(input);
        expect(errorMessage).toContain(expectedMessage);
    }
}
