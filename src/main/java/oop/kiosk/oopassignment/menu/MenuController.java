package oop.kiosk.oopassignment.menu;


import lombok.AllArgsConstructor;
import oop.kiosk.oopassignment.menu.domain.Menu;
import oop.kiosk.oopassignment.menu.dto.MenuCreateRequest;
import oop.kiosk.oopassignment.menu.dto.MenuResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
public class MenuController {

    private final MenuService menuService;

    @PostMapping("/api/menu")
    public List<MenuResponse> saveMenu(@RequestBody MenuCreateRequest menuCreateRequest){
        return menuService.saveMenu(menuCreateRequest);
    }

    @GetMapping("/api/menu/all")
    public List<MenuResponse> getMenuAll(){
        return menuService.getMenuAll();
    }

    @GetMapping("/api/menu/type")
    public List<MenuResponse> getMenuByType(@RequestParam String type){
        return menuService.getMenuByType(type);
    }

    @PatchMapping("/api/menu")
    public ResponseEntity<Menu> updateSoldOut(@RequestParam Long menuId){
        return menuService.updateSoldOut(menuId);
    }

    @DeleteMapping("/api/menu")
    public ResponseEntity<List<Menu>> deleteMenu(@RequestParam Long menuId){
        return menuService.deleteMenu(menuId);
    }
}
