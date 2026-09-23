import './ItemGrid.css';
import ItemCard from "./ItemCard.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";
import { useEffect, useState } from "react";


export default function ItemGrid({filters}){
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState([true]);

    useEffect(() => {
        async function fetchItems() {
            try {
                const response = await fetch("/api/getProducts");
                //console.log(response)
                const parsed = await response.json();
                //console.log(parsed)
                setItems(parsed);
            } catch (err) {
                console.error("failed to fetch: ", err);
            } finally {
                setLoading(false);
            }
        }

        fetchItems();
    }, []);
    
    //console.log(items);

    if (loading) {
        return (
            <div className="itemgrid-loadingcontainer">
                <LoadingSpinner/>
            </div>
        )
    }

    const filteredItems = filters.length === 0 
        ? items
        : items.filter((item) => filters.includes(item.Type));

    return (
        <div className="itemgrid-outerbox">
            {/* <ItemCard title={items[0].Name} header={items[0].Header} imgsrc={items[0].ImageUrl} price={items[0].Price}/> */}
            {filteredItems.map((item) =>(
                <ItemCard info={item} key={item.ProductId}/>
            ))}
        </div>
    )
}