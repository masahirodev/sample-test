import { CounterButton } from "./CounterButton";
import { render } from "@testing-library/react";

describe("CounterButton", () => {
  it("Snapshotテスト", () => {
    const { container } = render(<CounterButton />);
    // const { container } = render(<CounterButton init={1}/>);

    // スナップショットの比較 or 新規作成
    expect(container).toMatchSnapshot();
  });
});
