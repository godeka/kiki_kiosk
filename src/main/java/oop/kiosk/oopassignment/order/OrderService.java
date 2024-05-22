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
import oop.kiosk.oopassignment.paymentinfo.PaymentService;

import java.time.LocalDate;
import java.util.List;

@RequiredArgsConstructor
@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final MenuRepository menuRepository;
    private final PaymentService paymentService;


    @Transactional
    public ResponseEntity<Long> saveOrder(OrderCreateRequestList requestList) {
        List<OrderCreateRequest> requests = requestList.getOrderSheet();

        Long orderNumber = 0L;
        if (orderRepository.count() == 0) {
            orderNumber = 1L;
        } else {
            orderNumber = orderRepository.findTopByOrderByIdDesc().getOrderNumber() + 1;
        }

        for(OrderCreateRequest request : requests){
            Menu menu = menuRepository.findById(request.getMenuId())
                    .orElseThrow();
            Order order = new Order(requestList,request, menu.getPrice(), menu, LocalDate.now(), orderNumber);
            orderRepository.save(order);
            paymentService.savePayment(order.getId());
        }

        return ResponseEntity.ok(orderNumber);
    }

    @Transactional
    public List<OrderResponse> getOrderAll() {
        return orderRepository.findAll().stream()
                .map(OrderResponse::new)
                .toList();
    }
}
