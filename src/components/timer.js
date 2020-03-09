import React from 'react'
import './time.css'



export default function timer(props) {
    const ls=props.ls
    // console.log(ms)
    const seconde= Math.floor((ls % 60)).toString().padStart('2',0)
        const minute= Math.floor((ls/60)%60).toString().padStart('2',0)
        const heure= Math.floor (ls/(60*60)%60).toString().padStart('2',0)

    return (
        <div class="time-container">
            
            <div class="time-inner-container">
            <div className="time-digits">{heure}:{minute}:{seconde}</div>
            <div className="time-text-item">
                <p>Hour</p> <p> Minute </p> <p>Second</p></div>

            </div>
               </div>
        
    )
}



