"use client";

const Error = ({ error, reset }) => {
  return (
    <div>
      <h2>Oups, une erreur est survenue !</h2>
      <button onClick={() => reset()}>Réessayer</button>
    </div>
  );
};

export default Error;