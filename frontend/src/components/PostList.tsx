import PostCard from "./PostCard";
import type { Post } from "../types/post";
import styles from './PostList.module.css';

type PostListProps = {
    posts: Post[];
}
export default function PostList({posts} : PostListProps) {
    return (
        <div className={styles.list}>
        {posts.map(post => (
            <PostCard key={post.id} id={post.id} title={post.title} content={post.content}/>
        ))}
        </div>
    )
}