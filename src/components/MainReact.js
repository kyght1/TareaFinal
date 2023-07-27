import React from 'react'
import Select from './Select'
import Card from './Card';
import { useState } from 'react';


const MainReact = () => {
  const [raza, setSelectRaza] = useState('');

  const ManejarRazaSeleccionada= (raza) => {
    setSelectRaza(raza);
  };
  return (
    
    <main className='Main'>
      <Select razaSeleccionada={ManejarRazaSeleccionada} />
      <Card raza = {raza}/> 
        
     </main>
  )
}

export default MainReact