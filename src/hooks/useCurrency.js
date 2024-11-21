import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState(null); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://v6.exchangerate-api.com/v6/3b89e30941c25d04af1dcccf/latest/USD`
                );
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result.conversion_rates); 
            } catch (error) {
                setError(error.message); 
            } finally {
                setLoading(false); 
            }
        };

        fetchData();
    }, []); 

    return { data, loading, error }; 
}

export default useCurrencyInfo;
