import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Strandale = () => {
  const [strandale, setStrandale] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5001/api/models/4`)
      .then((res) => res.json())
      .then((strandale) => setStrandale(strandale))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Models>
      <Ul>
        <Li>
          {strandale.name}
          <iframe
            width="900"
            height="550"
            src="https://www.youtube.com/embed/oeZVfWLKtqQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          moteur:{strandale.moteur}
          <br />
          chevaux:{strandale.chevaux}
        </Li>
      </Ul>
    </Models>
  );
};

export default Strandale;

const Models = styled.div`
  width: 100%;
  height: 100vh;
  font-size: 2rem;
  color: red;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: black;
`;

const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  padding-top: 2rem;
  margin-top: -3rem;
`;
const Li = styled.li`
  background-color: #ffffff;
  border: 1px solid #000000;
  border-radius: 1rem;
  padding: 1rem;
  margin-bottom: 5rem;
  margin-left: 25%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;
  color: white;
  background-color: black;
  cursor: pointer;
  :hover {
    color: red;
  }
`;
