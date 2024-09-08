import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id, onUpdate }) => {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFavorite = storedFavs.some((fav) => fav.id === id);
    setIsFav(isFavorite);
  }, [id]);

  const addFav = () => {
    const dentist = { id, name, username };

    const storedFavs = JSON.parse(localStorage.getItem("favorites")) || [];

    if (!isFav) {
      const updatedFavs = [...storedFavs, dentist];
      localStorage.setItem("favorites", JSON.stringify(updatedFavs));
      setIsFav(true);
      alert("Dentist added to favorites");
    } else {
      const updatedFavs = storedFavs.filter((fav) => fav.id !== id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavs));
      setIsFav(false);
      alert("Dentist removed from favorites");
      if (onUpdate) onUpdate();
    }
  };

  return (
    <div className="card">
      <img
        src="./images/doctor.jpg"
        alt={`${name}'s avatar`}
        className="card-img"
      />
      <h2>{name}</h2>
      <p>{username}</p>
      <Link to={`/dentist/${id}`}>View Details</Link>
      {/* El texto del botón cambia dinámicamente */}
      <button onClick={addFav} className="favButton">
        {isFav ? "Remove fav" : "Add fav"}
      </button>
    </div>
  );
};

export default Card;
