package com.example.gymbackend.service;

import com.example.gymbackend.dto.LoginRequest;
import com.example.gymbackend.dto.RegisterRequest;

public interface AuthService
{
    void register(RegisterRequest request);
    String login(LoginRequest request);
}
