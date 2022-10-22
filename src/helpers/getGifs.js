export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=h0IaeTgi5xtH8AgFwWXr4QDHZvBZ06C8&q=${category}&limit=10`
  const resp = await fetch(url)
  const { data } = await resp.json()
  
  const gifs = data.map( el => {
    return {
      id: el.id,
      title: el.title,
       url: el.images.downsized_medium.url
    }
  })

  //console.log(gifs)
  return gifs;
  }