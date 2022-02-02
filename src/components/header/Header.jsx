import React from "react";
import styled from "styled-components";
import Logo from "./MOB.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Headers>
        <Link to="/">
      <Avatar src={Logo} />
        </Link>

      <Lien>
        <Link to="/marque" style={{ textDecoration: "none" }}>
          <Button>Marques</Button>
        </Link>
        <Link to="/modelRoute" style={{ textDecoration: "none" }}>
          <Button>Models</Button>
        </Link>
        <Link to="/histoire" style={{ textDecoration: "none" }}>
          <Button>Decouvrir</Button>
        </Link>
      </Lien>
    </Headers>
  );
};

export default Header;

const Headers = styled.div`
  width: 100%;
  height: 7.5rem;
  background-color: black;
  color: red;
`;

const Avatar = styled.img`
  height: 7rem;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: none;
  }
  margin-left: 4rem;
  display: flex;
  justify-content: flex-start;
`;

const Lien = styled.div`
  height: 7rem;
  margin-right: 5rem;
  display: flex;
  justify-content: flex-end;
  margin-top: -4.5rem;
`;

const Button = styled.button`
  padding: 0.5em 4em;
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
