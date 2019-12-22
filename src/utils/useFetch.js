import { useEffect, useState } from 'react';

import url from '../urls';

const useFetch = (query) => {
  const [ data, setData ] = useState(null);

  useEffect(() => {
    const get = async (url) => {
      const response = await fetch(url)
      const obj = await response.json();

      return obj;
    }

    get(url+query).then(r => setData(r[0]))
  }, [query])

  return data;
}

export default useFetch;
