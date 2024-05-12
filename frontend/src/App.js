import { Container } from "@mui/material";

import WelcomeScreen from "./components/WelcomeScreen";

function App() {
  return (
    <Container
      sx={{
        textAlign: "center",
        padding: "50px",
        background: `linear-gradient(0deg, #FFFFFF, #FF1E97)`, // 그라데이션 배경
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <WelcomeScreen />
    </Container>
  );
}

export default App;
