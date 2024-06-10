import { useState } from "react";

import { TextField, Button } from "@mui/material";

import { login } from "../../api/AdminApi";

export default function LoginScreen({ setLoggedIn }) {
  const [passwd, setPasswd] = useState("");

  return (
    <form
      method="post"
      onSubmit={(e) => {
        e.preventDefault();

        // 로그인 요청
        login(passwd).then((response) => {
          if (response.status === 200) {
            setLoggedIn(true);
            alert("로그인 성공!");
          } else {
            alert("로그인 실패! \n비밀번호를 확인해주세요.");
          }
        });
      }}
    >
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        autoComplete="current-password"
        onChange={(e) => {
          setPasswd(e.target.value);
        }}
      >
        {passwd}
      </TextField>
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign In
      </Button>
    </form>
  );
}
