package com.lpu.Blog_Platform.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.lpu.Blog_Platform.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);
}