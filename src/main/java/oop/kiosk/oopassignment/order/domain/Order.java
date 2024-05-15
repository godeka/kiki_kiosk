package oop.kiosk.oopassignment.order.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import oop.kiosk.oopassignment.menu.domain.Menu;
import oop.kiosk.oopassignment.order.dto.OrderCreateRequest;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "orderTable")
@Entity
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id")
    private Long id;

    @Column(nullable = false)
    private Long orderNumber;

    @Column(nullable = false)
    private Long count;

    @Column
    private Long price;

    @ManyToOne
    @JoinColumn(name = "menu_id")
    private Menu menu;

    public Order(OrderCreateRequest request, long price, Menu menu) {
        this.orderNumber = request.getOrderNumber();
        this.count = request.getCount();
        this.price = price;
        this.menu = menu;
    }
}
