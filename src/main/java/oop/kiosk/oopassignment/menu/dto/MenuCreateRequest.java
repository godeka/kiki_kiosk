package oop.kiosk.oopassignment.menu.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MenuCreateRequest {
    private String name;
    private int price;
    private String type;
    private String info;
}
