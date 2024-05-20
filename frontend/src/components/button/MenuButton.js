import { Avatar, Box, Typography, Badge } from "@mui/material";

export default function MenuButton({
  name,
  img,
  price,
  handleClick,
  clickCount,
}) {
  return (
    <Badge
      badgeContent={clickCount}
      color="primary"
      sx={{
        "& .MuiBadge-badge": {
          fontSize: "1rem", // 폰트 크기
          width: "25px", // 배지 너비
          height: "25px", // 배지 높이
          borderRadius: "50%", // 원형 모양
        },
      }}
    >
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
          position: "relative",
        }}
        onClick={handleClick}
      >
        <Typography variant="h9">{name}</Typography>
        <Avatar src={img} variant="square" sx={{ margin: "10px" }} />
        <Typography variant="h9">{price}₩</Typography>
      </Box>
    </Badge>
  );
}
