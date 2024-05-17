package oop.kiosk.oopassignment.paymentinfo;

import lombok.AllArgsConstructor;
import oop.kiosk.oopassignment.paymentinfo.dto.PaymentMonthResponse;
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

    @GetMapping("/api/payment/day")
    public PaymentResponse getDayPrice(@RequestParam LocalDate date) {
        return paymentService.getDayPrice(date);
    }

    @GetMapping("/api/payment/month")
    public PaymentMonthResponse getMonthPrice(@RequestParam LocalDate date) {
        return paymentService.getMonthPrice(date);
    }
}
