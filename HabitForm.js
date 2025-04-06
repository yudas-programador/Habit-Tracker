import React, { useState } from 'react';

const HabitForm = () => {
  const [habit, setHabit] = useState({ nombre: '', descripcion: '', categoria: 'Salud', frecuencia: 'Diario' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nuevo hábito:", habit);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Nuevo Hábito</h2>
      <input placeholder="Nombre del hábito" onChange={e => setHabit({ ...habit, nombre: e.target.value })} />
      <input placeholder="Descripción" onChange={e => setHabit({ ...habit, descripcion: e.target.value })} />
      <select onChange={e => setHabit({ ...habit, categoria: e.target.value })}>
        <option>Salud</option>
        <option>Productividad</option>
      </select>
      <select onChange={e => setHabit({ ...habit, frecuencia: e.target.value })}>
        <option>Diario</option>
        <option>Semanal</option>
      </select>
      <button type="submit">Crear Hábito</button>
    </form>
  );
};

export default HabitForm;
