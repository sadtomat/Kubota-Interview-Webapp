import './ItemCard.css';
import { useNavigate } from "react-router-dom";

export default function ItemCard({title, header, imgsrc, price, itemId}){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/item?id=${itemId}`);
    }
    
    return (
        <div className="itemcard-outerbox" onClick={handleClick}>
            <h1 className="itemcard-title">{title}</h1>
            <h1 className="itemcard-desc">{header}</h1>
            <img src={imgsrc} alt="" className="itemcard-img"></img>
            <p className="itemcard-price">${price}</p>
            <button className="itemcard-add">add to cart</button>
        </div>
    )
}