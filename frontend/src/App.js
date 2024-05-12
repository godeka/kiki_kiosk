import { Container, Typography } from "@mui/material";

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
      <Typography variant="h3" style={{ color: "#FFFFFF", fontSize: "42px" }}>
        어서오세요, <br />
        키키 버거입니다.
      </Typography>
      <Typography variant="h5" style={{ color: "#000000", fontSize: "28px" }}>
        주문을 시작하려면 <br />
        화면을 터치해주세요.
      </Typography>
    </Container>
  );
}

export default App;
