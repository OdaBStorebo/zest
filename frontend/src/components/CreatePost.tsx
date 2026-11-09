import styles from "./CreatePost.module.css";
import btnStyles from "./PostList.module.css";

export default function CreatePost({setIsModalOpen} : any) {

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={styles.modalBackground}>
            <div className={styles.cpContainer}>
                <button onClick={closeModal} className={styles.closeButton}>x</button>

                <label htmlFor="title" className={styles.label}>Title</label>
                <input id="title" type="text" className={styles.textInputTitle} placeholder="Title"/>
                
                <label htmlFor="content" className={styles.label}>Your post</label>
                <textarea id="content" className={styles.textInput} placeholder="Write your post here..."></textarea>
                <div className={styles.buttonContainer}>
                    <button onClick={closeModal} className={btnStyles.buttonCancel}>Cancel</button>
                    <button onClick={closeModal} className={btnStyles.button}>Publish</button>
                </div>
            </div>
        </div>
        )
    }