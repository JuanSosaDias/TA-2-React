import React from 'react';
import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Card>
          <h2>Desarrollo del Proyecto</h2>
          <p>Creación del programa.</p>
          <p>Persona Asignada: Diego Forlan</p>
          <p>Fecha Inicio: 2002-01-01</p>
          <p>Fecha Fin: 2024-09-30</p>
        </Card>
        <Card>
          <h2>Testing</h2>
          <p>Testeo del programa.</p>
          <p>Persona Asignada: Luis Suarez</p>
          <p>Fecha Inicio: 2002-01-01</p>
          <p>Fecha Fin: 2024-09-18</p>
        </Card>
        <Card>
          <h2>Usador</h2>
          <p>Quien usa el programa.</p>
          <p>Persona Asignada: Juan Sosa Dias</p>
          <p>Fecha Inicio: 2024-09-18</p>
          <p>Fecha Fin: 2024-09-18</p>
        </Card>
      </div>
    </div>
  );
}

export default App;
