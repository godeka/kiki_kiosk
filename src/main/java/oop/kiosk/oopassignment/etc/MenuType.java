package oop.kiosk.oopassignment.etc;

public enum MenuType {
    HAMBURGER("버거"), //name : HAMBERGER , ordinal : 0
    DRINK("음료"),
    SIDE("사이드");

    private final String name;

    MenuType(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
