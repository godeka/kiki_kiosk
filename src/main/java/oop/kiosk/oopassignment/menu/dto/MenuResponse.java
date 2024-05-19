package oop.kiosk.oopassignment.menu.dto;


import lombok.Getter;
import lombok.Setter;
import oop.kiosk.oopassignment.menu.domain.Menu;

@Setter
@Getter
public class MenuResponse {
    private Long id;
    private String name;
    private int price;
    private String type;
    private String info;
    private boolean soldOut;
    private String imageUrl;
    //이미지

    public MenuResponse(Menu menu){
        this.id = menu.getId();
        this.name = menu.getName();
        this.price = menu.getPrice();
        this.info = menu.getInfo();
        this.soldOut = menu.isSoldOut();
        this.type = menu.getType().getName();
        this.imageUrl = menu.getImageUrl();
    }
}
