package com.url.shortener.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import java.util.Set;

@Data
@AllArgsConstructor
public class RegisterRequest {
    private String username;
    private String email;
    private Set<String> role;
    private String password;

}
