package com.project.lottery.service.impl;

import org.springframework.stereotype.Service;

import com.project.lottery.model.request.SignupRequest;
import com.project.lottery.service.IAuthService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class AuthService implements IAuthService {

    @Override
    public Object registerUser(SignupRequest request) {
        return null;
    }

}
