import { useState } from "react";

import { Container, Button, Box } from "@mui/material";

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
    <Box
      sx={{
        display: "flex",
        justifyContent: "center", // 수평 중앙 정렬
        alignItems: "center", // 수직 중앙 정렬
        height: "100vh", // 전체 뷰포트 높이
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "220px", // 버튼 두 개와 여유 공간 포함한 너비
        }}
      >
        <Button
          variant="outlined"
          sx={{
            marginRight: "10px", // 버튼 사이 여백
            wordBreak: "keep-all",
          }}
          onClick={() => {
            setMode("admin");
          }}
        >
          관리자 로그인
        </Button>
        <Button
          variant="outlined"
          sx={{
            wordBreak: "keep-all",
          }}
          onClick={() => {
            setMode("customer");
          }}
        >
          고객 페이지로
        </Button>
      </Box>
    </Box>
  );
}

export default App;
