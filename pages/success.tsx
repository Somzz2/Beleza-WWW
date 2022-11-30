import { useContext } from 'react';
import Navbar from '../components/Navbar';
import Offers from '../components/Offers';
import Shipping from '../components/Shipping';
import styles from '../styles/Success.module.css';
import { Context } from '../context/Context';


const Success = () => {

    const {state} = useContext(Context)
    
    return (
        <div className={styles.container}>
            <Navbar label='confirmation' />
            <div className={styles.successfull}>
                <div className={styles.symbol}>✔️</div>
                <div className={styles.phrase}>COMPRA EFETUADA COM SUCESSO</div>
            </div>
            <div className={styles.payment}>
                <h1>Pagamento</h1>
                <div className={styles.paymentInfo}>
                    <span>XXXX.XXXX.XXXX.{state.card.cardNumber.substring(state.card.cardNumber.length -4)}</span>
                    <span>{state.card.name}</span>
                    <span>{state.card.expiry}</span>
                    <span></span>
                </div>
            </div>
            <Offers />
            <Shipping />
        </div>
    )
}

export default Success;