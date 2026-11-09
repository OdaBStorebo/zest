import PostCard from "./PostCard";
import type { Post } from "../types/post";
import styles from './PostList.module.css';
import { useState } from "react";
import CreatePost from "./CreatePost";

type PostListProps = {
    posts: Post[];
}
export default function PostList({posts} : PostListProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    return (
        <div className={styles.list}>
         <button onClick={openModal} className={styles.button}>+ New Post</button>
            {isModalOpen && <CreatePost setIsModalOpen={setIsModalOpen}/>}
        {posts.map(post => (
            <PostCard key={post.id} id={post.id} title={post.title} content={post.content} />
        ))}
        </div>
    )
}