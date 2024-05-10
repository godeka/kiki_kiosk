package oop.kiosk.oopassignment.menu.domain;

import jakarta.persistence.*;

import lombok.*;
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

    @Column(nullable = false)
    private boolean soldOut;

    //이미지

    public Menu(MenuCreateRequest request) {
        this.name = request.getName();
        this.price = request.getPrice();
        this.info = request.getInfo();
        this.soldOut = request.isSoldOut();
    }
}
