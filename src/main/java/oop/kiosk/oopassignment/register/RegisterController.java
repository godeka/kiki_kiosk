package oop.kiosk.oopassignment.register;

import jakarta.servlet.http.HttpServletRequest;
import lombok.AllArgsConstructor;
import oop.kiosk.oopassignment.register.dto.LoginRequest;
import oop.kiosk.oopassignment.register.dto.PasswordChangeRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
public class RegisterController {
    private final RegisterService registerService;

    @PostMapping("/api/login")
    public ResponseEntity<String> login(
            @RequestBody LoginRequest loginRequest,
            final HttpServletRequest request
    ) {
        return new ResponseEntity<>(registerService.login(request, loginRequest.getPassword()), HttpStatus.OK);
    }

    @PostMapping("/api/logout")
    public ResponseEntity<String> logout(
            final HttpServletRequest request
    ) {
        return new ResponseEntity<>(registerService.logout(request), HttpStatus.OK);
    }
    @PutMapping("/api/password-change")
    public ResponseEntity<String> putPassword(
            @RequestBody PasswordChangeRequest passwordChangeRequest,
            final HttpServletRequest request
    ) {
        return new ResponseEntity<>(registerService.changePassword(request, passwordChangeRequest), HttpStatus.OK);
    }

}
