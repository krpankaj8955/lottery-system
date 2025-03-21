package com.project.lottery.model.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "users")
public class UserData {

    @Id
    private long id;

    private String name;
    private String email;
    private String password;
    private String contact;
}
