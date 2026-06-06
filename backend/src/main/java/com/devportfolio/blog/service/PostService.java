package com.devportfolio.blog.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devportfolio.blog.entity.Post;
import com.devportfolio.blog.repository.PostRepository;

@Service
public class PostService {
	@Autowired
	private final PostRepository postRepository;
	
	public PostService(PostRepository postRepository) {
		this.postRepository = postRepository;
	}
	
	public Post savePost(Post post) {
		return postRepository.save(post);
	}
	
	public List<Post> getAllPosts() {
		return postRepository.findAll();
	}
	
	public Optional<Post> getPostById(Long id) {
		return postRepository.findById(id);
	}
	
	public void deletePostById(Long id) {
		postRepository.deleteById(id);
	}
	
}
