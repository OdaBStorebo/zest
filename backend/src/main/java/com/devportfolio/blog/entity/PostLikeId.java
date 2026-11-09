package com.devportfolio.blog.entity;

import java.io.Serializable;
import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public class PostLikeId implements Serializable {
	
	@Column(name="post_id")
	private Long postId;
	
	@Column(name="user_identifier")
	private String userIdentifier;
	
public PostLikeId() {}
	
	public PostLikeId(Long postId, String userIdentifier) {
		this.postId = postId;
		this.userIdentifier = userIdentifier;
	}

	@Override
	public int hashCode() {
		return Objects.hash(postId, userIdentifier);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		PostLikeId other = (PostLikeId) obj;
		return Objects.equals(postId, other.postId) && Objects.equals(userIdentifier, other.userIdentifier);
	}
}
