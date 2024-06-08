import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";

import { Box, Typography } from "@mui/material";

export default function SalesManagement() {
  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            format="YYYY-MM-DD"
            label="날짜를 선택하세요."
            onChange={(newDate) => {}}
          />
        </DemoContainer>
      </LocalizationProvider>
      <Typography>일 매출: </Typography>
      <Typography>월 매출: </Typography>
    </Box>
  );
}
