package com.devportfolio.blog.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.devportfolio.blog.entity.Post;
import com.devportfolio.blog.service.PostService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class PostController {
	@Autowired
	private final PostService postService;
	
	public PostController(PostService postService) {
		this.postService = postService;
	}
	
	@PostMapping("/posts")
	public Post createPost(@RequestBody Post post) {
		return postService.savePost(post);
	}

	@GetMapping("/posts")
	public List<Post> getAllPosts() {
		return postService.getAllPosts();
	}
	
	@GetMapping("/posts/{id}")
	public ResponseEntity<Post> getPostById(@PathVariable Long id) {
		return postService.getPostById(id)
				.map(ResponseEntity::ok)
				.orElse(ResponseEntity.notFound().build());
	}
	
	@DeleteMapping("/posts/{id}")
	public void deletePostById(@PathVariable Long id) {
		postService.deletePostById(id);
	}
	
	@GetMapping("/test")
	public String Hello() {
		return "Dette er for å teste om backend funker";
	}
	
	
}
