package oop.kiosk.oopassignment.paymentinfo;


import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import oop.kiosk.oopassignment.order.OrderRepository;
import oop.kiosk.oopassignment.order.domain.Order;
import oop.kiosk.oopassignment.paymentinfo.domain.Payment;
import oop.kiosk.oopassignment.paymentinfo.dto.PaymentMonthResponse;
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

    @Transactional
    public PaymentMonthResponse getMonthPrice(LocalDate date){
        // 2024-05 를 입력받아서 2024-05-01 ~ 2024-05-31 사이의 Payment들의 totalPrice를 반환
        LocalDate startDate = date.withDayOfMonth(1);
        LocalDate endDate = date.withDayOfMonth(date.lengthOfMonth());
        List<Payment> payments = paymentRepository.findAllByDateBetween(startDate, endDate);
        Long totalPrice = 0L;
        for(Payment payment : payments){
            totalPrice += payment.getTotalPrice();
        }
        return new PaymentMonthResponse(startDate.toString(), endDate.toString(), totalPrice);
    }

}
