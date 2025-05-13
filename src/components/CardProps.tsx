import clsx from "clsx";

type CardProps = {
  children: React.ReactNode;
  variant?: "default" | "outlined" | "elevated";
  padding?: "none" | "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  className?: string;
};

const Card = ({
  children,
  variant = "default",
  padding = "md",
  radius = "md",
  className,
}: CardProps) => {
  const cardClasses = clsx(
    // 기본 스타일
    "overflow-hidden transition-all",

    // 패딩 설정
    {
      "p-0": padding === "none",
      "p-3": padding === "sm",
      "p-5": padding === "md",
      "p-8": padding === "lg",
    },

    // 테두리 반경
    {
      "rounded-none": radius === "none",
      "rounded-sm": radius === "sm",
      "rounded-md": radius === "md",
      "rounded-lg": radius === "lg",
      "rounded-full": radius === "full",
    },

    // 카드 변형
    {
      "bg-white border border-gray-200": variant === "default",
      "bg-white border border-gray-500 hover:border-gray-400 transition-colors":
        variant === "outlined",
      "bg-white shadow-lg hover:shadow-xl transition-shadow":
        variant === "elevated",
    },

    // 사용자 정의 클래스
    className,
  );
  return <div className={cardClasses}>{children}</div>;
};
export default Card;
