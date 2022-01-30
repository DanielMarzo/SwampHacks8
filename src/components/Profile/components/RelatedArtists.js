// import React, { useEffect, useState } from "react";
// import axios from "axios";  

// const RELATED_ARTIST_ENDPOINT = "https://api.spotify.com/v1/me/top/artists/{artist_id}/related-artists"; //"https://api.spotify.com/v1/artists/{artist_id}/related-artists";
// //I have no idea how to get the related artists :/

// const SpotifyGetRelatedArtistInfo = () => {
//   const [token, setToken] = useState("");
//   const [data, setData] = useState({});

//   useEffect(() => {
//     if (localStorage.getItem("accessToken")) {
//       setToken(localStorage.getItem("accessToken"));
//     }
//   }, []);

//   const handleGetRelatedArtistInfo = () => {
//     axios
//       .get(RELATED_ARTIST_ENDPOINT, {
//         headers: {
//           Authorization: "Bearer " + token,
//         },
//       })
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

  
//   return (
//     <>
//       <button onClick={handleGetRelatedArtistInfo}>Get Related Artists</button>
//       {data?.items ? data.items.map((item) => <p>{item.name}</p>) : null}
//     </>
//   );
// };

// export default SpotifyGetRelatedArtistInfo;