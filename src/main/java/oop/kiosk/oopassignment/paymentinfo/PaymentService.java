package oop.kiosk.oopassignment.paymentinfo;


import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import oop.kiosk.oopassignment.order.OrderRepository;
import oop.kiosk.oopassignment.order.domain.Order;
import oop.kiosk.oopassignment.paymentinfo.domain.Payment;
import oop.kiosk.oopassignment.paymentinfo.dto.PaymentResponse;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@RequiredArgsConstructor
@Service
public class PaymentService {

    private final PaymentRepository paymentRepository;
    private final OrderRepository orderRepository;

    @Transactional
    public void savePayment(Long orderPKId) {
        Order order = orderRepository.findById(orderPKId).orElseThrow();
        paymentRepository.save(new Payment(order));
    }

    @Transactional
    public PaymentResponse getDayPrice(LocalDate date){
        List<Payment> payments = paymentRepository.findAllByDate(date);
        Long totalPrice = 0L;
        for(Payment payment : payments){
            totalPrice += payment.getTotalPrice();
        }
        return new PaymentResponse(date.toString(), totalPrice);
    }

}
