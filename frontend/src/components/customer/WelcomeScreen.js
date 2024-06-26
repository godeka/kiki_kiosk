import { useNavigate } from "react-router-dom";

import { Box, Typography } from "@mui/material";

export default function WelcomeScreen() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
      onClick={() => navigate("/InOut")}
    >
      <Typography variant="h3" style={{ color: "#FFFFFF", fontSize: "42px" }}>
        어서오세요, <br />
        키키 버거입니다.
      </Typography>
      <Typography variant="h5" style={{ color: "#000000", fontSize: "28px" }}>
        주문을 시작하려면 <br />
        화면을 터치해주세요.
      </Typography>
    </Box>
  );
}
