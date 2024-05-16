package oop.kiosk.oopassignment.order.dto;


import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class OrderCreateRequestList {
    private Long orderNumber;
    private List<OrderCreateRequest> orderSheet;

    public List<OrderCreateRequest> getOrderSheet() {
        return orderSheet;
    }
}
