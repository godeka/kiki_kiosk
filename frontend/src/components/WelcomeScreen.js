import { Typography } from "@mui/material";

export default function WelcomeScreen() {
  return (
    <>
      <Typography variant="h3" style={{ color: "#FFFFFF", fontSize: "42px" }}>
        어서오세요, <br />
        키키 버거입니다.
      </Typography>
      <Typography variant="h5" style={{ color: "#000000", fontSize: "28px" }}>
        주문을 시작하려면 <br />
        화면을 터치해주세요.
      </Typography>
    </>
  );
}
