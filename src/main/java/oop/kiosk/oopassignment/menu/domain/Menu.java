package oop.kiosk.oopassignment.menu.domain;

import jakarta.persistence.*;

import lombok.*;
import oop.kiosk.oopassignment.etc.MenuType;
import oop.kiosk.oopassignment.image.domain.Image;
import oop.kiosk.oopassignment.menu.dto.MenuCreateRequest;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "menu")
@Entity
public class Menu {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "menu_id")
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private int price;

    @Column
    private String info;

    @Column(nullable = false, columnDefinition = "TINYINT(1) DEFAULT 0")
    private boolean soldOut;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private MenuType type;

    @Column
    private String imageUrl;

    //이미지
    @OneToOne
    @JoinColumn(name = "image_id")
    private Image image;

    public Menu(MenuCreateRequest request) {
        this.name = request.getName();
        this.price = request.getPrice();
        this.info = request.getInfo();
        // type 에 menuType 으로 받아올꺼임 request 에서 int로 받았음
        this.type = MenuType.valueOf(request.getType());
        this.imageUrl = request.getImageUrl();
    }

    public void updateSoldOut(){
        if (this.soldOut == true){
            this.soldOut = false;
        } else {
            this.soldOut = true;
        }
    }
}

