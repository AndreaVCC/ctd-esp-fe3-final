import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  const fetchDentist = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = await response.json();
      setDentist(data);
    } catch (error) {
      console.error("Error fetching dentist:", error);
    }
  };

  useEffect(() => {
    fetchDentist();
  }, [id]);

  if (!dentist) return <p>Loading...</p>;

  return (
    <main>
      <h1>Detail of Dentist {id}</h1>
      <div className="dentist-detail">
        {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
        {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}{" "}
        <p>
          <strong>Name:</strong> {dentist.name}
        </p>
        <p>
          <strong>Email:</strong> {dentist.email}
        </p>
        <p>
          <strong>Phone:</strong> {dentist.phone}
        </p>
        <p>
          <strong>Website:</strong> {dentist.website}
        </p>
      </div>
    </main>
  );
};

export default Detail;
