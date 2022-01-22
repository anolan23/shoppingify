import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

export function useFetch({ method, url, params, data }) {
  const [response, setResponse] = useState({
    data: null,
    loading: true,
    error: null,
  });
  useEffect(() => {
    request();
    async function request() {
      try {
        const response = await axios.request({
          method,
          url,
          params,
          data,
        });
        setResponse({ data: response.data, loading: false, error: null });
      } catch (error) {
        setResponse((prevResponse) => {
          return { ...prevResponse, loading: false, error };
        });
        throw error;
      }
    }
  }, []);
  return response;
}
