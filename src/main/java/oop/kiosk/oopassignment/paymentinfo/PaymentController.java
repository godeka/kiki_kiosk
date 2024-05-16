package oop.kiosk.oopassignment.paymentinfo;

import lombok.AllArgsConstructor;
import oop.kiosk.oopassignment.paymentinfo.dto.PaymentResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;

@AllArgsConstructor
@RestController
public class PaymentController {
    private final PaymentService paymentService;

    @PostMapping("/api/payment") // 테스트용 API
    public void savePayment(@RequestParam Long orderPKId) {
        paymentService.savePayment(orderPKId);
    }

    @GetMapping("/api/payment")
    public PaymentResponse getDayPrice(@RequestParam LocalDate date) {
        return paymentService.getDayPrice(date);
    }
}
