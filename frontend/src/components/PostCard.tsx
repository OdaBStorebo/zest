import styles from './PostCard.module.css';

export default function PostCard({id, title, content} : {id: number, title: string, content: string}) {
    return (
        <div key={id} className={styles.card}>
            <h2>{title}</h2>
            <p>{content}</p>
            <div className={styles.actions}>
                <a href="">Likes</a>
                <a href="">Comments</a>
            </div>
      </div>
    )
}