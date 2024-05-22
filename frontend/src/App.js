import { useEffect, useState } from "react";

import { Container } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import WelcomeScreen from "./components/WelcomeScreen";
import InOutScreen from "./components/InOutScreen";
import MenuTypeScreen from "./components/MenuTypeScreen";
import SelectMenuScreen from "./components/SelectMenuScreen";
import OrderCheckScreen from "./components/OrderCheckScreen";
import LastCheckScreen from "./components/LastCheckScreen";
import PaymentMethodScreen from "./components/PaymentMethodScreen";
import MakePaymentScreen from "./components/MakePaymentScreen";
import EndScreen from "./components/EndScreen";

const serverUrl = "http://43.203.235.200:8080";

function App() {
  const [orderList, setOrderList] = useState([]); // 전체 주문 목록 [ { menuId: 1, count: 2 }, ... ]
  const [selectedList, setSelectedList] = useState([]); // 단계별 선택 목록 [ { menuId: 1, count: 1 }, ... ]
  const [menuList, setMenuList] = useState([]);
  const [inOutInfo, setInOutInfo] = useState(""); // 매장/포장 : in/out

  useEffect(() => {
    // 모든 메뉴 가져오기
    fetch(`${serverUrl}/api/menu/all`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMenuList(data);
      });
  }, []);

  return (
    <Container
      sx={{
        textAlign: "center",
        padding: "50px",
        background: `linear-gradient(0deg, #FFFFFF, #FF1E97)`, // 그라데이션 배경
        height: "100vh",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route
            path="/InOut"
            element={<InOutScreen setInOutInfo={setInOutInfo} />}
          />
          <Route path="/MenuType" element={<MenuTypeScreen />} />
          <Route
            path="/SelectBurger"
            element={
              <SelectMenuScreen
                menuList={menuList.filter((menu) => menu.type === "버거")}
                selectedList={selectedList}
                setSelectedList={setSelectedList}
              />
            }
          />
          <Route
            path="/SelectBeverage"
            element={
              <SelectMenuScreen
                menuList={menuList.filter((menu) => menu.type === "음료")}
                selectedList={selectedList}
                setSelectedList={setSelectedList}
              />
            }
          />
          <Route
            path="/SelectSide"
            element={
              <SelectMenuScreen
                menuList={menuList.filter((menu) => menu.type === "사이드")}
                selectedList={selectedList}
                setSelectedList={setSelectedList}
              />
            }
          />
          <Route
            path="/OrderCheck"
            element={
              <OrderCheckScreen
                menuList={menuList}
                selectedList={selectedList}
                setSelectedList={setSelectedList}
                orderList={orderList}
                setOrderList={setOrderList}
              />
            }
          />
          <Route path="/LastCheck" element={<LastCheckScreen />} />
          <Route path="/PaymentMethod" element={<PaymentMethodScreen />} />
          <Route
            path="/MakeCashPayment"
            element={
              <MakePaymentScreen
                paymentMethod="현금"
                inOutInfo={inOutInfo}
                orderList={orderList}
              />
            }
          />
          <Route
            path="/MakeCardPayment"
            element={
              <MakePaymentScreen
                paymentMethod="카드"
                inOutInfo={inOutInfo}
                orderList={orderList}
              />
            }
          />
          <Route path="/End" element={<EndScreen />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
