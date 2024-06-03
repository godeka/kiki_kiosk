import { useEffect, useState, useRef } from "react";

import { Container } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { getAllMenu } from "./api/ApiService.js";
import WelcomeScreen from "./components/WelcomeScreen";
import InOutScreen from "./components/InOutScreen";
import MenuTypeScreen from "./components/MenuTypeScreen";
import SelectMenuScreen from "./components/SelectMenuScreen";
import OrderCheckScreen from "./components/OrderCheckScreen";
import LastCheckScreen from "./components/LastCheckScreen";
import PaymentMethodScreen from "./components/PaymentMethodScreen";
import MakePaymentScreen from "./components/MakePaymentScreen";
import EndScreen from "./components/EndScreen";

function App() {
  const totalAmount = useRef(0); // 총 주문 금액
  const [orderList, setOrderList] = useState([]); // 전체 주문 목록 [ { menuId: 1, count: 2 }, ... ]
  const [selectedList, setSelectedList] = useState([]); // 단계별 선택 목록 [ { menuId: 1, count: 1 }, ... ]
  const [menuList, setMenuList] = useState([]);
  const [inOutInfo, setInOutInfo] = useState(""); // 매장/포장 : in/out

  useEffect(() => {
    // 모든 메뉴 가져오기
    getAllMenu(setMenuList);
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
                totalAmount={totalAmount}
              />
            }
          />
          <Route
            path="/LastCheck"
            element={<LastCheckScreen totalAmount={totalAmount} />}
          />
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
