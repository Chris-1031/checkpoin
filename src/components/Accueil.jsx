import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import video from "./video.mp4";


const Accueil = () => {
  return (
    <Video>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          height: "100%",
          top: "50%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={video} />
      </video>

      <Container>
        <h3>L'histoire de l'automobile</h3>
        <Link to="/histoire" style={{ textDecoration: "none" }}>
          <Button>Decouvrir</Button>
        </Link>
      </Container>
    </Video>
  );
};

export default Accueil;

const Video = styled.div``;

const Container = styled.div`
  color: red;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Button = styled.button`
  padding: 0.5em 1em;
  border: 2px solid #f24e58;
  border-radius: 30px;
  background: white;
  color: #f24e58;
  align-self: flex-end;
  :hover {
    color: white;
    background: #f24e58;
    cursor: pointer;
  }
`;
