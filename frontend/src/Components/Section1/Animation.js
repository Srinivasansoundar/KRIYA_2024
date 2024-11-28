'use client'
import React,{useState,useEffect} from 'react'
import AnimatedNumbers from 'react-animated-numbers';
const Animation = ({ n }) => {
    const [animateNumber, setAnimateNumber] = useState(0); // Initial value set to 0
  
    useEffect(() => {
    
      setAnimateNumber(n);
    }, [n]); 
  
    return (
      <AnimatedNumbers
        animateToNumber={animateNumber}
        fontStyle={{ fontSize: 48, color: '#333' }} 
        transitions={(index) => ({
            type: "spring",
            duration: index + 0.3,
          })}
         
        // formatValue={n => n.toFixed(0)}
        // frameStyle={percentage => percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}}
      />
    );
  };
  
  export default Animation;