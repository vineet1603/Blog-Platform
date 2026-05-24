package com.lpu.Blog_Platform.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.lpu.Blog_Platform.entity.Post;

public interface PostRepository extends JpaRepository<Post, Long> {
}