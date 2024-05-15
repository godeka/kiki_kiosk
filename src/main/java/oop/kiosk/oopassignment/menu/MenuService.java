package oop.kiosk.oopassignment.menu;


import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import oop.kiosk.oopassignment.menu.domain.Menu;
import oop.kiosk.oopassignment.menu.dto.MenuCreateRequest;
import oop.kiosk.oopassignment.menu.dto.MenuResponse;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class MenuService {
    private final MenuRepository menuRepository;

    @Transactional
    public void saveMenu(MenuCreateRequest menuCreateRequest) {
        menuRepository.save(new Menu(menuCreateRequest));
    }

    @Transactional
    public List<MenuResponse> getMenuAll() {
        return menuRepository.findAll().stream()
                .map(MenuResponse::new)
                .toList();
    }

    @Transactional
    public void updateSoldOut(Long menuId){
        Menu menu = menuRepository.findById(menuId)
                .orElseThrow(IllegalArgumentException::new);
        menu.updateSoldOut();
    }

    @Transactional
    public void deleteMenu(Long menuId) {
        menuRepository.deleteById(menuId);
    }
}
