import { useEffect, useState } from "react";

function AlbumCatalog() {
  const [albums, setAlbums] = useState([]);

  let updateAlbums = function() =>
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '
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

export default AlbumCatalog;