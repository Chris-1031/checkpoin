import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Aston = () => {
  const [aston, setAston] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/models/7")
      .then((res) => res.json())
      .then((data) => setAston(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Marque>
      <Ul>
        <Li>
          {aston.name} <img src={aston.link} alt="" />
          moteur: {aston.moteur}
          <br />
          chevaux: {aston.chevaux}
        </Li>
      </Ul>
    </Marque>
  );
};

export default Aston;

const Marque = styled.div`
  width: 100%;
  height: 90vh;
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
`;
const Li = styled.li`
  background-color: #ffffff;
  border: 1px solid #000000;
  border-radius: 1rem;
  padding: 1rem;
  margin-bottom: 2rem;
  margin-left: 30%;
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
  img {
    width: 70rem;
    height: 40rem;
  }
`;
