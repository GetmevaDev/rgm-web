export function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

export function getCookie(name) {
  if (typeof window !== "undefined") {
    const cookieArr = document?.cookie?.split(";");
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < cookieArr.length; i++) {
      const cookiePair = cookieArr[i].split("=");
      if (cookiePair[0].trim() === name) {
        return cookiePair[1];
      }
    }
  }

  return null;
}
