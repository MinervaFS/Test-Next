import { useRouter } from "next/router";

const detailProduct = () => { 
    const {query} = useRouter()      
    return (

        <div>
            <h1>detail product</h1>
            <p>product: {query.product}</p>
        </div>
        
    )
}

export default detailProduct