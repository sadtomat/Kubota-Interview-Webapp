import './ItemGrid.css';
import ItemCard from "./ItemCard.jsx";
import { useEffect, useState } from "react";

export default function ItemGrid({filters}){
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState([]);

    useEffect(() => {
        async function fetchItems() {
            try {
                const response = await fetch("/api/getProducts");
                const parsed = await response.json();
                setItems(parsed);
            } catch (err) {
                console.error("failed to fetch: ", err);
            } finally {
                setLoading(false);
            }
        }

        fetchItems();
    }, []);
    
    console.log(items);

    if (loading) {
        return <div>loading...</div>
    }

    const filteredItems = filters.length === 0 
        ? items
        : items.filter((item) => filters.includes(item.Type));

    return (
        <div className="itemgrid-outerbox">
            {/* <ItemCard title={items[0].Name} header={items[0].Header} imgsrc={items[0].ImageUrl} price={items[0].Price}/> */}
            {filteredItems.map((item) =>(
                <ItemCard key={item.ProductId} title={item.Name} header={item.Header} imgsrc={item.ImageUrl} price={item.Price}/>
            ))}
        </div>
    )
}