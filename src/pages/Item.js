import './Item.css';
import ImageSlideshow from "../components/ImageSlideshow.jsx";
import ItemDescription from "../components/ItemDescription.jsx";
import LoadingSpinner from "../components/LoadingSpinner.jsx";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function Item(){
    const [loading, setLoading] = useState([]);
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const [item, setItem] = useState([]);

    useEffect(() => {
        async function fetchItem(){
            try {
                const response = await fetch(`/api/getProduct?id=${id}`);
                //console.log(response)
                const parsed = await response.json();
                //console.log(parsed)
                setItem(parsed);
            } catch (err) {
                console.error("failed to fetch: ", err);
            } finally {
                setLoading(false);
            }
        }
        fetchItem();
    }, [id]);

    if (loading) {
        return (
            <div>
                <LoadingSpinner/>
            </div>
        );
    }

    const slideshowImgs = [item.ImageUrl, item.ImageUrl2]


    return (
        <div className="itempage-outerbox">
            <div className="itempage-leftbox">
                <ImageSlideshow images={slideshowImgs}/>
            </div>
            <ItemDescription info={item}/>
        </div>
    )
}

export default Item;