import {useState} from 'react';

export default function Compétences({compétences}){
    
    const displayCompétences= () => (
        <div className='border-b border-neutral-900 my-8 pb-4 lg:mb-35'>
        {compétences.map((compétences, index) => <li key={index} className='mb-4 text-neutral-400 flex flex-wrap lg:justify-center'>{compétences}</li>)}
        </div>
        );
    const [value,setValue] = useState('');
    const handleChange= e => {
        setValue(e.target.value)
    }

    function AjouterCompetence(e){
        e.preventDefault();
        if (value.trim() !== '') {
            compétences.push(value);
            setValue('');
        }
        
    }

   
   return(
    <section className="competences">
    

    <ul>{displayCompétences()}</ul>
    
    {/* <form className='border-b border-neutral-900 pt-4 pb-4 lg:mb-35 items-center justify-center' onSubmit={AjouterCompetence}>
        <input className=' mb-4 justify-center text-black' name="competence" value={value} onChange={handleChange}/> 
        <button className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 border-2 p-100 mb-4 flex flex-wrap text-black rounded lg:justify-center'>Ajouter une competence</button>
    </form> */}
    <form className="flex flex-col items-center justify-center  space-y-4 "  onSubmit={AjouterCompetence} >
      <div>
        <label for="competence" className="block text-sm/6 font-medium text-white-900">Nouvelle Competence</label>
        <div class="mt-2">
          <input value={value} onChange={handleChange} type="competence" name="competence" id="competence" required className="block w-full rounded-md bg-white px-6 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-white-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
        </div>
      </div>
    <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 px-6 py-1.5 text-sm/6 font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">Ajouter competence</button>
      </div>
      </form>

     </section>);



    

}