import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import SearchForm from "./SearchForm";

test("검색어를 입력하고 폼을 제출하면 onSearch 함수가 호출되어야 함", async () => {
  // 검색어를 입력하고 폼을 제출하면 onSearch 함수가 호출되어야 함
  const user = userEvent.setup();
  const handleSearch = jest.fn();

  render(<SearchForm onSearch={handleSearch} />);

  const input = screen.getByLabelText("검색:");
  const submitButton = screen.getByRole("button", { name: "검색" });

  await user.type(input, "리액트");
  await user.click(submitButton);

  expect(handleSearch).toHaveBeenCalledWith("리액트");
  // onSearch 함수는 입력된 검색어를 인자로 받아야 함
});
