import { useState } from "react";

import { Container, IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

import Login from "./Login.js";
import AdminScreen from "./AdminScreen.js";

function AdminPage({ setMode }) {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Container className="admin-page" disableGutters>
      <IconButton onClick={() => setMode("home")}>
        <ArrowBack />
      </IconButton>
      {loggedIn ? (
        <AdminScreen setLoggedIn={setLoggedIn} />
      ) : (
        <Login setLoggedIn={setLoggedIn} />
      )}
    </Container>
  );
}

export default AdminPage;
