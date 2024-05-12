import { Box, Typography } from "@mui/material";

export default function BoxButton({ children, text, handleClick }) {
  return (
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
      onClick={handleClick}
    >
      {children}
      <Typography variant="h6">{text}</Typography>
    </Box>
  );
}
