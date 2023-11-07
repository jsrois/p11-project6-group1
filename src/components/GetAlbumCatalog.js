import React, { useEffect, useState } from "react";
import "./GetAlbumCatalog.css";
import Header from "./Header";

function GetAlbumCatalog() {
  const [accessToken, setAccessToken] = useState(null);

  const localStorage = window.localStorage;

  useEffect(() => {
    async function getToken() {
      const CLIENT_ID = "9a68f87255b544308a6fbebbd710b53f";
      const CLIENT_SECRET = "da3cea8f10f74e99a6d514abe260dfb3";
      const URL = "https://accounts.spotify.com/api/token";

      let body = new URLSearchParams();
      body.append("grant_type", "client_credentials");
      body.append("client_id", CLIENT_ID);
      body.append("client_secret", CLIENT_SECRET);

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body,
      };

      try {
        const request = await fetch(URL, options);
        const response = await request.json();

        if (request.ok) {
          setAccessToken(response.access_token);
          localStorage.setItem("access_token", response.access_token);
          setDownloadAlbums(true);
        }
      } catch (error) {
        console.log(error);
      }
    }

    getToken();
  }, []);

  // Search Function

  const [albums, setAlbums] = useState([]);
  const [downloadAlbums, setDownloadAlbums] = useState(false);

  const URL =
    "https://api.spotify.com/v1/browse/new-releases?country=ES&limit=16";

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
  };

  useEffect(() => {
    if (downloadAlbums) {
      fetch(URL, options)
        .then((response) => response.json())
        .then((result) => {
          setAlbums(result.albums.items);
          console.log(result);
        })
        .catch((err) => console.error(err));
    }
  }, [downloadAlbums]);

  return (
    <div>
      <Header />
      <div className="cards">
        {albums.map((album) => (
          <div key={album.id} className="cardsContent">
            <img src={album.images[0].url} alt="image" />
            <h2 className="albumTitle">{album.name}</h2>
            {/* <h3 className="artistName">{artist.name}</h3> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetAlbumCatalog;
