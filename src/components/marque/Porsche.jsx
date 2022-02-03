import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Porsche = () => {
  const [porsche, setPorsche] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/models/3")
      .then((res) => res.json())
      .then((data) => setPorsche(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Marque>
      <Ul>
        <Link to="/turbo"  style={{ textDecoration: "none" }}>

        <Li>
          {porsche.name} <img src={porsche.link} alt="" />
          moteur: {porsche.moteur}
          <br />
          chevaux: {porsche.chevaux}
        </Li>
        </Link>
      </Ul>
    </Marque>
  );
};

export default Porsche;

const Marque = styled.div`
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
    width: 50rem;
    height: 30rem;
  }
`;
