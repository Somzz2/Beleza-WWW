import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useFormatter } from '../libs/useFormatter';

const Shipping = () => {

    const formatter = useFormatter();

    const [total, setTotal] = useState<number>(0);
    const [subTotal, setSubTotal] = useState<number>(0);
    const [discount, setDiscount] = useState<number>(0);
    const [shipping, setShipping] = useState<number>(0);

    useEffect(() => {
        const updateOffer = async() => {
            const json = await axios.get('https://www.mocky.io/v2/5b15c4923100004a006f3c07');
            setTotal(json.data.total);
            setSubTotal(json.data.subTotal);
            setDiscount(json.data.discount)
            setShipping(json.data.shippingTotal)
            
        }
        updateOffer();
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.totalProducts}>
                <span>PRODUTOS</span>
                <span>{formatter.formatPrice(subTotal)}</span>
            </div>
            <div className={styles.shipping}>
                <span>FRETE</span>
                <span>{formatter.formatPrice(shipping)}</span>
            </div>
            <div className={styles.discount}>
                <span>DESCONTO</span>
                <span>- {formatter.formatPrice(discount)}</span>
            </div>
            <div className={styles.total}>
                <span>TOTAL</span>
                <span>{formatter.formatPrice(total)}</span>
            </div>
        </div>
    )
}

export default Shipping;