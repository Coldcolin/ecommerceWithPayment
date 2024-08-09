import "../pages/css/CartCard.css"

const CartCard=({info})=>{
    return(
        <div className="CartCard">
            <div className="CartCardImage">
                <img src={info.image}/>
            </div>
            <div className="CartCardMiddle">
                <h3>{info.name}</h3>
                <p>{info.description}</p>
                <p>₦ {info.price}</p>
            </div>
            <div className="CartCardActions">
                <div>
                    <button>-</button>
                    <p>{info.QTY}</p>
                    <button>+</button>
                </div>
                <button>delete</button>
            </div>
        </div>
    )
}

export default CartCard