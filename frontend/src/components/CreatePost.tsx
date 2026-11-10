import { useState } from "react";
import styles from "./CreatePost.module.css";
import btnStyles from "./PostList.module.css";

export default function CreatePost({setIsModalOpen} : any) {
0
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handlePublish = async () => {
        const response = await fetch('http://localhost:8080/posts',
           {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({ title, content })} 
        );
        const data = await response.json();
        console.log(response.status, data);
        closeModal();
    };

    return (
        <div className={styles.modalBackground}>
            <div className={styles.cpContainer}>
                <button onClick={closeModal} className={styles.closeButton}>x</button>

                <label htmlFor="title" className={styles.label}>Title</label>
                <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} className={styles.textInputTitle} placeholder="Title"/>
                
                <label htmlFor="content" className={styles.label}>Your post</label>
                <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} className={styles.textInput} placeholder="Write your post here..."></textarea>
                <div className={styles.buttonContainer}>
                    <button onClick={closeModal} className={btnStyles.buttonCancel}>Cancel</button>
                    <button onClick={handlePublish} className={btnStyles.button}>Publish</button>
                </div>
            </div>
        </div>
        )
    }