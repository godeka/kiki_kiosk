package oop.kiosk.oopassignment.paymentinfo;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
public class PaymentController {
    private final PaymentService paymentService;

    @PostMapping("/api/payment")
    public void savePayment(@RequestParam Long orderPKId) {
        paymentService.savePayment(orderPKId);
    }
}
