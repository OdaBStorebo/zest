package com.devportfolio.blog.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

import com.devportfolio.blog.entity.Post;

public interface PostRepository extends JpaRepository<Post, Long> {
	
	List<Post> findAllByOrderByCreatedAtDesc();
}
