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

function App() {
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
          <Route path="/SelectBurger" element={<SelectMenuScreen />} />
          <Route path="/SelectBeverage" element={<SelectMenuScreen />} />
          <Route path="/SelectSide" element={<SelectMenuScreen />} />
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
