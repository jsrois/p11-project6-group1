import { useEffect, useState } from "react";

function AlbumCatalog() {
  let [albums, setAlbums] = useState([]);

  useEffect(() =>
    () => {
      const options = {
          method:'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer da3cea8f10f74e99a6d514abe260dfb3'
          }
      };

    fetch('https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc&market=Us', options)  
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));
    }, 
    []
  );

  return (
    <div>
      {/* {
        albums.map(album => 
          <div>
            <div>
            <img src={albums.images} className="image" alt="" />
            </div>
          </div>  
          )
      } */}
      
    </div>
  );
}


export default AlbumCatalog;