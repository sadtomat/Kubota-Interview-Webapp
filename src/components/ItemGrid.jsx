import './ItemGrid.css';
import ItemCard from "./ItemCard.jsx";

export default function ItemGrid(){
    const testing = {
        title: "BX2680",
        header: "Sub-Compact Tractor",
        src: "https://testwebappblobstorage.blob.core.windows.net/images/tractor1-0.jpg",
        price: "19.99"
    }
    
    return (
        <div className="itemgrid-outerbox">
            <ItemCard title={testing.title} header={testing.header} imgsrc={testing.src} price={testing.price}/>
            <ItemCard title={testing.title} header={testing.header} imgsrc={testing.src} price={testing.price}/>
            <ItemCard title={testing.title} header={testing.header} imgsrc={testing.src} price={testing.price}/>
            <ItemCard title={testing.title} header={testing.header} imgsrc={testing.src} price={testing.price}/>
        </div>
    )
}