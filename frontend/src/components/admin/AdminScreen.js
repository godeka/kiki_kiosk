import { useState } from "react";

import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Tabs,
  Tab,
} from "@mui/material";

import MenuManagement from "./MenuManagement";
import SalesManagement from "./SalesManagement";

export default function AdminScreen({ setLoggedIn }) {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Container disableGutters>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            키키 키오스크 관리자 페이지
          </Typography>
          <Button color="inherit">비밀번호 변경</Button>
          <Button
            color="inherit"
            onClick={() => {
              // 로그아웃 요청

              setLoggedIn(false);
            }}
          >
            로그아웃
          </Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          centered
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="메뉴 관리" />
          <Tab label="매출 관리" />
        </Tabs>
      </Box>
      <Box sx={{ p: 3 }}>
        {tabIndex === 0 && <MenuManagement />}
        {tabIndex === 1 && <SalesManagement />}
      </Box>
    </Container>
  );
}
