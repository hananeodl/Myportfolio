import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Competences from './components/Competences'
import Experience from './components/Experience'
import Compétences from './components/Compétences'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Agrocerti from  "./assets/projects/Agrocerti.png"
import cancerDetection from './assets/projects/cancer-detection.png'
import projetRestau from './assets/projects/projet-restau.png'
import ticTacToe from './assets/projects/tic-tac-toe.png'
import institutPublic from './assets/projects/institut-public.jpg'
import gestTache from './assets/projects/gest-tache.png'
import gestNote from './assets/projects/gest-note.png'
import Experiences from './components/Experiences'



const App = () => {


  const competencesArray=[
  'HTML',
  'CSS',
  'Javascript',
  'php',
  'C',
  'Java',
  'React',
  'Bases de données SQL'
  ];

  const ProjetctsArray=[
    {
    titre:'Application Web pour la gestion des prestations des attestations agricoles.',
    image: Agrocerti,
    description:'Développement d\'une application web pour optimiser la gestion des demandes et de la délivrance d\'attestations agricoles. Mise en place d\'un système de suivi et de traçabilité des prestations.',
    technologies: ['spring boot','angular']},
    {
    titre:'Application Web de gestion d\'un budget d\'un institut publique.',
    image: institutPublic,
    description:"Conception et développement d'une application web personnalisée pour la gestion du budget d'un institut public. Implémentation de fonctionnalités telles que la saisie des dépenses, la création de budgets prévisionnels, le suivi des engagements et la génération de rapports financiers détaillés.",
    technologies:  ['spring boot','angular']},
    {
    titre: 'Classification et détection à l\'aide de deep learning -imagerie Ensemble de données sur le cancer du sein.' ,
    image: cancerDetection,
    description:"Mise en œuvre de techniques de deep learning (CNN) pour la classification d'images médicales du sein. Développement d'un modèle capable de différencier les tissus sains des tissus tumoraux avec une haute précision.",
    technologies:["python","HTML","CSS","JavaScript"] },
    {
    titre:'Création du jeux "tic-tac-toe" ',
    image:ticTacToe,
    description:"Mise en place d'une interface utilisateur intuitive et d'une logique de jeu fonctionnelle.",
    technologies:["HTML", "CSS" ,"JavaScript" ]},
    {
    titre:'Création d\'une application de gestion des notes .',
    image:gestNote,
    description:"Conception et développement d'une application web pour la gestion des notes. Implémentation de fonctionnalités telles que la création, la modification, l'organisation et la recherche de notes.",
    technologies:["Angular"] },
    {
    titre : 'Création d\'une application de gestion des taches .',
    image:gestTache,
    description:"Conception et développement d'une application web pour la gestion de projets et de tâches. Implémentation de fonctionnalités telles que la création, l'organisation, le suivi et l'archivage des tâches, ainsi que la définition de priorités et de délais.",
    technologies: ['ReactJs']},
    {
    titre:'Application Web de réservation en ligne dans un restaurant.',
    image:projetRestau,
    description:"Développement d'une application web de réservation en ligne pour restaurants. Mise en place d'un système intuitif permettant aux clients de réserver facilement leur table.",
    technologies:[ 'HTML', 'CSS' , 'Bootstrap'] }
    ];

 
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection: text-cyan-900'>
      <div className=' top-0 z-10 h-full w-full'>
      <div className="absolute top-0 z-[-2] h-100% w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className='container mx-auto px-8'>
      <Header/> 
      <About nom ="Hanane Oudaali" state="Etudiante en Master" 
      description="En tant que future ingénieure en informatique et analyse de données, je suis motivée par l'idée d'utiliser mes compétences pour résoudre des problèmes
       complexes et apporter une valeur ajoutée aux entreprises. Mon parcours académique à la Faculté des Sciences Chouaib Dokkali m'a fourni les outils nécessaires pour
       développer des solutions innovantes dans le domaine du developpement web et mobile, l'intelligence artificielle et de la data science."/> 
      <Competences />
      <Compétences compétences={competencesArray}/>
      <Experience> <Experiences/></Experience>
      <Projects projects ={ProjetctsArray}/>
      <Footer/>
      </div>
    </div>
    </div>
    
    </div>
  );
}

export default App
