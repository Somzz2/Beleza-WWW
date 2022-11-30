import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './styles.module.css'
import { useFormatter } from '../libs/useFormatter';
import Shipping from '../Shipping';

const Offers = () => {

    const [items, setItems] = useState<any[]>([])
    const formatter = useFormatter();

    useEffect(() => {
        const updateOffer = async() => {
            const json = await axios.get('https://www.mocky.io/v2/5b15c4923100004a006f3c07')
            setItems(json.data.items)
            console.log(json.data)
            console.log(items)
        }
        updateOffer();
    }, [])

    return (
        <div className={styles.container}>
            <h1>Produtos</h1>
            <div className={styles.cart}>
                {items.map((i: any, k: number) => (
                    <div className={styles.itemCart} key={k}>
                        <Image src={i.product.imageObjects[0].small} width={80} height={80} alt="" />
                        <div className={styles.name}>{i.product.name}</div>
                        <div className={styles.price}>{formatter.formatPrice(i.product.priceSpecification.price)}</div>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default Offers;