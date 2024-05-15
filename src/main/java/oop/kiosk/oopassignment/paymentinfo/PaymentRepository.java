package oop.kiosk.oopassignment.paymentinfo;

import oop.kiosk.oopassignment.paymentinfo.domain.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepository extends JpaRepository<Payment, Long>{

}
