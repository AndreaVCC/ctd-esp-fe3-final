import React, { useState } from "react"; 

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que el nombre tenga más de 5 caracteres
    if (name.length <= 5) {
      setError("El nombre debe tener más de 5 caracteres.");
      setSuccess("");
      return;
    }

    // Validar formato de email
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError("Por favor, ingresa un email válido.");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess(`Gracias ${name}, te contactaremos cuando antes vía mail`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre Completo</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ingresa tu nombre completo"
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingresa tu email"
          />
        </div>
        <button type="submit">Enviar</button>
      </form>

      {/* Mostrar error si hay alguna validación incorrecta */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Mostrar éxito si el formulario se envió correctamente */}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
};

export default Form;
