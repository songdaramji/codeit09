import { fireEvent, render, screen } from "@testing-library/react";
import Checkbox from "./Checkbox";

test("체크박스 초기상태 체크안됨", () => {
  render(<Checkbox />);
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();

  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();

  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
});
