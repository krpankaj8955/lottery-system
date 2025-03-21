package com.project.lottery.service;

import com.project.lottery.model.request.SignupRequest;

public interface IAuthService {

    Object registerUser(SignupRequest request);

}
