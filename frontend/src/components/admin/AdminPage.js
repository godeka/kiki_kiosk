import { useState } from "react";

import { Container, Button } from "@mui/material";

import Login from "./Login.js";
import AdminScreen from "./AdminScreen.js";

function AdminPage({ setIsAdmin }) {
  const [contents, setContents] = useState(<></>);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Container>
      <Button
        variant="outlined"
        onClick={() => {
          setContents(<Login setLoggedIn={setLoggedIn} />);
        }}
      >
        관리자 로그인
      </Button>
      <Button variant="outlined" onClick={() => setIsAdmin(false)}>
        고객 페이지로
      </Button>
      {loggedIn ? <AdminScreen setLoggedIn={setLoggedIn} /> : contents}
    </Container>
  );
}

export default AdminPage;
