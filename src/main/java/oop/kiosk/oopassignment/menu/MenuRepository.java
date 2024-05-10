package oop.kiosk.oopassignment.menu;


import oop.kiosk.oopassignment.menu.domain.Menu;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MenuRepository extends JpaRepository<Menu, Long> {
}
