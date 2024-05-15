package oop.kiosk.oopassignment.paymentinfo.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import oop.kiosk.oopassignment.order.domain.Order;

import java.time.LocalDate;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "payment_info")
@Entity
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "payment_info_id")
    private Long id;

    @Column(nullable = false)
    private LocalDate date;

    @Column(nullable = false)
    private Long totalPrice;

    @OneToOne
    @JoinColumn(name = "order_pk_id")
    private Order order;

    public Payment(Order order) {
        this.date = order.getOrderDate();
        this.totalPrice = order.getPrice() * order.getCount();
        this.order = order;
    }
}
