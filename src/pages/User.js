import React from "react";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "red",
        padding: 0,
        margin: 0,
      }}
    >
      <h1>Usuário</h1>
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
    </div>
  );
};

export default User;
