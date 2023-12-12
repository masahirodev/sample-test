## Jest

### Setup

ライブラリのインストール

```
npm i -D jest @types/jest ts-jest
```

jest の初期設定

```
npx ts-jest config:init

```

packjson に test 追加

```
  "scripts": {
    "test": "jest"
  },
```

## react testing library

### Setup

ライブラリのインストール

```
npm i -D jest-environment-jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

`jest.setup.ts`を作成して下記を追加

```
import "@testing-library/jest-dom";
```

`jest.config.js`を下記に書き換え

```
/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["./jest.setup.ts"],
};
```

`tsconfig.json`の`compilerOptions`に下記を追記

```
"esModuleInterop": true,
"types": ["@testing-library/jest-dom"]
```

これで起動できるはず

hooks の参考テスト

```
npm test src/hooks/useCounter.test.tsx
```

components の参考テスト

```
npm test src/components/CounterButton.test.tsx
```

snapshot の参考テスト

```
npm test src/components/CounterButtonSnapshot.test.tsx
```

テスト 1 回目は、スナップショットが取られる。下記はスナップショットの中身

```
// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`CounterButton Snapshotテスト 1`] = `
<div>
  <button>
    count is
    0
  </button>
</div>
`;
```

テストコードに写って

```diff
- const { container } = render(<CounterButton />);
+ const { container } = render(<CounterButton init={1} />);
```

再度テスト実行すると、エラーが起こり、変化した場所が特定できる。

スナップショットの撮り直しは下記。

```
npm test src/components/CounterButtonSnapshot.test.tsx -- -u
```

## storybook

### Setup

ライブラリのインストール

```
npm i -D @storybook/jest @@storybook/testing-library
```

ストーリーブックのインストール

```
npx sb@7 init
```

下記でストーリーブック起動

```
npm run storybook
```

サンプルのストーリー

`src/components/CounterButton.stories.tsx`

## Chromatic（ビジュアルリグレッションテスト）

git 管理が必要

[Chromatic 公式サイト](https://www.chromatic.com/)

アカウント作って、プロジェクト作る orGithub から連携する

```
npm install --save-dev chromatic
```

```
npx chromatic --project-token={token}
```

注意点として、packjson に下記のコマンド記載しますかって出るので、n を押す方が良いかと

```
"scripts": {
  "chromatic": "npx chromatic --project-token={token}"
}
```
