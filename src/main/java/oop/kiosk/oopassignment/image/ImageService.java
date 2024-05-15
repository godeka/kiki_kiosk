package oop.kiosk.oopassignment.image;


import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import oop.kiosk.oopassignment.image.domain.Image;
import oop.kiosk.oopassignment.image.utils.ImageUtility;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RequiredArgsConstructor
@Service
public class ImageService {

    private final ImageRepository imageRepository;

    @Transactional
    public void saveImage(MultipartFile file) throws IOException {
        imageRepository.save(Image.builder()
                .imageName(file.getOriginalFilename())
                .type(file.getContentType())
                .picByte(ImageUtility.compressImage(file.getBytes())).build());
    }
}
