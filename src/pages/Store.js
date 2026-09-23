import './Store.css';
import Sidebar from '../components/Sidebar.jsx';
import ItemGrid from '../components/ItemGrid.jsx';
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function Store() {
    const [searchParams] = useSearchParams();
    const [selectedFilters, setSelectedFilters] = useState();

    useEffect(() => {
        const filter = searchParams.get("filter");
        setSelectedFilters(filter ? [filter] : []);
    }, [searchParams]);

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
                <ItemGrid filters={selectedFilters}/>
            </div>
        </div>
    )
}

export default Store;