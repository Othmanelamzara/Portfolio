import React from 'react';
import './Project1.css';

function Project1() {
  return (
    <div className="project-page">
      <h1>Projet 1: Application de Gestion de Tâches</h1>
      <div className="project-content">
        <p>Développement d'une application de gestion de tâches en utilisant React pour le frontend et Django pour le backend.</p>
        
        <section className="section">
          <h2>Description</h2>
          <p>Cette application permet aux utilisateurs de créer, gérer et suivre leurs tâches quotidiennes. Elle offre des fonctionnalités telles que la création de listes de tâches, la définition de priorités, et l'ajout de dates d'échéance.</p>
        </section>

        <section className="section">
          <h2>Technologies Utilisées</h2>
          <ul>
            <li>Frontend: React, CSS</li>
            <li>Backend: Django, REST API</li>
            <li>Base de Données: PostgreSQL</li>
            <li>Outils: Git, Docker</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Project1;
