import { useNavigate } from "react-router-dom";

import { Box, Typography } from "@mui/material";
import { CheckCircleOutline, South } from "@mui/icons-material";

export default function EndScreen() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box position="fixed" top="15%" left="45%">
        <CheckCircleOutline style={{ fontSize: "50px", color: "white" }} />
      </Box>
      <Typography
        variant="h2"
        style={{
          marginTop: "130px",
          marginBottom: "140px",
          fontSize: "35px",
          color: "white",
        }}
      >
        주문이 <br />
        완료되었습니다!
      </Typography>
      <Typography sx={{ fontSize: "27px" }}>
        아래에서 주문번호와 <br />
        영수증을 받으세요.
      </Typography>
      <Box position="fixed" top="75%" left="45%" onClick={() => navigate("/")}>
        <South style={{ fontSize: "50px" }} />
      </Box>
    </Box>
  );
}
