package oop.kiosk.oopassignment.order;

import lombok.AllArgsConstructor;
import oop.kiosk.oopassignment.order.dto.OrderCreateRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import oop.kiosk.oopassignment.order.dto.OrderResponse;

import java.util.List;
@AllArgsConstructor
@RestController
public class OrderController {

    private final OrderService orderService;

    @PostMapping("/api/order")
    public void saveOrder(@RequestBody OrderCreateRequest orderCreateRequest){
        orderService.saveOrder(orderCreateRequest);
    }

    @GetMapping("/api/order/all")
    public List<OrderResponse> getOrderAll(){
        return orderService.getOrderAll();
    }
}
