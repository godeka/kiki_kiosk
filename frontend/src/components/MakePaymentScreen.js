import { useNavigate } from "react-router-dom";

import { Box, Typography } from "@mui/material";
import { South } from "@mui/icons-material";

import { postOrder } from "../api/ApiService";
import GoBackButton from "./button/GoBackButton";
import Question from "./Question";

export default function MakePaymentScreen({
  paymentMethod,
  inOutInfo,
  orderList,
}) {
  const navigate = useNavigate();

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
        {paymentMethod === "현금"
          ? "현금을 아래 중앙의 투입구에 넣어주세요."
          : "카드를 아래 오른쪽의 투입구에 넣어주세요."}
      </Typography>
      <Box
        position="fixed"
        top="70%"
        left={paymentMethod === "현금" ? "45%" : "65%"}
        onClick={async () => {
          await postOrder(orderList, paymentMethod, inOutInfo);
          alert("결제 성공!");

          navigate("/End");
        }}
      >
        <South style={{ fontSize: "50px" }} />
      </Box>
    </Box>
  );
}
