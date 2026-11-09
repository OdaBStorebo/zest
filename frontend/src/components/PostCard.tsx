import styles from './PostCard.module.css';
import { useState } from "react";

export default function PostCard({id, title, content, likes=0} : {id: number, title: string, content: string, likes?: number}) {

    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(likes); //get this from database, remember to create a column for this in the posts table
   
    //const [commentCount, setCommentCount] = useState(0); //get this from database, remember to create a column for this in the posts table

    const handleLike = () => {
        setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
        console.log(`Post ${id} liked: ${!isLiked}`);
        setIsLiked(!isLiked);
    }

    return (
        <div key={id} className={styles.card}>
            <div className={styles.txtContent}>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
            <div className={styles.actions}>
                <button onClick={handleLike}>
                    Likes
                    <span>{likeCount}</span>
                </button>
                <button>
                    Comments
                    {/* <span>{commentCount}</span> */}
                </button>
            </div>
      </div>
    )
}