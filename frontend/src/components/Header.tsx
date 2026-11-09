import styles from './Header.module.css';

export default function Header() {
    return (
        <div className={styles.header}>
            <span style={{ fontSize: '24px', fontWeight: 'bold' }}>Zest</span>
            <menu className={styles.menu}>
                <a href="/login">Login</a>
            </menu>
        </div>
    );
}