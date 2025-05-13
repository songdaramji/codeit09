// discountCalculator.test.ts
import { calculatePrice } from "./discountCalculator";

describe("할인 계산기", () => {
  test("기본 가격에 할인이 적용되지 않아야 함 (5만원 미만)", () => {
    const price = 30000;
    const customer = { membership: "regular" };
    const finalPrice = calculatePrice(price, customer);
    expect(finalPrice).toBe(30000);
  });
  test("5만원 이상 구매 시 5%할인 적용", () => {
    const price = 50000;
    const customer = { membership: "regular" };
    const finalPrice = calculatePrice(price, customer);
    expect(finalPrice).toBe(47500);
  });
  test("10만원 이상 구매 시 10%할인 적용", () => {
    const price = 100000;
    const customer = { membership: "regular" };
    const finalPrice = calculatePrice(price, customer);
    expect(finalPrice).toBe(90000);
  });
  test("20만원 이상 구매 시 20%할인 적용", () => {
    const price = 200000;
    const customer = { membership: "regular" };
    const finalPrice = calculatePrice(price, customer);
    expect(finalPrice).toBe(160000);
  });
  test("실버회원 2%할인", () => {
    const price = 100000;
    const customer = { membership: "silver" };
    const finalPrice = calculatePrice(price, customer);
    expect(finalPrice).toBe(88200);
  });
  test("골드회원 5%할인", () => {
    const price = 100000;
    const customer = { membership: "gold" };
    const finalPrice = calculatePrice(price, customer);
    expect(finalPrice).toBe(85000);
  });
  test("vip 10%할인", () => {
    const price = 100000;
    const customer = { membership: "vip" };
    const finalPrice = calculatePrice(price, customer);
    expect(finalPrice).toBe(81000);
  });
});
