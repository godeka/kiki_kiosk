import { useEffect, useState } from "react";

import { Container, Grid, Button, Typography } from "@mui/material";

import { getAllMenu } from "../../api/CustomerApi.js";
import { deleteMenu, soldoutMenu } from "../../api/AdminApi.js";
import MenuItem from "./MenuItem.js";

export default function MenuManagement() {
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    // 모든 메뉴 가져오기
    getAllMenu().then((data) => {
      console.log(data);
      setMenuList(data);
    });
  }, []);

  const handleDeleteMenu = (menuId) => {
    deleteMenu(menuId).then(() => {
      let newMenuList = menuList.filter((m) => m.id !== menuId);
      setMenuList(newMenuList);
    });
  };

  const handleSoldoutMenu = (menuId) => {
    soldoutMenu(menuId).then(() => {
      // 메뉴 품절 표시
    });
  };

  return (
    <Container>
      <Button variant="outlined">메뉴 추가</Button>
      <Typography style={{ margin: "20px 0" }}>메뉴 목록</Typography>
      <Grid container spacing={2}>
        {menuList.map((menu, index) => (
          <Grid item key={index} xs={4} style={{ padding: "10px" }}>
            <MenuItem
              name={menu.name}
              image={menu.imageUrl}
              price={menu.price}
              handleDeleteMenu={() => handleDeleteMenu(menu.id)}
              handleSoldoutMenu={() => handleSoldoutMenu(menu.id)}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
