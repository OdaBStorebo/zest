package com.devportfolio.blog.service;

import com.devportfolio.blog.repository.PostLikeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostLikeService {
	
	@Autowired
	private final PostLikeRepository PostLikeRepository;
	
	public PostLikeService(PostLikeRepository postLikeRepository) {
		this.PostLikeRepository = postLikeRepository;
	}

}
