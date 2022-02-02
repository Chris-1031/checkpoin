import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ModelRoute = () => {
  const [modelRoute, setModelRoute] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/models")
      .then((res) => res.json())
      .then((model) => setModelRoute(model))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Models>
        {modelRoute.map((e) => (
  <Ul>
  <Li>
    {e.name} <img src={e.link} alt="" />
    Marque: {e.marques.name}
    <br />
    moteur: {e.moteur}
    <br />
    chevaux: {e.chevaux}

  
  </Li>
</Ul>
  ))}
    
    </Models>
  );
};

export default ModelRoute;

const Models = styled.div`
  width: 100%;
  height: auto;
  font-size: 2rem;
  color: red;
  display: flex;
flex-direction: row;
flex-wrap: wrap;
  background-color: black;
`;

// const Aficher = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   color: red;
// `;

const Ul = styled.ul`
  list-style-type: none;

  display: flex;
  padding-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  flex-wrap: wrap;
  justify-content: space-around;
`;
const Li = styled.li`
  background-color: #ffffff;
  border: 1px solid #000000;
  border-radius: 1rem;
  padding: 1rem;
  margin-bottom: 2rem;
  margin-left: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: white;
  background-color: black;
  cursor: pointer;
  :hover {
    color: red;
  }
  img {
    width: 20rem;
    height: 20rem;
  }
`;
