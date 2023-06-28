import React, { useEffect, useState } from 'react'
import './AdviceCard.css'
export const AdviceCard = () => {


    const [advices,setAdvice]=useState("");
    const [isloading,setIsLoading]=useState(true);
    const fetchAdvice=async()=>{
        setIsLoading(true)
        const adc=await fetch('https://api.adviceslip.com/advice')
        const data= await adc.json()
        console.log(data);
        setAdvice(data)
        setIsLoading(false)
    };
    useEffect(()=>{
        fetchAdvice();

    },[]);


    return (
        <div>
            <div className="adcard">
                {isloading?<h5>Loading...</h5>:<h3>{advices.slip?.advice}</h3>}
                
                <button onClick={fetchAdvice}>GIVE ME ADVICE !</button>
            </div>
        </div>
    )
}




