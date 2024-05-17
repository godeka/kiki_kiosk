package oop.kiosk.oopassignment.paymentinfo.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PaymentMonthResponse {
    private String startDate;
    private String endDate;
    private Long DateAllPrice;

    public PaymentMonthResponse(String startDate, String endDate, Long DateAllPrice) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.DateAllPrice = DateAllPrice;
    }
}