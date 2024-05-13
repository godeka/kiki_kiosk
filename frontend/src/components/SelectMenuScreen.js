import { Container, Typography, Grid } from "@mui/material";
import GoBackButton from "./button/GoBackButton";
import MenuButton from "./button/MenuButton";

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

export default function SelectMenuScreen({ menuList = sampleMenuList }) {
  return (
    <Container>
      <GoBackButton />
      <Typography sx={{ color: "white", margin: "30px", fontSize: "30px" }}>
        메뉴 선택
      </Typography>
      <Grid container spacing={2}>
        {menuList.map((menu, index) => (
          <Grid item key={index} xs={4} style={{ padding: "10px" }}>
            <MenuButton name={menu.name} price={menu.price} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
