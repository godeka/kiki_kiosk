import { useNavigate } from "react-router-dom";

import { Box, IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

export default function GoBackButton() {
  const navigate = useNavigate();

  return (
    <Box position="fixed" top="50%" left="10%">
      <IconButton onClick={() => navigate(-1)}>
        <ArrowBack />
      </IconButton>
    </Box>
  );
}
