package oop.kiosk.oopassignment.order;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import oop.kiosk.oopassignment.menu.domain.Menu;
import org.springframework.stereotype.Service;

import oop.kiosk.oopassignment.order.domain.Order;
import oop.kiosk.oopassignment.order.dto.OrderCreateRequest;
import oop.kiosk.oopassignment.menu.MenuRepository;
import oop.kiosk.oopassignment.order.dto.OrderResponse;

import java.util.List;

@RequiredArgsConstructor
@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final MenuRepository menuRepository;

    @Transactional
    public void saveOrder(OrderCreateRequest orderCreateRequest) {
        Menu menu = menuRepository.findById(orderCreateRequest.getMenuId())
                .orElseThrow(() -> new IllegalArgumentException("Menu not found"));
        Long price = (long) menu.getPrice();
        orderRepository.save(new Order(orderCreateRequest, price, menu));
    }

    @Transactional
    public List<OrderResponse> getOrderAll() {
        return orderRepository.findAll().stream()
                .map(OrderResponse::new)
                .toList();
    }
}
