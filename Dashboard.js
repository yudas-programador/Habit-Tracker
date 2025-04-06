import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="card">Hábitos Activos: 0</div>
      <div className="card">Completados Hoy: 0</div>
      <div className="card">Racha Actual: 0 días</div>
      <div className="card">No hay hábitos programados para hoy.</div>
    </div>
  );
};

export default Dashboard;
