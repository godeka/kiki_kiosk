package oop.kiosk.oopassignment.image;


import lombok.AllArgsConstructor;
import lombok.SneakyThrows;
import oop.kiosk.oopassignment.image.dto.ImageUploadRequest;
import oop.kiosk.oopassignment.image.dto.ImageUploadResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
public class ImageController {

    private final ImageService imageService;



    @SneakyThrows
    @PostMapping("/image/upload")
    public ResponseEntity<ImageUploadResponse> uploadImage(ImageUploadRequest request){
        imageService.saveImage(request.getImage());
        return ResponseEntity.status(HttpStatus.OK)
                .body(new ImageUploadResponse("Image uploaded successfully : " + request.getImage().getOriginalFilename()));
    }
}
