import { useState } from "react";

import { Container, Button } from "@mui/material";

import CustomerPage from "./components/customer/CustomerPage.js";
import AdminPage from "./components/admin/AdminPage.js";

function App() {
  const [mode, setMode] = useState("home");

  return (
    <Container disableGutters>
      {mode === "home" && <Home setMode={setMode} />}
      {mode === "admin" && <AdminPage setMode={setMode} />}
      {mode === "customer" && <CustomerPage setMode={setMode} />}
    </Container>
  );
}

function Home({ setMode }) {
  return (
    <>
      <Button
        variant="outlined"
        onClick={() => {
          setMode("admin");
        }}
      >
        관리자 로그인
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          setMode("customer");
        }}
      >
        고객 페이지로
      </Button>
    </>
  );
}

export default App;
