import { useEffect, useState } from "react";

import { Container, Grid, Button, Typography } from "@mui/material";

import { getAllMenu } from "../../api/ApiService.js";
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
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
