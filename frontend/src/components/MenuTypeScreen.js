import { useNavigate } from "react-router-dom";

import { Box, Grid } from "@mui/material";
import { KebabDining, LunchDining, WineBar } from "@mui/icons-material";

import GoBackButton from "./button/GoBackButton";
import Question from "./Question";
import BoxButton from "./button/BoxButton";

export default function MenuTypeScreen() {
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
        주문하실 메뉴의 <span style={{ color: "black" }}>종류</span>는 <br />
        무엇인가요?
      </Question>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <BoxButton
            text="햄버거"
            handleClick={() => navigate("/SelectBurger")}
          >
            <LunchDining style={{ fontSize: "70px" }} />
          </BoxButton>
        </Grid>
        <Grid item xs={6}>
          <BoxButton
            text="음료"
            handleClick={() => navigate("/SelectBeverage")}
          >
            <WineBar style={{ fontSize: "70px" }} />
          </BoxButton>
        </Grid>
        <Grid item xs={6}>
          <BoxButton
            text="곁들여먹는 음식"
            handleClick={() => navigate("/SelectSide")}
          >
            <KebabDining style={{ fontSize: "70px" }} />
          </BoxButton>
        </Grid>
      </Grid>
    </Box>
  );
}
