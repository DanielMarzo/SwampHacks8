import React from "react";
import "./Profile.css";
import { useState, useEffect } from "react"
import SpotifyGetInfo from "./components/SpotifyGetInfo";
import SpotifyGetArtistInfo from "./components/SpotifyGetArtistInfo";
import SpotifyGetRelatedArtistInfo from "./components/RelatedArtists";

// https://accounts.spotify.com/authorize?client_id=6da9565436194a5ca8abce98146de59b&response_type=code&redirect_uri=http://localhost:3000/profile&scope=user-top-read%20playlist-modify-public%20user-read-recently-played%20user-library-modify
const CLIENT_ID = "6da9565436194a5ca8abce98146de59b";
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3000/profile"
const SPACE_DELIMITER = "%20";
const SCOPES = ["user-top-read", "playlist-modify-public", "user-read-recently-played", "user-library-modify" , "playlist-read-private"];
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);

/* 
http://localhost:3000/profile?code=AQBxg0MCB_OgTjh0bJqm-NeVhoFewF_pUvbXxNmh1LTFV3Ic54irSPhfeabpwfl_HWLLf-yeacgEIhpM1eKOKnXBQ_ysHAvQSb0vktNruiJs6cZu4bxUEEuUfzpuHPWnUL-Yy2-zK_y_U0ok91FodTvO3vdPeoidoIu7FiLGYOlZEKnU0pHJmFGIRKfqeUiGmcrYcd0rkspNzTkSKgCa52N_lX9iC2O6DF-zwlfywyzEz3HR6sQ5ZM26Edw3n4Q3pfiYokuKHYkBtdaxwOYYo41kh73302Hc
*/
const getReturnedParamsFromSpotifyAuth = (hash) => {
    const stringAfterHashtag = hash.substring(1);
    const paramsInUrl = stringAfterHashtag.split("&");
    const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
      console.log(currentValue);
      const [key, value] = currentValue.split("=");
      accumulater[key] = value;
      return accumulater;
    }, {});
  
    return paramsSplitUp;
  };

  const Profile = () => {
    useEffect(() => {
      if (window.location.hash) {
        const { access_token, expires_in, token_type } =
          getReturnedParamsFromSpotifyAuth(window.location.hash);
  
        localStorage.clear();
  
        localStorage.setItem("accessToken", access_token);
        localStorage.setItem("tokenType", token_type);
        localStorage.setItem("expiresIn", expires_in);
      }
      
    });

    const handleLogin = () => {
        window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
    };
    
    return (
        <div className="container">
          <h1>Welcome to Swampify!</h1>
          <h2> Are you a music lover?</h2>
          <h3> Get your Top Songs and Artists here!</h3>
          <div className="loginButton">
          <button onClick={handleLogin}>Login to Spotify</button></div>
          {/* <View style = {{ flex: 2, flexDirection: 'row'}}> */}
          <div className="spotifyGetInfoButton"> <SpotifyGetInfo /></div>
          <div className="spotifyGetArtistInfoButton"> <SpotifyGetArtistInfo /> </div>
          {/* </View> */}
          {/* <div className="spotifyGetRelatedArtistInfoButtons"> <SpotifyGetRelatedArtistInfo/></div> */}
        </div>
      );
};

export default Profile;
