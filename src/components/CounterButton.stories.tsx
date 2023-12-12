import { CounterButton } from "./CounterButton";
import type { Meta, StoryObj } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { userEvent } from "@storybook/testing-library";

// metadata
const meta = {
  title: "CounterButton",
  component: CounterButton,
} as Meta<typeof CounterButton>;

export default meta;

type Story = StoryObj<typeof CounterButton>;

// 初期値なしボタンの設定
export const Default: Story = {
  args: {},
};

// 初期値1ボタンの設定
export const Special: Story = {
  args: {
    init: 1,
  },
};

/**
 * ボタンのテスト
 * ユーザーがボタンをクリックすると、ボタンのテキストが0→1に変化する
 */
export const Testing: Story = {
  args: {
    init: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const element = canvas.getByRole("button", { name: "count is 0" });
    expect(element).toBeInTheDocument();

    await userEvent.click(element);
    await expect(
      canvas.getByRole("button", { name: "count is 1" })
    ).toBeInTheDocument();
  },
};
