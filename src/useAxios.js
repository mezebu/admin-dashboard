import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (dataUrl) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchData = async (url) => {
      setIsLoading(true);

      try {
        const response = await axios.get(url, { cancelToken: source.token });
        if (isMounted) {
          setData(response.data);
          setError(null);
        }
      } catch (error) {
        if (isMounted) {
          setError(error.message);
          setData([]);
        }
      } finally {
        isMounted && setTimeout(() => setIsLoading(false), 2000);
      }
    };
    fetchData(dataUrl);
    const cleanUp = () => {
      console.log("clean Up function");
      isMounted = false;
      source.cancel();
    };

    return cleanUp;
  }, [dataUrl]);

  return { data, error, isLoading };
};

export default useAxios;
