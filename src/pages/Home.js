import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [characters, setCharacters] = useState([]);

  const findCharacter = async () => {
    const { data } = await axios.get(
      "https://rickandmortyapi.com/api/character/"
    );

    setCharacters(data.results);
  };

  useEffect(() => {
    findCharacter();
  }, []);

  return (
    <div>
      <h1>Pagina Principal</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/usuario">Usuários</Link>
          </li>
        </ul>
      </nav>

      {characters.map((character) => (
        <div>
          <h2>{character.name}</h2>
          <img
            src={character.image}
            alt="Imagem do personagem"
            style={{ width: 200, height: 200 }}
          />
        </div>
      ))}
    </div>
  );
};

export default Home;
