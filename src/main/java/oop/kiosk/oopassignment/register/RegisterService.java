package oop.kiosk.oopassignment.register;

import jakarta.persistence.EntityNotFoundException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import oop.kiosk.oopassignment.register.domain.Register;
import oop.kiosk.oopassignment.register.dto.PasswordChangeRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class RegisterService {
    private final RegisterRepository registerRepository;
    private static final String LOGIN_SUCCESS_MESSAGE = "로그인 성공";
    private static final String PASSWORD_CHANGE_SUCCESS_MESSAGE = "비밀번호 변경 성공";
    private static final String LOGOUT_SUCCESS_MESSAGE = "로그아웃 성공";


    public String login(HttpServletRequest request, String password){
        Register register = registerRepository.findRegisterByPassword(password)
                .orElseThrow(() -> new EntityNotFoundException("비밀 번호가 틀렸습니다."));
        HttpSession session = request.getSession();
        session.setAttribute("register", password);

        return LOGIN_SUCCESS_MESSAGE;
    }

    @Transactional
    public String changePassword(HttpServletRequest request, PasswordChangeRequest passwordChangeRequest) {
        Register register = registerRepository.findRegisterByPassword(passwordChangeRequest.getPastPassword())
                .orElseThrow(() -> new EntityNotFoundException("비밀 번호가 틀렸습니다."));
        register.setPassword(passwordChangeRequest.getCurrentPassword());
        registerRepository.save(register);
        return PASSWORD_CHANGE_SUCCESS_MESSAGE;
    }

    public String logout(HttpServletRequest request){
        return LOGOUT_SUCCESS_MESSAGE;
    }
}
