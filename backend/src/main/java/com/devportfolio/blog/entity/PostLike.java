package com.devportfolio.blog.entity;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name="post_likes")
public class PostLike {
	
	@EmbeddedId
	private PostLikeId id;
	
	public PostLike() {}
	
	public PostLike(PostLikeId id) {
		this.id = id;
	}
}