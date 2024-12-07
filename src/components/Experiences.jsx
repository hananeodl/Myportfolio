import React from 'react'

const Experiences = () => {
    const experiences=[
        {date : 'Avril - Mai 2024',
        type:'stage de fin d\'etude',
        lieu:'Office Régional De Mise En Valeur Agricole Du Haouz',
        description:'Projet de fin d\'étude intitulé Analyse, Conception et Réalisation d\'une application Web pour la gestion des prestations des attestations agricoles.',
        technologies: ['spring boot','angular']},
        {date :'Mars - Avril 2024',
        type:'Travail pratique',
        lieu:' FSTG',
        description:'Application Web de gestion d\'un budget d\'un institut publique.',
        technologies:  ['spring boot','angular']},
        {date :'Février - Mars 2024',
        type:'Travail pratique',
        lieu:'FSTG',
        description: 'Classification et détection à l\'aide de deep learning -imagerie Ensemble de données sur le cancer du sein.' ,
        technologies:["python","HTML","CSS","JavaScript"] },
        {date :'Février 2024',
        type:'Autoformation',
        lieu: '',
        description:'Création du jeux "tic-tac-toe" ',
        technologies:["HTML", "CSS" ,"JavaScript" ]},
        {date :'Janvier 2024',
        type:'Autoformation' ,
        lieu:'',
        description:'Création d\'une application de gestion des notes .',
        technologies:["Angular"] },
        {date :'Décembre 2024',
        type:'Travail pratique ',
        lieu:'FSTG',
        description : 'Création d\'une application de gestion des taches .',
        technologies: ['ReactJs']},
        {date :'Décembre 2024',
        type:'Travail pratique',
        lieu:'FSTG',
        description: 'Mini-projet de réalisation des commandes linux pour la gestion des fichiers.',
        technologies:[ 'Script shell'] },
        {date :'Novembre 2024',
        type:'Travail pratique',
        lieu:'FSTG',
        description:'Site Web de réservation en ligne dans un restaurant.',
        technologies:[ 'HTML', 'CSS' , 'Bootstrap'] }
        ]
    
  return (
    <div>
    {experiences.map((experience, index) => (
      <div key={index} {...experience}  className='mb-8 flex flex-wrap lg:justify-center'>
            <div className='w-full lg:w-1/4'>
            <p className='mb-2 text-sm text-neutral-400'>{experience.date}</p>
            </div>
            <div className='w-full max-w-xl lg;w-3/4'>
            <h6 className='mb-2 font-semibold'>{experience.type} - <span className='text-sm text-purple-100'>{experience.lieu}</span></h6>
            <p className='mb-4 text-neutral-400'>{experience.description}</p>
            {experience.technologies.map((tech , index)=>(
                <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>{tech}</span>
            ))}
            </div>
      </div>
    ))}
  </div>
  )
}

export default Experiences
