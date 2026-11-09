package com.devportfolio.blog.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devportfolio.blog.entity.Post;
import com.devportfolio.blog.repository.PostRepository;

@Service
public class PostService {
	
	private static final String TEST_USER_IDENTIFIER = "test-user";
	
	@Autowired
	private final PostRepository postRepository;
	
	public PostService(PostRepository postRepository) {
		this.postRepository = postRepository;
	}
	
	public Post savePost(Post post) {
		post.setAuthorIdentifier(TEST_USER_IDENTIFIER);
		return postRepository.save(post);
	}
	
	public List<Post> getAllPosts() {
		return postRepository.findAllByOrderByCreatedAtDesc();
	}
	
	public Optional<Post> getPostById(Long id) {
		return postRepository.findById(id);
	}
	
	public void deletePostById(Long id) {
		postRepository.deleteById(id);
	}
	
}
