import { useEffect, useState } from "react";

function AlbumCatalog() {
  const [albums, setAlbums] = useState([]);

  let updateAlbums = () => {
    const url = 'https://deezerdevs-deezer.p.rapidapi.com/track/%7Bid%7D';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': '',
      }
    };

    fetch(url, options)
    .then(response => response.json())
    .then(result => setAlbums(result.albums))
    .catch(err => console.error(err))
  }

  useEffect(updateAlbums, []);
  console.log(albums)

  return (
    <div>
      {albums.items.data.map(album => ( 
        <div key={album.id}>
          {/* <div>
            {album.images.map((image, index) => (
              <img key={index} src={image.url} className="image" alt={album.name} />
            ))}
          </div> */}
          <div>
            <p>{album.name}</p>
          </div>
        </div>
      ))}
    </div>
  );

}

export default AlbumCatalog;