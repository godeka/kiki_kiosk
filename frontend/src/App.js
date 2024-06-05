import { useState } from "react";

import { Container } from "@mui/material";

import CustomerPage from "./components/customer/CustomerPage.js";
import AdminPage from "./components/admin/AdminPage.js";

function App() {
  const [isAdmin, setIsAdmin] = useState(true);
  const contents = isAdmin ? (
    <AdminPage setIsAdmin={setIsAdmin} />
  ) : (
    <CustomerPage setIsAdmin={setIsAdmin} />
  );
  return (
    <Container
      className={isAdmin ? "admin-page" : "customer-page"}
      disableGutters
    >
      {contents}
    </Container>
  );
}

export default App;
