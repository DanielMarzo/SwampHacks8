import React, { useEffect, useState } from "react";
import axios from "axios";

const ARTIST_ENDPOINT = "https://api.spotify.com/v1/me/top/artists?limit=5&time_range=short_term";


const SpotifyGetArtistInfo = () => {
  const [token, setToken] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken"));
    }
  }, []);

  const handleGetArtistInfo = () => {
    axios
      .get(ARTIST_ENDPOINT, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <>
      <div id="topArtistButton"><button onClick={handleGetArtistInfo}>Get Top Artists</button></div>
      {data?.items ? data.items.map((item) => <p>{item.name}</p>) : null}
    </>
  );
};

export default SpotifyGetArtistInfo;