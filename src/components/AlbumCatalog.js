import { useEffect, useState } from "react";

function AlbumCatalog() {
  const [albums, setAlbums] = useState([]);

  useEffect(() =>
    () => {
      const options = {
          method:'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer 2d46dcd776204d95a0abb0ef203a497a'
          }
      };

    fetch('https://api.spotify.com/v1/me/albums', options)  
      .then(response => response.json())
      .then(data => setAlbums(data.items))
      .catch(err => console.error(err));
    }, 
    []
  );
  



  /*let[products,setProducts] =useState([]);

  useEffect(
      () => {
          const options = {
              method:'GET',
              headers: {
                accept: 'application/json',
                Authorization: 'Bearer '
              }
          };
  
          fetch('http://localhost:3000/products')
              .then(response => response.json())
              .then(data => setProducts(data))
              .catch(err => console.error(err));
      },
      []
  ); */


  return (
    <div>
      {albums.map(album => (
        <div key={album.id}>
          <img src={album.images[0].url} alt={album.name} />
          <h2>{album.name}</h2>
          <p>{album.artists.map(artist => artist.name).join(', ')}</p>
        </div>
      ))}
    </div>
  );
}


export default AlbumCatalog;