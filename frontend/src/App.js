import { Container } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import WelcomeScreen from "./components/WelcomeScreen";
import InOutScreen from "./components/InOutScreen";

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
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
