import './ItemCard.css';
import AddCartButton from "./AddCartButton.jsx";
import NavButton from "./NavButton.jsx";

export default function ItemCard({info}){
    
    return (
        <div className="itemcard-outerbox">
            <div className="itemcard-upperbox">
                <div className="itemcard-innerbox">
                    <h1 className="itemcard-title">{info.Name}</h1>
                    <h1 className="itemcard-desc">{info.Header}</h1>
                </div>
                <NavButton link={`/item?id=${info.ProductId}`} linkText="To Page ➞" variant="item"/>
            </div>
            <img src={info.ImageUrl} alt="" className="itemcard-img"></img>
            <div className="itemcard-bottombox">
                <p className="itemcard-price">${info.Price}</p>
                <AddCartButton item={info} quantity={1}/>
            </div>
        </div>
    )
}