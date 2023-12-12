import { CounterButton } from "./CounterButton";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

describe("CounterButton", () => {
  it("初期値０が正しく表示されている", () => {
    render(<CounterButton />);
    expect(screen.getByText("count is 0")).toBeInTheDocument();
  });

  it("初期値1が正しく表示されている", () => {
    render(<CounterButton init={1} />);
    expect(screen.getByText("count is 1")).toBeInTheDocument();
  });

  it("ボタンを押すと`count is 1`が表示される", async () => {
    render(<CounterButton />);

    const button = screen.getByRole("button");
    await user.click(button);
    expect(screen.getByText("count is 1")).toBeInTheDocument();
  });
});
