import styles from './Header.module.css';

export default function Header() {
    return (
        <div className={styles.header}>
            <img src="src/assets/sitronIcon.svg" alt="Logo" style={{ height: '30px', marginRight: '5px' }} />
            <span style={{ fontSize: '24px', fontWeight: 'bold' }}>Zest</span>
            <menu className={styles.menu}>
                <a href="/login">Login</a>
            </menu>
        </div>
    );
}