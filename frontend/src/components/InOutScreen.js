import { Container, Typography, Box } from "@mui/material";
import { Storefront, ExitToApp } from "@mui/icons-material";

export default function InOutScreen() {
  return (
    <Container>
      <Typography variant="h3" style={{ fontSize: "30px" }}>
        매장에서 드실 건가요, <br />
        포장해가실 건가요?
      </Typography>
      <Box>
        <Storefront fontSize="large" />
        <Typography variant="subtitle1">매장</Typography>
      </Box>
      <Box>
        <ExitToApp fontSize="large" />
        <Typography variant="subtitle1">포장</Typography>
      </Box>
    </Container>
  );
}
