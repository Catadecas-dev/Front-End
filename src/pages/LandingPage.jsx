import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LandingPage.module.css";
import LandingImage from "../assets/LandingImage.jpg"; 

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/"); 
    }, 500000);

    return () => clearTimeout(timer); 
  }, [navigate]);

  return (
    <div
      className={styles["landing-container"]}
      style={{
        backgroundImage: `url(${LandingImage})`, 
      }}
    >
      <div className={styles["content"]}>
        <h1>Bienvenido a Relatos de Papel</h1>
        <p>
          Explora un mundo lleno de historias, conocimiento y aventuras a
          través de libros únicos.
        </p>
        <button onClick={() => navigate("/")}>Explorar Libros</button>
      </div>
    </div>
  );
};

export default LandingPage;
