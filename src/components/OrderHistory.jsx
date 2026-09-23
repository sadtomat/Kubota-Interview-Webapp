import './OrderHistory.css';
import HistoryItem from "./HistoryItem.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";
import { useEffect, useState } from "react";

export default function OrderHistory() {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);

    useEffect (() => {
        async function pullHistory() {
            try {
                const response = await fetch(`/api/getHistory`);
                const parsed = await response.json();
                setItems(parsed);
            } catch (err) {
                console.error("failed to fetch: ", err);
            } finally {
                setLoading(false);
            }
        }
        pullHistory();
    }, []);
    
    if (loading) {
        return (
            <LoadingSpinner/>
        )
    }

    console.log(items);
    if (items.length === 0) {
        console.log("empty");
        return (
            <div>
                <h1>You have no purchase history</h1>
            </div>
        )
    }

    console.log("full");
    return (
        <div className="orderhistory-itembox">
            {items.map((item) => (
                <div key={item.OrderId}>
                    <HistoryItem info={item}/>
                </div>
            ))}
        </div>
    )
}