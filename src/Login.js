import React from 'react';
import { Container } from 'react-bootstrap'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=6da9565436194a5ca8abce98146de59b&response_type=code&redirect_uri=http://localhost:3000&scope=streaming"


export default function Login() {
  return(
  <Container>
      <a className="btn btn-success btn-lg" href = {AUTH_URL}>
          Login with Spotify
      </a>
  </Container>
  );
}