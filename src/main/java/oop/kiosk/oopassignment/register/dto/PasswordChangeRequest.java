package oop.kiosk.oopassignment.register.dto;

import lombok.Data;

@Data
public class PasswordChangeRequest {
    private String pastPassword;
    private String currentPassword;
}
