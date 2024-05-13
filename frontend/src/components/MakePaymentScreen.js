import { Box, Typography } from "@mui/material";
import { South } from "@mui/icons-material";

import GoBackButton from "./button/GoBackButton";
import Question from "./Question";

export default function MakePaymentScreen({ paymentType }) {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <GoBackButton />
      <Question>
        결제하기
        <br />
        <br />
      </Question>
      <Typography sx={{ fontSize: "27px" }}>
        {paymentType === "현금"
          ? "현금을 아래 중앙의 투입구에 넣어주세요."
          : "카드를 아래 오른쪽의 투입구에 넣어주세요."}
      </Typography>
      <Box
        position="fixed"
        top="70%"
        left={paymentType === "현금" ? "45%" : "65%"}
      >
        <South style={{ fontSize: "50px" }} />
      </Box>
    </Box>
  );
}
