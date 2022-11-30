import styles from './styles.module.css';

type Props = {
    label: string;
    onClick: () => void;
}

const Button = ({label, onClick}: Props) => {
    return (
        <div className={styles.container} onClick={onClick}>
            {label}
        </div>
    )
};

export default Button;