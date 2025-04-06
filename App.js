import React from 'react';
import Dashboard from './components/Dashboard';
import HabitForm from './components/HabitForm';
import CalendarView from './components/CalendarView';
import Settings from './components/Settings';

function App() {
  return (
    <div className="App">
      <Dashboard />
      <HabitForm />
      <CalendarView />
      <Settings />
    </div>
  );
}

export default App;
