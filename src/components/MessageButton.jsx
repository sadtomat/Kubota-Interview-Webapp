import { useState } from "react";
import { getMessage } from "../api/messageApi";

export default function MessageButton() {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

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