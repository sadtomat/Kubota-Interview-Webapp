import './CartObject.css';

export default function CartObject({info}) {


    return (
        <div className="cartobject-outerbox">
            <img src={info.imageUrl} alt="" className="cartobject-img"></img>
            <div className="cartobject-innerbox">
                <div className="cartobject-leftside">
                    <h1 className="cartobject-title">{info.name}</h1>
                    <h1 className="cartobject-header">{info.header}</h1>
                </div>
                <div className="cartobject-rightside">
                    <h1 className="cartobject-price">${info.price}</h1>
                    <h1 className="cartobject-quantity">Quantity: {info.quantity}</h1>
                </div>
            </div>
        </div>
    )
}