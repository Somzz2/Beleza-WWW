import styles from './styles.module.css';

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>Beleza na WWW</h1>
                <div className={styles.iconCart}>🛒</div>
            </div>
        </div>
    )
}

export default Header;