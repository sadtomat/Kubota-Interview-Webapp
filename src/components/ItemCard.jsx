import './ItemCard.css';

export default function ItemCard({title, header, imgsrc, price}){
    return (
        <div className="itemcard-outerbox">
            <h1 className="itemcard-title">{title}</h1>
            <h1 className="itemcard-desc">{header}</h1>
            <img src={imgsrc} alt="" className="itemcard-img"></img>
            <p className="itemcard-price">${price}</p>
            <button className="itemcard-add">add to cart</button>
        </div>
    )
}