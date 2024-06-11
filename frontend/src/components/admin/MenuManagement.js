import { useEffect, useState } from "react";

import {
  Container,
  Grid,
  Button,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

import { getAllMenu } from "../../api/CustomerApi.js";
import { addMenu, deleteMenu, soldoutMenu } from "../../api/AdminApi.js";
import MenuCard from "./MenuCard.js";

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
      // 메뉴 다시 가져오기
      getAllMenu().then((data) => {
        console.log(data);
        setMenuList(data);
      });
    });
  };

  return (
    <Container>
      <AddMenuForm setMenuList={setMenuList} />
      <Typography style={{ margin: "20px 0" }}>메뉴 목록</Typography>
      <Grid container spacing={2}>
        {menuList.map((menu, index) => (
          <Grid item key={index} xs={4} style={{ padding: "10px" }}>
            <MenuCard
              name={menu.name}
              image={menu.imageUrl}
              price={menu.price}
              soldOut={menu.soldOut}
              handleDeleteMenu={() => handleDeleteMenu(menu.id)}
              handleSoldoutMenu={() => handleSoldoutMenu(menu.id)}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

function AddMenuForm({ setMenuList }) {
  const [newMenu, setNewMenu] = useState({
    name: "",
    price: "",
    type: "",
    info: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setNewMenu({ ...newMenu, [name]: value });
  };

  const handleAddMenu = (e) => {
    e.preventDefault();

    newMenu.price = parseInt(newMenu.price);
    console.log(newMenu);

    addMenu(newMenu).then(() => {
      alert("메뉴 추가 성공!");

      // 입력창 초기화
      setNewMenu({
        name: "",
        price: "",
        type: "",
        info: "",
        imageUrl: "",
      });

      // 메뉴 다시 가져오기
      getAllMenu().then((data) => {
        console.log(data);
        setMenuList(data);
      });
    });
  };

  return (
    <form
      method="post"
      onSubmit={handleAddMenu}
      style={{ marginBottom: "50px" }}
    >
      <Typography sx={{ marginY: "20px" }}>메뉴 추가</Typography>
      <FormControl sx={{ minWidth: "100px" }}>
        <InputLabel id="select-label">메뉴 타입</InputLabel>
        <Select
          name="type"
          value={newMenu.type}
          selectId="select-label"
          onChange={handleChange}
        >
          <MenuItem value="HAMBURGER">버거</MenuItem>
          <MenuItem value="DRINK">음료</MenuItem>
          <MenuItem value="SIDE">사이드</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={2}>
        <Grid item xs={4} style={{ padding: "20px" }}>
          <TextField
            name="name"
            variant="standard"
            label="메뉴 이름"
            required
            value={newMenu.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4} style={{ padding: "20px" }}>
          <TextField
            name="price"
            variant="standard"
            label="가격"
            type="number"
            required
            value={newMenu.price}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4} style={{ padding: "20px" }}>
          <TextField
            name="imageUrl"
            variant="standard"
            label="이미지 URL"
            required
            value={newMenu.imageUrl}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <Button type="submit" variant="contained" sx={{ marginY: "10px" }}>
        메뉴 추가
      </Button>
    </form>
  );
}
