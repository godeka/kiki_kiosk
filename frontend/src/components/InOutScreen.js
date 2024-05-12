import { Box, Typography, Grid } from "@mui/material";
import { Storefront, ExitToApp } from "@mui/icons-material";

import GoBackButton from "./button/GoBackButton";

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
          <Box
            sx={{
              width: "150px",
              height: "150px",
              border: "2px solid black",
              borderRadius: "15px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Storefront style={{ fontSize: "70px" }} />
            <Typography variant="h6">매장</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              width: "150px",
              height: "150px",
              border: "2px solid black",
              borderRadius: "15px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ExitToApp style={{ fontSize: "70px" }} />
            <Typography variant="h6">포장</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
