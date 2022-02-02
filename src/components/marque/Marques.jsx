import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Marques = () => {
  const [marques, setMarques] = useState([]);
  const [mercedes, setMercedes] = useState([]);
  const [porsche, setPorsche] = useState([]);
  const [ferrari, setFerrari] = useState([]);
  const [bmw, setBmw] = useState([]);
  const [ford, setFord] = useState([]);
  const [rolls, setRolls] = useState([]);
  const [lambo, setLambo] = useState([]);
  const [dodge, setDodge] = useState([]);
  const [aston, setAston] = useState([]);
  const [bugatti, setBugatti] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/marques/1")
      .then((res) => res.json())
      .then((data) => setMarques(data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    fetch("http://localhost:5001/api/marques/2")
      .then((res) => res.json())
      .then((data) => setMercedes(data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    fetch("http://localhost:5001/api/marques/3")
      .then((res) => res.json())
      .then((data) => setPorsche(data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    fetch("http://localhost:5001/api/marques/4")
      .then((res) => res.json())
      .then((data) => setFerrari(data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    fetch("http://localhost:5001/api/marques/5")
      .then((res) => res.json())
      .then((data) => setBmw(data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    fetch("http://localhost:5001/api/marques/6")
      .then((res) => res.json())
      .then((data) => setFord(data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    fetch("http://localhost:5001/api/marques/7")
      .then((res) => res.json())
      .then((data) => setRolls(data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    fetch("http://localhost:5001/api/marques/8")
      .then((res) => res.json())
      .then((data) => setLambo(data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    fetch("http://localhost:5001/api/marques/9")
      .then((res) => res.json())
      .then((data) => setDodge(data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    fetch("http://localhost:5001/api/marques/10")
      .then((res) => res.json())
      .then((data) => setAston(data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    fetch("http://localhost:5001/api/marques/11")
      .then((res) => res.json())
      .then((data) => setBugatti(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Marque>
      <Ul>
        <Link to="/model" style={{ textDecoration: "none" }}>
          <Li>
            {marques.name} <img src={marques.link} alt="" />
          </Li>
        </Link>
        <Link to="/mercedes" style={{ textDecoration: "none" }}>
          <Li>
            {mercedes.name} <img src={mercedes.link} alt="" />
          </Li>
        </Link>
        <Link to="/porsche" style={{ textDecoration: "none" }}>
          <Li>
            {porsche.name} <img src={porsche.link} alt="" />
          </Li>
        </Link>
        <Link to="/ferrari" style={{ textDecoration: "none" }}>
          <Li>
            {ferrari.name} <img src={ferrari.link} alt="" />
          </Li>
        </Link>
        <Link to="/bmw" style={{ textDecoration: "none" }}>
          <Li>
            {bmw.name} <img src={bmw.link} alt="" />
          </Li>
        </Link>

        <Link to="/ford" style={{ textDecoration: "none" }}>
          <Li>
            {ford.name} <img src={ford.link} alt="" />
          </Li>
        </Link>

        <Link to="/rolls" style={{ textDecoration: "none" }}>
          <Li>
            {rolls.name} <img src={rolls.link} alt="" />
          </Li>
        </Link>
        <Link to="/lambo" style={{ textDecoration: "none" }}>
          <Li>
            {lambo.name} <img src={lambo.link} alt="" />
          </Li>
        </Link>

        <Link to="/dodge" style={{ textDecoration: "none" }}>
          <Li>
            {dodge.name} <img src={dodge.link} alt="" />
          </Li>
        </Link>

        <Link to="/aston" style={{ textDecoration: "none" }}>
          <Li>
            {aston.name} <img src={aston.link} alt="" />
          </Li>
        </Link>
        <Link to="/bugatti" style={{ textDecoration: "none" }}>
          <Li>
            {bugatti.name} <img src={bugatti.link} alt="" />
          </Li>
        </Link>
      </Ul>
    </Marque>
  );
};

export default Marques;

const Marque = styled.div`
  width: 100%;
  height: 100;
  font-size: 2rem;
  color: red;
  display: flex;

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
