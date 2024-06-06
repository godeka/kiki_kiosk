import { Box, Typography, Avatar, Button, ButtonGroup } from "@mui/material";

export default function MenuItem({ name, image, price }) {
  return (
    <Box
      sx={{
        width: "120px",
        height: "160px",
        border: "2px solid black",
        borderRadius: "15px",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Typography variant="h9">{name}</Typography>
      <Avatar src={image} variant="square" />
      <Typography variant="h9">{price}₩</Typography>
      <ButtonGroup variant="text">
        <Button>삭제</Button>
        <Button>품절</Button>
      </ButtonGroup>
    </Box>
  );
}