package oop.kiosk.oopassignment.order.dto;

import lombok.Getter;
import lombok.Setter;

import oop.kiosk.oopassignment.order.domain.Order;

@Setter
@Getter
public class OrderResponse {
    private Long orderNumber;
    private Long count;
    private Long price;
    private Long menuId;
    private String orderDate;

    public OrderResponse(Order order) {
        this.orderNumber = order.getOrderNumber();
        this.count = order.getCount();
        this.price = order.getPrice();
        this.menuId = order.getMenu().getId();
        this.orderDate = order.getOrderDate().toString();
    }
}
