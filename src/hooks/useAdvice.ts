import { useState, useEffect } from 'react';
import axios from 'axios';

interface Advice {
    id: number;
    advice: string;
}

const useAdvice = () => {
    const [advice, setAdvice] = useState<Advice | null>(null);

    const getAdvice = async () => {
        try {
            const response = await axios.get('https://api.adviceslip.com/advice');
            const advice: Advice = response.data.slip;
            setAdvice(advice);
        } catch (error) {
            console.error("Error fetching advice:", error);
        }
    };

    useEffect(() => {
        getAdvice();
    }, []);

    return { advice, getAdvice };
};

export default useAdvice;
