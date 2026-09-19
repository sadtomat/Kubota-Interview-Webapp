import { useState } from "react";
import { getMessage } from "../api/messageApi.jsx";

export default function MessageButton() {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    //handles pinging of api and setting of message state
    const handleClick = async () => {
        setLoading(true);
        try {
            const data = await getMessage();
            setMessage(data.text);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <button onClick={handleClick} disabled={loading}>
                {loading ? "Loading..." : "Get Message"}
            </button>
            <p>{message}</p>
        </div>
    );
}