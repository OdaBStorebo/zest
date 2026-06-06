package com.devportfolio.blog.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devportfolio.blog.entity.Post;

public interface PostRepository extends JpaRepository<Post, Long> {

}
