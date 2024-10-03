import React from 'react';
import './styles.scss'; // Optionnel, si tu veux ajouter des styles globaux
import App from './App'; // Import du composant principal App
import reportWebVitals from './reportWebVitals'; // Outil pour mesurer les performances (facultatif)
import { createRoot } from 'react-dom/client';

// // Le rendu de l'application dans le DOM
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root') // L'application est montée dans l'élément avec l'ID "root"
// );

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App tab="home" />);
// Mesure de performance (facultatif, tu peux ignorer ou le supprimer)
reportWebVitals();

