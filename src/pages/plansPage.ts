import { Page } from "@playwright/test";
import { BasePage } from "@pages/basePage";
import { HeaderMenu } from "@components/headerMenu";
export class PlansPage extends BasePage {
    private readonly headerMenu: HeaderMenu;

    constructor(page: Page) {
        super(page);
        this.headerMenu = new HeaderMenu(page);
    }

    async clickHeaderMenu(menu: headerMenuList) {
        await this.headerMenu.clickHeaderMenu(menu);
    }
}