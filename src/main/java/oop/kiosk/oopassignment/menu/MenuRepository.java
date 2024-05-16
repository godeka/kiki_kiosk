package oop.kiosk.oopassignment.menu;


import oop.kiosk.oopassignment.etc.MenuType;
import oop.kiosk.oopassignment.menu.domain.Menu;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MenuRepository extends JpaRepository<Menu, Long> {
    Optional<Menu> findById(Long id);
    Optional<Menu> findByType(MenuType type);
}
