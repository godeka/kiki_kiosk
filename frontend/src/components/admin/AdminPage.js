import { Container, Button } from "@mui/material";

function AdminPage({ setIsAdmin }) {
  return (
    <Container>
      <Button variant="outlined" onClick={() => setIsAdmin(true)}>
        관리자 로그인
      </Button>
      <Button variant="outlined" onClick={() => setIsAdmin(false)}>
        고객 페이지로
      </Button>
    </Container>
  );
}

export default AdminPage;
