import "./AddCartButton.css";

export default function AddCartButton() {


    function OnClick(){
        console.log("click")
    }

    return (
        <div>
            <button className="addcartbutton-button" onClick={OnClick}>Add to Cart</button>
        </div>
    )
}