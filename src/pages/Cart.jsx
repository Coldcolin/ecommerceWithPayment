import "./css/Cart.css"
import CartCard from "../components/CartCard";
import {useSelector} from "react-redux"

const Cart=()=>{
    const {cart, total, loggedInUser} = useSelector((el)=> el);
    // console.log(import.meta.env.VITE_Public_Key)
    // console.log(`coldev_${Date.now()}`)
    // payKorapay();
    // 5,028,462.43
    function payKorapay() {
        window.Korapay.initialize({
            key: import.meta.env.VITE_Public_Key,
            reference: `coldev_${Date.now()}`,
            amount: total, 
            currency: "NGN",
            customer: {
              name: loggedInUser.name,
              email: loggedInUser.email
            },
            // notification_url: ""
        });
    }
    return(
        <div className="Cart">
            <section>
                <p>Total: ${total}</p>
                <button> Clear Cart</button>
                <button onClick={payKorapay}>Pay</button>
                <p>Quantity: 8</p>
            </section>
            <article>
                {
                    cart.map((e)=>{
                       return <CartCard key={e.id} info={e}/>
                    })
                }
            </article>
        </div>
    )
}

export default Cart