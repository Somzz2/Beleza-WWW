import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { IMaskInput } from 'react-imask';
import Button from '../components/Button';
import Navbar from '../components/Navbar';

import Shipping from '../components/Shipping';
import { Context } from '../context/Context';
import styles from '../styles/Checkout.module.css';



const Checkout = () => {

    const [name, setName] = useState<any>('')
    const [cardNumber, setCardNumber] = useState<any>('')
    const [expiry, setExpiry] = useState<any>('')
    const [CVV, setCVV] = useState<any>(0)

    const {state, dispatch} = useContext(Context)
    const router = useRouter();
    const handleClick = () => {
        
        dispatch({
            type: 'NEW_CARD',
            payload: {
                name,
                cardNumber,
                expiry,
                CVV
            }
        })
        router.push('/success')
    }

    return (
        <div className={styles.container}>
            <Navbar label='payment' />
            <div className={styles.card}>
                <div className={styles.cardNumberInfo}>
                    <label>Número do cartão:</label>
                   
                    <IMaskInput
                        onAccept={(value) => setCardNumber(value)}
                        mask="0000.0000.0000.0000"
                        
                    />
                </div>
                <div className={styles.cardNameInfo}>
                    <label>Nome do Titular:</label>
                    <input placeholder='Nome igual consta no cartão' type="text" className={styles.cardName} value={name} onChange={e=> setName(e.target.value.toUpperCase())} />
                </div>
                <div className={styles.cardInfo}>
                    <div className={styles.cardExpiryInfo}>
                        <label>Vencimento do cartão:</label>
                        <IMaskInput
                        onAccept={(value) => setExpiry(value)}
                        mask="00/0000"
                        
                        />
                    </div>
                    <div className={styles.cardCVVInfo}>
                        <label>CVV:</label>
                        <IMaskInput
                        onAccept={(value) => setCVV(value)}
                        mask="0000"
                        />
                    </div>
                    
                </div>
            </div>
            <Shipping />
            <Button label='FINALIZAR O PEDIDO' onClick={handleClick} />
        </div>
    )
}

export default Checkout;