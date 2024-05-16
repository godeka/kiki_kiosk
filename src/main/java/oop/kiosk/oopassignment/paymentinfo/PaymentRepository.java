package oop.kiosk.oopassignment.paymentinfo;

import oop.kiosk.oopassignment.paymentinfo.domain.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.time.LocalDate;

public interface PaymentRepository extends JpaRepository<Payment, Long>{
    List<Payment> findAllByDate(LocalDate date);
}
