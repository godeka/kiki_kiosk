package oop.kiosk.oopassignment.order.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderCreateRequest {
    private Long orderNumber;
    private Long count;
    private Long menuId;
}
