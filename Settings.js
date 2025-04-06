import React from 'react';

const Settings = () => {
  return (
    <div>
      <h2>Ajustes de Cuenta</h2>
      <form>
        <input placeholder="Nombre" />
        <input placeholder="Email" />
        <input placeholder="Nueva contraseña" />
        <div>
          <label>
            <input type="radio" name="tema" value="claro" /> Claro
          </label>
          <label>
            <input type="radio" name="tema" value="oscuro" /> Oscuro
          </label>
        </div>
        <button>Guardar Cambios</button>
      </form>
    </div>
  );
};

export default Settings;
