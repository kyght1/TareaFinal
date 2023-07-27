import React, { useEffect, useState } from "react";
import getRazas from "./getRazas";

/*Fecth de la API*/ 

const Select = ({razaSeleccionada}) => {
  const [Razas, setRazas] = useState([])

  const updateRazas = () =>{
    getRazas().then((data) =>{
      const razasArray = Object.keys(data.message);
    setRazas(razasArray)}

    )
  }
  useEffect(() => {
    updateRazas();
  },);
  const handleBreedChange = (event) => {
    const selectedBreed = event.target.value;
    razaSeleccionada(selectedBreed);
  };
  return (
    <select  onChange = {handleBreedChange} className="SelectorPerro">
     {Razas.map((name,index) => 
     (<option key={index}>{name}</option>))}
    </select>

  );
};export default Select
