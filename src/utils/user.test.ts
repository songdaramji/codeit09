// import axios from "axios";
// import { fetchUsers, getUser } from "./user";

// // axios 모킹
// jest.mock("axios");

// test("fetchUsers 함수가 사용자 데이터를 반환해야 함", async () => {
//   // 여기에 fetch 모킹을 없앴습니다.
//   const result = await fetchUsers();
//   expect(result).toEqual([
//     { id: 1, name: "김철수", email: "kim@example.com" },
//     { id: 2, name: "이영희", email: "lee@example.com" },
//   ]);
// });

// test("성공적인 API 호출 시 사용자 데이터를 반환해야 함", async () => {
//   const mockedAxios = jest.mocked(axios);
//   mockedAxios.get.mockResolvedValueOnce({
//     data: {
//       id: 1,
//       name: "김철수",
//       email: "kim@example.com",
//     },
//   });

//   const result = await getUser(1);
//   expect(result).toEqual({
//     id: 1,
//     name: "김철수",
//     email: "kim@example.com",
//   });
// });
