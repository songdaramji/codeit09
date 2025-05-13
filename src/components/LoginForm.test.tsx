// import { fireEvent, render, screen } from "@testing-library/react";
// import LoginForm from "./LoginForm";

// test("이메일 입력 시 input 요소의 값이 변경되는지 확인", () => {
//   render(<LoginForm />);

//   // 이메일 입력 요소 가져오기
//   const emailInput = screen.getByRole("textbox", { name: "이메일:" });
//   // type="password"인 요소는 getByRole로 찾을 수 없음
//   const passwordInput = screen.getByLabelText("비밀번호:");

//   // input에 이메일 입력
//   fireEvent.change(emailInput, { target: { value: "test@test.com" } });
//   fireEvent.change(passwordInput, { target: { value: "password123" } });
//   // input의 값이 변경되었는지 확인
//   expect(emailInput).toHaveValue("test@test.com");
//   expect(passwordInput).toHaveValue("password123");
// });

// test("이메일 입력 시 input 요소의 값이 변경되는지 확인", () => {
//   render(<LoginForm />);

//   // 이메일 입력 요소 가져오기
//   const emailInput = screen.getByRole("textbox", { name: "이메일:" });
//   // type="password"인 요소는 getByRole로 찾을 수 없음
//   const passwordInput = screen.getByLabelText("비밀번호:");

//   // input에 이메일 입력
//   fireEvent.change(emailInput, { target: { value: "test@test.com" } });
//   fireEvent.change(passwordInput, { target: { value: "password123" } });
//   // input의 값이 변경되었는지 확인
//   expect(emailInput).toHaveValue("test@test.com");
//   expect(passwordInput).toHaveValue("password123");
// });
