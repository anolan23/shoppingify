import axios from 'axios';
import { useState, useEffect } from 'react';

export default function useFetch({ method, url, params, data: axiosData }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    request();
    async function request() {
      try {
        const response = await axios.request({
          method,
          url,
          params,
          axiosData,
        });
        setData(response.data);
      } catch (error) {
        throw error;
      }
    }
  }, []);

  return { data, setData };
}
