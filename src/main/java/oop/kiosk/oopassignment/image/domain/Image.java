package oop.kiosk.oopassignment.image.domain;

import jakarta.persistence.*;
import lombok.*;
import oop.kiosk.oopassignment.menu.domain.Menu;

@Builder
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "image")
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String imageName;

    private String type;

    @Lob
    @Column(name = "picByte", length = 5000)
    private byte[] picByte;

    @OneToOne
    @JoinColumn(name = "menu_id")
    private Menu menu;
}
