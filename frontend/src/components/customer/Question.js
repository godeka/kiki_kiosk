import { Typography } from "@mui/material";

export default function Question({ children }) {
  return (
    <Typography
      variant="h3"
      style={{
        marginTop: "50px",
        marginBottom: "120px",
        fontSize: "30px",
        color: "white",
      }}
    >
      {children}
    </Typography>
  );
}
