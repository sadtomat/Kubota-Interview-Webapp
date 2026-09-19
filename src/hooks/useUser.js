import { useState, useEffect } from "react";

export function useUser() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUser() {
            try {
                const response = await fetch("/.auth/me");
                const payload = await response.json();
                setUser(payload.clientPrinciple);
            } catch (err){
                console.error("error fetching auth state: ", err);
                setUser(null);
            } finally {
                setLoading(false);
            }
        }
        fetchUser();
    }, []);

    return {user, loading}
}