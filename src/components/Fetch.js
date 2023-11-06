import React, {useEffect, useState} from 'react';


function Fetch () {
    const [accessToken, setAccessToken] = useState(null);

    const localStorage = window.localStorage;

    useEffect(() => {
        async function getToken(){
            const CLIENT_ID = '9a68f87255b544308a6fbebbd710b53f';
            const CLIENT_SECRET = 'da3cea8f10f74e99a6d514abe260dfb3';
            const URL = 'https://accounts.spotify.com/api/token';

            const options={
                method:'POST',
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body:'grant_type=client_credetions&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
            };

            try{
                const request = await fetch (URL, options);
                const response = await request.json();

                if(request.ok){
                    setAccessToken(response.access_token);
                    localStorage.setItem('access_token', response.access_token);
                    console.log(response); 
                }
            } catch(error){
                console.log(error);
            } 
        }

        getToken();

    },
    []
    );

    // Search Function
    function AlbumCatalog() {
        const [albums, setAlbums] = useState([]);
        
        const URL='https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks';


        let updateAlbums = function() {
          const options = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + accessToken,
            }
          };
      
        fetch(URL, options)
            .then(response => response.json())
            .then(result => {
            setAlbums(result.albums);
            console.log(result)
            })
            .catch(err => console.error(err))
        }
        
        return(
            <div>{
                albums.map(album =>
                <img src={album.images} className="" alt="image" />
                )}
            </div>
        )


    }
    AlbumCatalog();
}

export default Fetch;
