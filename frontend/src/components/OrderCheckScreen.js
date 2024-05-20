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

export default function OrderCheckScreen({
  menuList,
  selectedList,
  setSelectedList,
  orderList,
  setOrderList,
}) {
  const navigate = useNavigate();

  // '틀림' 버튼 클릭 핸들러
  const handleClickWrong = () => {
    navigate(-1);
    setSelectedList([]); // 선택한 메뉴 초기화
  };

  // '맞음' 버튼 클릭 핸들러
  const handleClickRight = () => {
    navigate("/LastCheck");

    // 선택한 메뉴들 주문 목록에 추가
    let newOrderList = [...orderList];
    newOrderList.push(...selectedList);
    setOrderList(newOrderList);

    setSelectedList([]); // 선택한 메뉴 초기화
  };

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
        {selectedList.map((m, index) => {
          const selectedMenu = menuList.find((menu) => menu.id === m.menuId);

          return (
            <Box key={index}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={selectedMenu.imageUrl} />
                </ListItemAvatar>
                <ListItemText
                  primary={selectedMenu.name}
                  secondary={
                    <Typography variant="body2">
                      {selectedMenu.price}원
                    </Typography>
                  }
                />
                <ListItemText
                  primary={selectedList[index].count + "개"}
                  sx={{ textAlign: "right" }}
                />
              </ListItem>
              {index !== selectedList.length - 1 && <Divider />}
            </Box>
          );
        })}
      </List>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Box
            sx={{ border: "2px solid black", borderRadius: "15px" }}
            onClick={handleClickWrong}
          >
            <Typography fontSize="20px">틀림</Typography>
            <West style={{ fontSize: "20px" }} />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{ border: "2px solid black", borderRadius: "15px" }}
            onClick={handleClickRight}
          >
            <Typography fontSize="20px">맞음</Typography>
            <East style={{ fontSize: "20px" }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
