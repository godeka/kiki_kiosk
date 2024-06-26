package oop.kiosk.oopassignment.order.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import oop.kiosk.oopassignment.menu.domain.Menu;
import oop.kiosk.oopassignment.order.dto.OrderCreateRequest;
import oop.kiosk.oopassignment.order.dto.OrderCreateRequestList;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDate;
import java.time.LocalDateTime;

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

    @Column(nullable = false)
    private Long price;

    @Column(nullable = false)
    private LocalDate orderDate;

    @Column(nullable = false)
    private String paymentMethod;

    @Column(nullable = false)
    private String inOutInfo;

    @ManyToOne
    @JoinColumn(name = "menu_id")
    private Menu menu;

    public Order(OrderCreateRequestList requestList, OrderCreateRequest request, long price, Menu menu, LocalDate orderDate, long orderNumber){
        this.count = request.getCount();
        this.price = price;
        this.menu = menu;
        this.orderDate = orderDate;
        this.paymentMethod = requestList.getPaymentMethod();
        this.inOutInfo = requestList.getInOutInfo();
        this.orderNumber = orderNumber;
    }
}
