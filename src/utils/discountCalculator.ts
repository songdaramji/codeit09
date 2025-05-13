// discountCalculator.ts

export const calculatePrice = (
  price: number,
  customer: {
    membership: string;
  },
) => {
  // 기본 할인율 적용
  let discountedPrice = price;

  if (price >= 200000) discountedPrice = price * 0.8;
  else if (price >= 100000) discountedPrice = price * 0.9;
  else if (price >= 50000) discountedPrice = price * 0.95;

  // 회원 할인 적용
  const applyMembershipDiscount = (
    price: number,
    membership: "regular" | "silver" | "gold" | "vip",
  ) => {
    const discountRates = {
      silver: 0.98, // 2% 할인
      gold: 0.95, // 5% 할인
      vip: 0.9, // 10% 할인
      regular: 1, // 할인 없음
    };
    return price * (discountRates[membership] || 1);
  };

  // membership에 따른 추가 할인 적용
  return applyMembershipDiscount(
    discountedPrice,
    customer.membership as "regular" | "silver" | "gold" | "vip",
  );
};
