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
}
