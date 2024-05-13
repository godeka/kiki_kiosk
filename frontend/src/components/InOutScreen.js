import { useNavigate } from "react-router-dom";

import { Box, Grid } from "@mui/material";
import { Storefront, ExitToApp } from "@mui/icons-material";

import GoBackButton from "./button/GoBackButton";
import BoxButton from "./button/BoxButton";
import Question from "./Question";

export default function InOutScreen() {
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
        <span style={{ color: "black" }}>매장</span>에서 드실 건가요, <br />
        <span style={{ color: "black" }}>포장</span>해가실 건가요?
      </Question>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <BoxButton text="매장" handleClick={() => navigate("/MenuType")}>
            <Storefront style={{ fontSize: "70px" }} />
          </BoxButton>
        </Grid>
        <Grid item xs={6}>
          <BoxButton text="포장" handleClick={() => navigate("/MenuType")}>
            <ExitToApp style={{ fontSize: "70px" }} />
          </BoxButton>
        </Grid>
      </Grid>
    </Box>
  );
}
