import './Store.css';
import Sidebar from '../components/Sidebar.jsx';
import ItemGrid from '../components/ItemGrid.jsx';
import { useState } from "react";

function Store() {
    const [selectedFilters, setSelectedFilters] = useState([]);

    function handleFilter(category) {
        setSelectedFilters((prev) => 
            prev.includes(category)
                ? prev.filter((c) => c !== category)    //remove if already selected
                : [...prev, category]                   //add if not selected
        );
    }

    return (
        <div className="store-outer-box">
            <Sidebar selectedFilters={selectedFilters} onToggleFilter={handleFilter}/>
            <div className="product-grid-box">
                <h1 className="results-title">Results: </h1>
                <ItemGrid/>
            </div>
        </div>
    )
}

export default Store;