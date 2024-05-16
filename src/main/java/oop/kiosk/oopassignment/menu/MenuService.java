package oop.kiosk.oopassignment.menu;


import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import oop.kiosk.oopassignment.etc.MenuType;
import oop.kiosk.oopassignment.menu.domain.Menu;
import oop.kiosk.oopassignment.menu.dto.MenuCreateRequest;
import oop.kiosk.oopassignment.menu.dto.MenuResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class MenuService {
    private final MenuRepository menuRepository;

    @Transactional
    public List<MenuResponse> saveMenu(MenuCreateRequest menuCreateRequest) {
        menuRepository.save(new Menu(menuCreateRequest));
        return menuRepository.findAll().stream()
                .map(MenuResponse::new)
                .toList();
    }

    @Transactional
    public List<MenuResponse> getMenuAll() {
        return menuRepository.findAll().stream()
                .map(MenuResponse::new)
                .toList();
    }

    @Transactional
    public List<MenuResponse> getMenuByType(String type) {
        MenuType menuType = MenuType.valueOf(type);
        return menuRepository.findByType(menuType).stream()
                .map(MenuResponse::new)
                .toList();
    }

    @Transactional
    public ResponseEntity<Menu> updateSoldOut(Long menuId){
        Menu menu = menuRepository.findById(menuId)
                .orElseThrow(IllegalArgumentException::new);
        menu.updateSoldOut();

        return ResponseEntity.ok(menu);
    }

    @Transactional
    public ResponseEntity<List<Menu>> deleteMenu(Long menuId) {
        menuRepository.deleteById(menuId);

        return ResponseEntity.ok(menuRepository.findAll());
    }
}
