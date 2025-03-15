# ホテル予約サイトの自動テスト実装例

このリポジトリは https://hotel-example-site.takeyaqa.dev/ja/ をPlaywrightで自動テストをするときの実装例を記載しています。

現在はログイン機能のみ実装しています。

## デザインパターン

Page Object Component Modelを採用しています。ただしComponentは現時点で1つしかないため基底クラスを作成していません。

Page Object Classは`src/pages/`以下に記載しています。各Page Object Classでは、オブジェクトxpathの管理と、そのページ内での操作(アクション)を定義しています。

### 工夫している点

テストコード内でPage Object Classの初期化をするのが大変なため、`src/fixtures.ts`を作成し、PlaywrightのFixtures機能を活用して、ページの初期化を担っています。<br>
これによりテストコードでは以下のように簡潔に記載することができるようになっています。

```typescript
test(`ログイン成功: ${user.email}`, async ({ homePage, loginPage, mypagePage }) => {
    await homePage.clickHeaderMenu('ログイン');
    await loginPage.login(user.email, user.password);
    await mypagePage.assertLoginSuccess();
});
```

## テストデータ

テストデータは簡略化するため、spec.ts内で定義しています。<br>
JSONやYAML等で外出しにすることで、共通のデータの使い回しもできるようになりますが、今回は規模が小さいので見送りました。

# 免責事項

このリポジトリ内のコードを複製・実行した際に生じた損害など、作者は本ソフトウェアに関して責任を負いかねます。

このリポジトリ内のいかなる発言や意見は、作者の所属組織を代表するものではありません。

## 注意事項

このリポジトリ内に存在するテストコードは外部のWebサイトに対して実施されます。<br>
このテストコードを実行する際は、以下のWebサイトにある「ご利用上の注意」を遵守してください。<br>
https://hotel-example-site.takeyaqa.dev/ja/