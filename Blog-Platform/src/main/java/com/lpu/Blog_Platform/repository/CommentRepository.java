package com.lpu.Blog_Platform.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.lpu.Blog_Platform.entity.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long> {
}