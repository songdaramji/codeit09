interface CookieOptions {
  path?: string;
  domain?: string;
  expires?: Date;
  "max-age"?: number;
  secure?: boolean;
  samesite?: "Strict" | "Lax" | "None";
  [key: string]: string | number | boolean | Date | undefined;
}

export function setCookie(
  name: string,
  value: string,
  options: CookieOptions = {},
) {
  // 여기에 코드를 작성하세요.
  options = { path: "/", "max-age": 3600 };

  let cookieString = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  for (const optionKey in options) {
    // 옵션의 값을 추출합니다.
    const optionValue = options[optionKey];
    // 예를 들어, null과 undefined 같은 값이 들어간다면 저장하지 않고 넘어간다.
    if (optionValue === undefined || optionValue === null) continue;

    // Date 객체 처리
    let finalValue = optionValue;
    if (optionValue instanceof Date) {
      finalValue = optionValue.toUTCString();
    }

    // 세미콜론(;)을 먼저 추가한 후 뒤에 옵션의 key를 추가합니다.
    cookieString += `; ${optionKey}`;

    // 옵션의 값이 true가 아니라면 '=옵션값'을 추가합니다.
    if (finalValue !== true) {
      cookieString += `=${finalValue}`;
    }
  }
  // 쿠키 설정하기
  document.cookie = cookieString;
}

export function isCookieExists(name: string) {
  // 여기에 코드를 작성하세요.
  const encodeName = encodeURIComponent(name);
  return document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(encodeName + "="))
    ? true
    : false;
}

export function deleteCookie(name: string) {
  // 여기에 코드를 작성하세요.
  document.cookie = encodeURIComponent(name) + "=; max-age=0";
}
