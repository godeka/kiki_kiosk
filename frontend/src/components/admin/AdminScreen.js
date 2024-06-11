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
  TextField,
  IconButton,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

import { changePassword, logout } from "../../api/AdminApi";

import MenuManagement from "./MenuManagement";
import SalesManagement from "./SalesManagement";

export default function AdminScreen({ setLoggedIn }) {
  const [tabIndex, setTabIndex] = useState(0);
  const [changindPw, setChangingPw] = useState(false);

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
          {changindPw ? (
            <></>
          ) : (
            <Button color="inherit" onClick={() => setChangingPw(true)}>
              비밀번호 변경
            </Button>
          )}
          <Button
            color="inherit"
            onClick={() => {
              // 로그아웃 요청
              logout().then(() => {
                setLoggedIn(false);
              });
            }}
          >
            로그아웃
          </Button>
        </Toolbar>
      </AppBar>
      {changindPw ? (
        <ChangePasswordForm setChangingPw={setChangingPw} />
      ) : (
        <>
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
        </>
      )}
    </Container>
  );
}

function ChangePasswordForm({ setChangingPw }) {
  const [oldPasswd, setOldPasswd] = useState("");
  const [newPasswd, setNewPasswd] = useState("");
  const [confirmPasswd, setConfirmPasswd] = useState("");

  const handleChangePw = (e) => {
    e.preventDefault();

    // 패스워드 변경 요청
    console.log("기존 비밀번호:", oldPasswd);
    console.log("새 비밀번호:", newPasswd);
    console.log("새 비밀번호 확인:", confirmPasswd);
    if (newPasswd !== confirmPasswd) {
      alert("새 비밀번호가 일치하지 않습니다.");
      return;
    } else {
      changePassword(oldPasswd, newPasswd).then((response) => {
        if (response.status === 200) {
          alert("비밀번호 변경 성공!");

          // 다시 기존 화면으로
          setChangingPw(false);
        } else {
          alert("비밀번호 변경 실패! \n기존 비밀번호를 확인해주세요.");
        }
      });
    }
  };

  return (
    <form method="post" onSubmit={handleChangePw}>
      <IconButton sx={{ margin: "10px" }} onClick={() => setChangingPw(false)}>
        <ArrowBack />
      </IconButton>
      <div style={{ padding: "0 70px" }}>
        <Typography
          sx={{ marginY: "20px", textAlign: "center", fontSize: "20px" }}
        >
          비밀번호 변경
        </Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          label="기존 비밀번호"
          type="password"
          onChange={(e) => {
            setOldPasswd(e.target.value);
          }}
        >
          {oldPasswd}
        </TextField>
        <TextField
          margin="normal"
          required
          fullWidth
          label="새 비밀번호"
          type="password"
          onChange={(e) => {
            setNewPasswd(e.target.value);
          }}
        >
          {newPasswd}
        </TextField>
        <TextField
          margin="normal"
          required
          fullWidth
          label="새 비밀번호 확인"
          type="password"
          onChange={(e) => {
            setConfirmPasswd(e.target.value);
          }}
        >
          {confirmPasswd}
        </TextField>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          비밀번호 변경
        </Button>
      </div>
    </form>
  );
}
