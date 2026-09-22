import "./ItemDescription.css"
import AddCartButton from "./AddCartButton.jsx";

export default function ItemDescription({info}) {
    console.log(JSON.stringify(info.Description));
    return (
        <div className="itemdesc-outerbox">
            <h1 className="itemdesc-title">{info.Name}</h1>
            <h1 className="itemdesc-header">{info.Header}</h1>
            <h1 className="itemdesc-price">${info.Price}</h1>
            <p className="itemdesc-desc">{info.Description}</p>
            <div className="itemdesc-bottombox">
                <div>
                    <h1 className="itemdesc-cat">Category: {info.Type}</h1>
                    <h1 className="itemdesc-ID">Product Id: {info.ProductId}</h1>
                </div>
                <AddCartButton/>
            </div>
        </div>
    )
}