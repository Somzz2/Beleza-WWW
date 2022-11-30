import { useState } from 'react';
import styles from './styles.module.css';


type Props = {
    label: string
}

const Navbar = ({label}: Props) => {
    
    
    return (
        <div className={styles.container}>
            <div className={styles.pass} style={{color: label === 'cart' ? 'orange' : '#CCC'}}>Sacola</div>
            <div className={styles.pass} style={{color: label === 'payment' ? 'orange' : '#CCC'}}>Pagamento</div>
            <div className={styles.pass} style={{color: label === 'confirmation' ? 'orange' : '#CCC'}}>Confirmação</div>
        </div>
    )
}

export default Navbar;                                                             