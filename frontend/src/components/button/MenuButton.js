import { Avatar, Box, Typography } from "@mui/material";

export default function MenuButton({ name, img, price, handleClick }) {
  return (
    <Box
      sx={{
        width: "100px",
        height: "120px",
        border: "2px solid black",
        borderRadius: "15px",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={handleClick}
    >
      <Typography variant="h9">{name}</Typography>
      <Avatar src={img} variant="square" sx={{ margin: "10px" }} />
      <Typography variant="h9">{price}₩</Typography>
    </Box>
  );
}
