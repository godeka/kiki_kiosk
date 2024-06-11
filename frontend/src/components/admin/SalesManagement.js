import { useState } from "react";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";

import { Box, Typography } from "@mui/material";
import { getDailySales, getMonthlySales } from "../../api/AdminApi";

export default function SalesManagement() {
  const [dailySales, setDailySales] = useState();
  const [monthlySales, setMonthlySales] = useState();

  const handleChangeDate = (date) => {
    console.log(date.format("YYYY-MM-DD"));

    // 해당 날짜의 일 매출, 월 매출을 가져와서 출력
    getDailySales(date.format("YYYY-MM-DD")).then((data) => {
      setDailySales(data.dateAllPrice);
    });
    getMonthlySales(date.format("YYYY-MM-DD")).then((data) => {
      setMonthlySales(data.dateAllPrice);
    });
  };

  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            format="YYYY-MM-DD"
            label="날짜를 선택하세요."
            onChange={(date) => handleChangeDate(date)}
          />
        </DemoContainer>
      </LocalizationProvider>
      <Typography>일 매출: {dailySales}원</Typography>
      <Typography>월 매출: {monthlySales}원</Typography>
    </Box>
  );
}
