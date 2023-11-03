import { useEffect, useState } from "react";

function AlbumCatalog() {
  const [albums, setAlbums] = useState([]);

  let updateAlbums = () => {
    const url = 'https://api.deezer.com/chart/0/albums';
    const options = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        // "Authorization": "Bearer 37022a40bdd23bd52dc4f30f2f739606"
      }
    };

    fetch(url, options)
    .then(response => response.json())
    .then(result => {
      setAlbums(result.data);
      console.log(result)
    })
    .catch(err => console.error(err))
  }

  useEffect(updateAlbums, []);
  console.log(albums)

  return (
    <div>
      {albums.slice(0, 15).map((albumData, index) => ( 
        <div key={albumData.id}>
              <img key={index} src={albumData.cover} className="image" alt={albumData.title} />
          <div>
            <p>{albumData.title}</p>
          </div>
        </div>
      ))}
    </div>
  );

}

export default AlbumCatalog;