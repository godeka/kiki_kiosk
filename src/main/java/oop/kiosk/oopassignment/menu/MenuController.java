package oop.kiosk.oopassignment.menu;


import lombok.AllArgsConstructor;
import oop.kiosk.oopassignment.menu.dto.MenuCreateRequest;
import oop.kiosk.oopassignment.menu.dto.MenuResponse;
import org.springframework.web.bind.annotation.*;

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

    @PatchMapping("/api/menu")
    public void updateSoldOut(@RequestParam Long menuId){
        menuService.updateSoldOut(menuId);
    }

    @DeleteMapping("/api/menu")
    public void deleteMenu(@RequestParam Long menuId){
        menuService.deleteMenu(menuId);
    }
}
