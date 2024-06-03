const serverUrl = "http://13.125.72.207:8080";

// 메뉴 리스트 요청
export const getAllMenu = (setMenuList) => {
  return fetch(`${serverUrl}/api/menu/all`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setMenuList(data);
    });
};

// 주문하기
export const postOrder = (orderList, paymentMethod, inOutInfo) => {
  return fetch(`${serverUrl}/api/order`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      orderSheet: orderList,
      paymentMethod: paymentMethod === "현금" ? "cash" : "card",
      inOutInfo: inOutInfo,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};
