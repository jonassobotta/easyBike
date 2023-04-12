import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

interface UseFetchReturn {
    data: any[];
    loading: boolean;
    error: boolean;
    reFetch: () => Promise<void>;
}

const useFetch = (url: string): UseFetchReturn => {
const [data, setData] = useState<any[]>([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);

useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response: AxiosResponse<any> = await axios.get(url);
        setData(response.data);
      } catch (err: any) {
        setError(err.message);
      }
      setLoading(false);
    };
    fetchData();
    }, [url]);

    const reFetch = async () => {
        setLoading(true);
        try {
            const response: AxiosResponse<any> = await axios.get(url);
            setData(response.data);
        } catch (err: any) {
            setError(err.message);
        }
        setLoading(false);
    };

    return { data, loading, error, reFetch };
};

export default useFetch;