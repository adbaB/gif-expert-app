const getGifs = async (category) => {
  const url = `http://api.giphy.com/v1/gifs/search?api_key=LpCYT4NlkW2WJJIKTqmMfgSRX4XPhO2y&q=${encodeURI(
    category
  )}&limit=10`;

  const response = await fetch(url);
  const { data } = await response.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.original.url,
    };
  });
  
  return gifs;
};

export default getGifs;
