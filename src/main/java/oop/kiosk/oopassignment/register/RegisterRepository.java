package oop.kiosk.oopassignment.register;

import oop.kiosk.oopassignment.register.domain.Register;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RegisterRepository extends JpaRepository<Register, Long> {
    Optional<Register> findRegisterByPassword(String password);
}
