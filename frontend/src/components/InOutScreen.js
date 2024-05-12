import { Box, Typography, Grid } from "@mui/material";
import { Storefront, ExitToApp } from "@mui/icons-material";

import GoBackButton from "./button/GoBackButton";
import BoxButton from "./button/BoxButton";

export default function InOutScreen() {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <GoBackButton />
      <Typography
        variant="h3"
        style={{ marginTop: "50px", marginBottom: "120px", fontSize: "30px" }}
      >
        매장에서 드실 건가요, <br />
        포장해가실 건가요?
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <BoxButton text="매장">
            <Storefront style={{ fontSize: "70px" }} />
          </BoxButton>
        </Grid>
        <Grid item xs={6}>
          <BoxButton text="포장">
            <ExitToApp style={{ fontSize: "70px" }} />
          </BoxButton>
        </Grid>
      </Grid>
    </Box>
  );
}
