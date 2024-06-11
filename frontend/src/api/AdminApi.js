const serverUrl = "http://13.125.72.207:8080";

// 관리자 로그인
export const login = (password) => {
  return fetch(`${serverUrl}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      password: password,
    }),
  });
};

// 관리자 로그아웃
export const logout = () => {
  return fetch(`${serverUrl}/api/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// 메뉴 삭제
export const deleteMenu = (menuId) => {
  return fetch(`${serverUrl}/api/menu?menuId=${menuId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// 메뉴 품절처리
export const soldoutMenu = (menuId) => {
  return fetch(`${serverUrl}/api/menu?menuId=${menuId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
