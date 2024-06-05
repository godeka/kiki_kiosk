import { useState } from "react";

import { TextField, Button } from "@mui/material";

export default function Login() {
  const [passwd, setPasswd] = useState("");

  return (
    <form
      method="post"
      onSubmit={(e) => {
        e.preventDefault();
        alert("로그인 버튼 클릭! 입력한 비밀번호: " + passwd);
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
