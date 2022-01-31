import React from "react";
import styled from "styled-components";

const Histoire = () => {
  return (
    <History>
        <His>

      <h1>Hitoire de l'automobile</h1>
      <p>
        Le mot automobile signifie « qui se meut par soi-même », c'est-à-dire, à
        l'origine.
      </p>
        </His>

      <hr />
      <Cugnot>
        <h3>Le fardier de Cugnot</h3>
        <p>
          La première automobile est un châssis en bois à trois roues, mû par
          une machine à vapeur, avec une direction et des freins rudimentaires,
          et un banc pour s'asseoir : en 1769, l'ingénieur français Joseph
          Cugnot invente un fardier à vapeur, lourd chariot destiné à traîner
          des canons pour l'armée. La roue directrice, qui était en même temps
          la roue motrice, supportait le poids de la chaudière. On raconte qu'au
          premier essai, le fardier a défoncé un mur. En 1771, Cugnot fait
          rouler un second fardier. Il pouvait tirer 5 tonnes et avait une
          vitesse de 3,5 km/h. Cependant pour faire remonter la pression dans la
          chaudière, donc l'approvisionner en combustible, il fallait faire une
          pause toutes les 10 minutes. Cette invention arrive bien trop tôt pour
          être utilisable et l'idée reste en sommeil pendant un siècle. Il
          s'agit pourtant de l'ancêtre direct des camions, des automobiles, et
          même des locomotives. Les premières automobiles à vapeur sont créées
          en 1882.
        </p>
      </Cugnot>
      <hr />
      <Code>
        <h3>Premier code de la route</h3>
        <p>
          Entre 1861 et 1865, au Royaume-Uni, des décrets gouvernementaux (les
          Locomotives acts) sont pris par le gouvernement pour limiter la
          vitesse des locomobiles à vapeur : celles-ci ne devaient pas dépasser
          6 km/h sur route et 3,5 km/h en ville. Elles devaient être précédées
          d'un aide marchant à pied et agitant un drapeau rouge pour prévenir du
          danger.
        </p>
      </Code>
      <hr />
      <Moteur>
        <h3>Moteur à explosion : le Patent-Motorwagen</h3>
        <p>
          En 1862, le Français Alphonse Beau de Rochas énonce le principe du
          moteur ayant un cycle à quatre temps. En 1864, l'allemand Nikolaus
          August Otto met au point le premier moteur à explosion à quatre temps.
          En 1886, l'Allemand Carl Benz construit son tricycle «
          Patent-Motorwagen », première automobile de l'histoire mue par un
          moteur à explosion. Comme les voitures modernes, le Patent-Motorwagen
          possède un moteur à essence, un allumage électrique, un carburateur,
          un radiateur à eau et un vrai châssis en acier. Sa vitesse était de 15
          km/h. Gottlieb Daimler avait déjà fait en 1885 le premier essai d'une
          motocyclette en bois. En 1886, il adapte des moteurs à essence à un
          canot et à une calèche  à quatre roues, en bois. Les premières
          voitures commercialisées apparaissent dès le début des années 1890,
          avec la petite série du tricycle Patent-Motorwagen de Benz. Viennent
          ensuite les premières automobiles de Peugeot, Renault et de beaucoup
          d'autres.
        </p>
      </Moteur>
      <hr />
      <Vapeur>
        <h3>Les voitures à vapeur</h3>
        <p>
          Dans le même temps ont été construits des voitures, mais surtout des
          camions à vapeur. En 1872, Amédée Bollée, fondeur de cloches au Mans,
          construit un char à vapeur, dénommé « L'Obéissante », capable de
          transporter 12 voyageurs. En 1875, l'Obéissante relie Le Mans à Paris
          soit 230 km en 18 heures. En 1879, une nouvelle automobile à vapeur
          surnommée La « Marie-Anne » remorque 100 tonnes à 10 km/h. En 1886, le
          marquis Albert de Dion fait circuler le premier tricycle à vapeur. En
          1889, Léon Serpollet construit sa première voiture à vapeur. Des
          camions à vapeur ont été produits jusqu'à la moitié du XXe siècle,
          principalement en Angleterre.
        </p>
      </Vapeur>
    </History>
  );
};

export default Histoire;

const History = styled.div`
  background-color: grey;
  margin-top: -1.5rem;

  hr {
    width: 30%;
    border-top: 1px solid red;
  }
`;

const Cugnot = styled.p`
margin-top: 5rem;
  margin-right: 15%;
  margin-left: 15%;
  font-size: large;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
const Code = styled.p`
margin-top: 5rem;
  margin-right: 15%;
  margin-left: 15%;
  font-size: large;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
const Moteur = styled.p`
margin-top: 5rem;
  margin-right: 15%;
  margin-left: 15%;
  font-size: large;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
const Vapeur = styled.p`
margin-top: 5rem;
  margin-right: 15%;
  margin-left: 15%;
  font-size: large;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
const His = styled.p`

  margin-right: 15%;
  margin-left: 15%;
  font-size: large;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    
`;
