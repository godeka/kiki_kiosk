package oop.kiosk.oopassignment.paymentinfo;


import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import oop.kiosk.oopassignment.order.OrderRepository;
import oop.kiosk.oopassignment.order.domain.Order;
import oop.kiosk.oopassignment.paymentinfo.domain.Payment;
import org.springframework.stereotype.Service;

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
}
