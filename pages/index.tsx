import Head from 'next/head'
import { useRouter } from 'next/router'
import Button from '../components/Button'
import Navbar from '../components/Navbar'
import Offers from '../components/Offers'
import Shipping from '../components/Shipping'
import styles from '../styles/Home.module.css'

export default function Home() {

  const router = useRouter();

  const handleRedirect = () => {
    router.push('/checkout')
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Belena na WWW</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar label="cart" />
      <Offers />
      <Shipping />
      <Button
        label='SEGUIR PARA O PAGAMENTO'
        onClick={handleRedirect}
      />
    </div>
  )
}
