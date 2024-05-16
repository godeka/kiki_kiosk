package oop.kiosk.oopassignment.order;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import oop.kiosk.oopassignment.menu.domain.Menu;
import oop.kiosk.oopassignment.order.dto.OrderCreateRequest;
import oop.kiosk.oopassignment.order.dto.OrderCreateRequestList;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import oop.kiosk.oopassignment.order.domain.Order;
import oop.kiosk.oopassignment.menu.MenuRepository;
import oop.kiosk.oopassignment.order.dto.OrderResponse;

import java.time.LocalDate;
import java.util.List;

@RequiredArgsConstructor
@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final MenuRepository menuRepository;

    @Transactional
    public ResponseEntity<Long> saveOrder(OrderCreateRequestList requestList) {
        List<OrderCreateRequest> requests = requestList.getOrderSheet();

        for(OrderCreateRequest request : requests){
            Menu menu = menuRepository.findById(request.getMenuId())
                    .orElseThrow();
            Order order = new Order(requestList,request, menu.getPrice(), menu, LocalDate.now());
            orderRepository.save(order);
        }

        return ResponseEntity.ok(requestList.getOrderNumber());
    }

    @Transactional
    public List<OrderResponse> getOrderAll() {
        return orderRepository.findAll().stream()
                .map(OrderResponse::new)
                .toList();
    }
}
