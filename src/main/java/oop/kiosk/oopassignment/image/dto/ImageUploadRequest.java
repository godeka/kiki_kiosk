package oop.kiosk.oopassignment.image.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
public class ImageUploadRequest {
    private MultipartFile image;
}
