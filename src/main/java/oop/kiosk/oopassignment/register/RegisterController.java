package oop.kiosk.oopassignment.register;

import jakarta.servlet.http.HttpServletRequest;
import lombok.AllArgsConstructor;
import oop.kiosk.oopassignment.register.dto.LoginRequest;
import oop.kiosk.oopassignment.register.dto.PasswordChangeRequest;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
public class RegisterController {
    private final RegisterService registerService;

    @PostMapping("/api/login")
    public ResponseEntity<String> login(
            @RequestBody LoginRequest loginRequest,
            final HttpServletRequest request
    ) {
        String response = registerService.login(request, loginRequest.getPassword());
        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.CONTENT_TYPE, "application/json; charset=UTF-8");
        return new ResponseEntity<>(response, headers, HttpStatus.OK);
    }

    @PostMapping("/api/logout")
    public ResponseEntity<String> logout(
            final HttpServletRequest request
    ) {
        String response = registerService.logout(request);
        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.CONTENT_TYPE, "application/json; charset=UTF-8");
        return new ResponseEntity<>(response, headers, HttpStatus.OK);
    }

    @PutMapping("/api/password-change")
    public ResponseEntity<String> putPassword(
            @RequestBody PasswordChangeRequest passwordChangeRequest,
            final HttpServletRequest request
    ) {
        String response = registerService.changePassword(request, passwordChangeRequest);
        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.CONTENT_TYPE, "application/json; charset=UTF-8");
        return new ResponseEntity<>(response, headers, HttpStatus.OK);
    }
}
