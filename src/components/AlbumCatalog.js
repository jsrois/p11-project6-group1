import { useEffect, useState } from "react";

function AlbumCatalog() {
  const [albums, setAlbums] = useState([]);

  useEffect(() =>
    () => {
      const options = {
          method:'GET',
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer 382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc'
          }
      };

    fetch('https://api.spotify.com/v1/albums', options)
      .then(response => response.json())
      .then(data => setAlbums(data.items))
      .catch(err => console.error(err));
    }, 
    []
  );

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