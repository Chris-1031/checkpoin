import React from "react";
import styled from "styled-components";



const Marques = () => {
  return (
    <Marque>
      <Header>
        <Button>Ajouter une marque</Button>
        <h3>Marques</h3>
      </Header>
      <Aficher>
          <h3>Audi</h3>
      </Aficher>
    </Marque>
  );
};

export default Marques;

const Marque = styled.div`
  width: 100%;
  height: 100%;
  font-size: 2rem;
  color: red;
  background-color: black;
`;

const Aficher = styled.div`
width: 100%;
height: 100%;
display: flex;
`

const Header = styled.div`
  width: 100%;
  height: 8rem;
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
