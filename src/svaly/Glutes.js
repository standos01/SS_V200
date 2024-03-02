import React from 'react';
import { useState, useEffect } from "react"



export default function Glutes() {
    const [muscleData, nastavMuscleData] = useState([]);

    useEffect(() => {
        nactiexercisey('glutes');
      }, []);
    
      const nactiexercisey = (svalovaSkupina) => {
        const apiKey = '2efr54R/WtqI+JDjwGHzQQ==MgWRQx76eccnime8';
        fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${svalovaSkupina}`, {
          method: 'GET',
          headers: { 'X-Api-Key': apiKey },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            nastavMuscleData(data);
          })
          ;
      };
      return (
        <>
    
          
          <div className="exercisey">
            <h2>Seznam cviceni na prdel:</h2>
            {muscleData.map((exercise) => (
              <div key={exercise.id}>
                <h3>{exercise.name}</h3>
                <p>Typ: {exercise.tipe}</p>
                <p>Equipment: {exercise.equipment}</p>
                <p>Obtiznost: {exercise.difficulty}</p>
                <p>Instrukce: {exercise.instructions}</p>
              </div>
            ))}
          </div>
    
        </>
      );
    }
    