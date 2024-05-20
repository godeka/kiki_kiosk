import { useNavigate } from "react-router-dom";

import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
} from "@mui/material";
import { East, West } from "@mui/icons-material";

import GoBackButton from "./button/GoBackButton";

const sampleSelectedList = [
  { name: "키키버거", price: "5,000", img: "burger/basicBurger.png", num: 1 },
  {
    name: "치즈베이컨버거",
    price: "6,000",
    img: "burger/cheeseBaconBurger.png",
    num: 3,
  },
  { name: "메뉴3", price: "7,000", img: "", num: 5 },
  { name: "메뉴4", price: "4,000", img: "", num: 2 },
  { name: "메뉴5", price: "5,000", img: "", num: 1 },
  { name: "메뉴6", price: "6,000", img: "", num: 2 },
]; // 메뉴 목록

export default function OrderCheckScreen({ selectedMenus, menuList }) {
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
      <Typography sx={{ margin: "20px", fontSize: "30px", color: "white" }}>
        선택한 메뉴가 맞나요?
      </Typography>
      <List
        sx={{
          marginBottom: "30px",
          padding: "10px",
          height: "320px",
          overflow: "auto",
          backgroundColor: "white",
          borderRadius: "15px",
        }}
      >
        {Object.keys(selectedMenus).map((menuId, index) => {
          const menu = menuList.find((menu) => menu.id == menuId);

          return (
            <>
              <ListItem key={index}>
                <ListItemAvatar>
                  <Avatar src={menu.imageUrl} />
                </ListItemAvatar>
                <ListItemText
                  primary={menu.name}
                  secondary={
                    <Typography variant="body2">{menu.price}원</Typography>
                  }
                />
                <ListItemText
                  primary={selectedMenus[menuId] + "개"}
                  sx={{ textAlign: "right" }}
                />
              </ListItem>
              {index !== selectedMenus.length - 1 && <Divider />}
            </>
          );
        })}
      </List>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Box
            sx={{ border: "2px solid black", borderRadius: "15px" }}
            onClick={() => navigate(-1)}
          >
            <Typography fontSize="20px">틀림</Typography>
            <West style={{ fontSize: "20px" }} />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{ border: "2px solid black", borderRadius: "15px" }}
            onClick={() => navigate("/LastCheck")}
          >
            <Typography fontSize="20px">맞음</Typography>
            <East style={{ fontSize: "20px" }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
