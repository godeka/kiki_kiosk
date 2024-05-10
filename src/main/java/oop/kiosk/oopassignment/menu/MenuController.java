package oop.kiosk.oopassignment.menu;


import lombok.AllArgsConstructor;
import oop.kiosk.oopassignment.menu.dto.MenuCreateRequest;
import oop.kiosk.oopassignment.menu.dto.MenuResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@AllArgsConstructor
@RestController
public class MenuController {

    private final MenuService menuService;

    @PostMapping("/api/menu")
    public void saveMenu(@RequestBody MenuCreateRequest menuCreateRequest){
        menuService.saveMenu(menuCreateRequest);
    }

    @GetMapping("/api/menu/all")
    public List<MenuResponse> getMenuAll(){
        return menuService.getMenuAll();
    }
}
