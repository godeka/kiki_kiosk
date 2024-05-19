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
  const [burgerList, setBurgerList] = useState([]);
  const [beverageList, setBeverageList] = useState([]);
  const [sideList, setSideList] = useState([]);

  useEffect(() => {
    // 모든 메뉴 가져오기
    fetch(`${serverUrl}/api/menu/all`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBurgerList(data.filter((menu) => menu.type === "버거"));
        setBeverageList(data.filter((menu) => menu.type === "음료"));
        setSideList(data.filter((menu) => menu.type === "사이드"));
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
          <Route path="/InOut" element={<InOutScreen />} />
          <Route path="/MenuType" element={<MenuTypeScreen />} />
          <Route
            path="/SelectBurger"
            element={<SelectMenuScreen menuList={burgerList} />}
          />
          <Route
            path="/SelectBeverage"
            element={<SelectMenuScreen menuList={beverageList} />}
          />
          <Route
            path="/SelectSide"
            element={<SelectMenuScreen menuList={sideList} />}
          />
          <Route path="/OrderCheck" element={<OrderCheckScreen />} />
          <Route path="/LastCheck" element={<LastCheckScreen />} />
          <Route path="/PaymentMethod" element={<PaymentMethodScreen />} />
          <Route
            path="/MakeCashPayment"
            element={<MakePaymentScreen paymentType="현금" />}
          />
          <Route
            path="/MakeCardPayment"
            element={<MakePaymentScreen paymentType="카드" />}
          />
          <Route path="/End" element={<EndScreen />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
