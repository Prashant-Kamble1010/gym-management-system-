package com.example.gymbackend.controller;

import com.example.gymbackend.dto.LoginRequest;
import com.example.gymbackend.dto.RegisterRequest;
import com.example.gymbackend.service.AuthService;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController
{
    private final AuthService authService;
    public AuthController(AuthService authService)
    {
        this.authService = authService;
    }
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequest request)
    {
        authService.register(request);
        return ResponseEntity.ok("Account Created Successfully");
    }
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest request)
    {
        String token = authService.login(request);
        return ResponseEntity.ok(token);
    }
}
