import { useNavigate, useState } from "react-router-dom";

import { Container, Typography, Grid, Box } from "@mui/material";
import { East } from "@mui/icons-material";

import GoBackButton from "../button/GoBackButton";
import MenuButton from "../button/MenuButton";

const sampleMenuList = [
  { name: "메뉴1", price: "5,000₩", img: "" },
  { name: "메뉴2", price: "6,000₩", img: "" },
  { name: "메뉴3", price: "7,000₩", img: "" },
  { name: "메뉴4", price: "4,000₩", img: "" },
  { name: "메뉴5", price: "5,000₩", img: "" },
  { name: "메뉴6", price: "6,000₩", img: "" },
  { name: "메뉴7", price: "7,000₩", img: "" },
  { name: "메뉴8", price: "4,000₩", img: "" },
  { name: "메뉴9", price: "5,000₩", img: "" },
]; // 메뉴 목록

export default function SelectMenuScreen({
  menuList = sampleMenuList,
  selectedList,
  setSelectedList,
}) {
  const navigate = useNavigate();
  const handleClickMenu = (menu) => {
    let newSelectedMenus = [...selectedList];
    let index = newSelectedMenus.findIndex((m) => m.menuId === menu.id);

    if (index === -1) {
      newSelectedMenus.push({ menuId: menu.id, count: 1 });
    } else {
      newSelectedMenus[index].count += 1;
    }
    setSelectedList(newSelectedMenus);
    console.log(newSelectedMenus);
  };

  return (
    <Container>
      <GoBackButton />
      <Typography sx={{ color: "white", margin: "30px", fontSize: "30px" }}>
        메뉴 선택
      </Typography>
      <Grid container spacing={2}>
        {menuList.map((menu, index) => {
          const idx = selectedList.findIndex((m) => m.menuId === menu.id);
          return (
            <Grid item key={index} xs={4} style={{ padding: "10px" }}>
              <MenuButton
                name={menu.name}
                price={menu.price}
                img={menu.imageUrl}
                handleClick={() => handleClickMenu(menu)}
                clickCount={selectedList[idx] ? selectedList[idx].count : 0}
              />
            </Grid>
          );
        })}
      </Grid>
      <Box
        position="fixed"
        top="80%"
        left="42%"
        onClick={() => navigate("/OrderCheck")}
      >
        <Typography fontSize="20px">다음 단계로</Typography>
        <East style={{ fontSize: "20px" }} />
      </Box>
    </Container>
  );
}
