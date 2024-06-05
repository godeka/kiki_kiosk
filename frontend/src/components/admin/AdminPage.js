import { useState } from "react";

import { Container, Button } from "@mui/material";

import Login from "./Login.js";

function AdminPage({ setIsAdmin }) {
  const [contents, setContents] = useState(<></>);

  return (
    <Container>
      <Button
        variant="outlined"
        onClick={() => {
          setContents(<Login />);
        }}
      >
        관리자 로그인
      </Button>
      <Button variant="outlined" onClick={() => setIsAdmin(false)}>
        고객 페이지로
      </Button>
      {contents}
    </Container>
  );
}

export default AdminPage;
