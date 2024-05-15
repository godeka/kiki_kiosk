package oop.kiosk.oopassignment.image;

import oop.kiosk.oopassignment.image.domain.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<Image, Long>{

}
