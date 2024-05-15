package oop.kiosk.oopassignment.order;

import oop.kiosk.oopassignment.order.domain.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long>{
}
