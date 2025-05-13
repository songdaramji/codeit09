// import {formatDate, daysDifference, isWeekend} from './formData'

// describe('formatDate 함수의 테스트 케이스', () => { 

//   test('날짜를 YYYY-MM-DD 형식으로 포맷팅해야 함',()=>{
//     const date = new Date(2023,0,1);
//     expect(formatDate(date)).toBe("2023-01-01");
//   });
//   test('다른 구분자를 사용할 수 있어야 함',()=>{
//     const date = new Date(2023,0,1);
//     expect(formatDate(date,"/")).toBe("2023/01/01");
//     expect(formatDate(date,".")).toBe("2023.01.01");
//   });
//   test('10월 이상의 월과 10일 이상의 날짜도 올바르게 포맷팅해야 함',()=>{
//     const date = new Date(2023,9,15);
//     expect(formatDate(date)).toBe("2023-10-15");
//   });
//   test('10월 미만의 월과 10일 미만의 날짜는 앞에 0을 붙여야 함',()=>{
//     const date = new Date(2023,1,9);
//     expect(formatDate(date)).toBe("2023-02-09");
//   });
// //   test('유효하지 않은 날짜는 빈 문자열을 반환해야 함',()=>{
// //     expect(formatDate(undefined)).toEqual([]);
// //     expect(formatDate(null)).toEqual([]);
// //     expect(formatDate("string")).toEqual([]);
// //     expect(formatDate(123)).toEqual([]);
// //   });
// // });

// // describe('daysDifference 함수의 테스트 케이스', () => { 

// //   test('두 날짜 간의 일수 차이를 계산해야 함',()=>{
// //     expect(daysDifference([1,2,3,4,5],2)).toEqual([[1,2],[3,4],[5]]);
// //     expect(daysDifference(["a","b","c"],2)).toEqual([["a","b"],["c"]]);
// //   });
// //   test('날짜 순서가 반대이면 음수 결과를 반환해야 함',()=>{
// //     expect(daysDifference([1,2,3,4,5],8)).toEqual([[1,2,3,4,5]]);
// //   });
// //   test('같은 날짜는 0을 반환해야 함',()=>{
// //     expect(daysDifference([1,2,3],1)).toEqual([[1],[2],[3]]);
// //   });
// //   test('시간, 분, 초를 무시하고 날짜만 비교해야 함',()=>{
// //     expect(daysDifference([1,2,3],0)).toEqual([[1,2,3]]);
// //     expect(daysDifference([1,2,3],-1)).toEqual([[1,2,3]]);
// //   });
// //   test('유효하지 않은 날짜는 NaN을 반환해야 함',()=>{
// //     expect(daysDifference([])).toEqual([]);
// //   });
// // });

// // describe("isWeekend 함수의 테스트 케이스", () => {

// //   test('토요일은 주말로 인식해야 함',()=>{
// //     expect(isWeekend([1,2,3],[2,3,4,5])).toEqual([2,3]);
// //     expect(isWeekend(["a","b"],["b","c"])).toEqual(["b"]);
// //   });
// //   test('일요일은 주말로 인식해야 함',()=>{
// //     expect(isWeekend([1,2],[3,4,5])).toEqual([]);
// //     expect(isWeekend(["a"],["b","c"])).toEqual([]);

// //   });
// //   test('평일은 주말로 인식하지 않아야 함',()=>{
// //     expect(isWeekend([],[])).toEqual([]);
// //     expect(isWeekend([1,2],[])).toEqual([]);
// //     expect(isWeekend([],[3,4])).toEqual([]);
// //   });
// //   test('유효하지 않은 날짜는 false를 반환해야 함',()=>{
// //     expect(isWeekend(undefined,[1,2])).toEqual([]);
// //     expect(isWeekend([1,2],null)).toEqual([]);
// //     expect(isWeekend("string",[1,2])).toEqual([]);
// //     expect(isWeekend(123,[1,2])).toEqual([]);
// //   });
// });