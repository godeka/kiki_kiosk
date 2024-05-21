package oop.kiosk.oopassignment.order.dto;


import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class OrderCreateRequestList {
    private Long orderNumber;
    private List<OrderCreateRequest> orderSheet;
    private String paymentMethod;
    private String inOutInfo;

    public List<OrderCreateRequest> getOrderSheet() {
        return orderSheet;
    }
}
