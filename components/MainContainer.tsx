import Header from "./Header";
import Shipping from "./Shipping";

type Props = {
    children: React.ReactNode
}

const MainContainer = ({children}: Props) => {
    return (
        <>
            <Header />
            <div>{children}</div>     
              
        </>
    )
}

export default MainContainer;