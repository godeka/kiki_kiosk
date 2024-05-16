package oop.kiosk.oopassignment.order;

import lombok.AllArgsConstructor;
import oop.kiosk.oopassignment.order.dto.OrderCreateRequest;
import oop.kiosk.oopassignment.order.dto.OrderCreateRequestList;
import org.springframework.http.ResponseEntity;
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

    @PostMapping("/api/order") //메뉴 추가
    public ResponseEntity<Long> saveOrder(@RequestBody OrderCreateRequestList request){
       return orderService.saveOrder(request);
    }

    @GetMapping("/api/order/all")
    public List<OrderResponse> getOrderAll(){
        return orderService.getOrderAll();
    }
}
