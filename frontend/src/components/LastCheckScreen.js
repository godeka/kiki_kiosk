import { useNavigate } from "react-router-dom";

import { Box, Grid } from "@mui/material";
import { Add, Paid } from "@mui/icons-material";

import GoBackButton from "./button/GoBackButton";
import BoxButton from "./button/BoxButton";
import Question from "./Question";

export default function LastCheckScreen() {
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
        <span style={{ color: "black" }}>더 주문</span>하시겠습니까, <br />
        아니면 <span style={{ color: "black" }}>결제</span>하시겠습니까?
      </Question>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <BoxButton
            text="더 주문하기"
            handleClick={() => navigate("/MenuType")}
          >
            <Add style={{ fontSize: "70px" }} />
          </BoxButton>
        </Grid>
        <Grid item xs={6}>
          <BoxButton
            text="결제하기"
            handleClick={() => navigate("/PaymentMethod")}
          >
            <Paid style={{ fontSize: "70px" }} />
          </BoxButton>
        </Grid>
      </Grid>
    </Box>
  );
}
