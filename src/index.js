import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optionnel, si tu veux ajouter des styles globaux
import App from './App'; // Import du composant principal App
import reportWebVitals from './reportWebVitals'; // Outil pour mesurer les performances (facultatif)

// Le rendu de l'application dans le DOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // L'application est montée dans l'élément avec l'ID "root"
);

// Mesure de performance (facultatif, tu peux ignorer ou le supprimer)
reportWebVitals();

