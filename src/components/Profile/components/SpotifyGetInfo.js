import React, { useEffect, useState } from "react";
import axios from "axios";

const TRACKS_ENDPOINT = "https://api.spotify.com/v1/me/top/tracks?limit=6&time_range=short_term";


const SpotifyGetInfo = () => {
  const [token, setToken] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken"));
    }
  }, []);

  const handleGetInfo = () => {
    axios
      .get(TRACKS_ENDPOINT, {
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
       <div id="topSongButton"> <button onClick={handleGetInfo}>Get Top Songs</button></div>
      {data?.items ? data.items.map((item) => <p>{item.name}</p>) : null}
    </>
  );
};

export default SpotifyGetInfo;