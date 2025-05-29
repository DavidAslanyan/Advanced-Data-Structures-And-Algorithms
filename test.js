const fetchAll = async (urls, limit) => {
  const results = new Array(urls.length);
  const cache = new Map();
  let curIndex = 0;

  const handleApi = async () => {
    while (curIndex < urls.length) {
      const index = curIndex++;
      const url = urls[curIndex];

      if (cache.has(url)) {
        results[index] = cache.get(url);
        continue;
      }
  
      try {
        const response = await fetch(url);
        const data = await response.json();
        cache.set(url, data);
        results[index] = data;
      } catch(error) {
        results[index] = error;
      }
    }
  }

  await Promise.all(Array.from({ length: limit }), () => handleApi());

  return results;
}

