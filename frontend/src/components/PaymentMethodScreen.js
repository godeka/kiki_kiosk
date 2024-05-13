import { useNavigate } from "react-router-dom";

import { Box, Grid } from "@mui/material";
import { Money, Payment } from "@mui/icons-material";

import GoBackButton from "./button/GoBackButton";
import BoxButton from "./button/BoxButton";
import Question from "./Question";

export default function PaymentMethodScreen() {
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
        결제방식 선택
        <br />
        <br />
      </Question>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <BoxButton
            text="현금"
            handleClick={() => navigate("/MakeCashPayment")}
          >
            <Money style={{ fontSize: "60px" }} />
          </BoxButton>
        </Grid>
        <Grid item xs={6}>
          <BoxButton
            text="카드"
            handleClick={() => navigate("/MakeCardPayment")}
          >
            <Payment style={{ fontSize: "60px" }} />
          </BoxButton>
        </Grid>
      </Grid>
    </Box>
  );
}
