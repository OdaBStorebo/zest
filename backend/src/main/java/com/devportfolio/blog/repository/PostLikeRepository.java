package com.devportfolio.blog.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devportfolio.blog.entity.PostLike;
import com.devportfolio.blog.entity.PostLikeId;

public interface PostLikeRepository extends JpaRepository<PostLike, PostLikeId> {

}
