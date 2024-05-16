package oop.kiosk.oopassignment.paymentinfo.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PaymentResponse {
    private String paymentDate;
    private Long DateAllPrice;

    public PaymentResponse(String paymentDate, Long DateAllPrice) {
        this.paymentDate = paymentDate;
        this.DateAllPrice = DateAllPrice;
    }
}
