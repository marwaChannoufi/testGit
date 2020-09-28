import React from 'react';
import './App.css';

function calcTime(x){
    let Second=1;
    let secondInMinute = Second * 60;
    let secondInHour= secondInMinute * 60;
    let secondInDay=secondInHour*24;
    let secondInYear=secondInDay*365;

    let years=Math.floor(x / secondInYear);
    let yearsMod=x%secondInYear;

    let jours=Math.floor(yearsMod / secondInDay);
    let joursMod=jours%secondInDay;

    let hours = Math.floor(joursMod / secondInHour);
    let hoursMod = hours % secondInHour;

    let minutes = Math.floor(hoursMod / secondInMinute);
    let minutesMod = minutes % secondInMinute;

    let seconds = Math.floor(minutesMod / Second);
    return(
      years+'/'+jours+'/'+String(years).padStart(2,'0')+'/'+String(minutes).padStart(2,'0')+'/'+String(seconds).padStart(2,'0')
      )
}

function AfficheTime({num}) {
   
   
  return (
    <div className='position' >
        <div className='time-digits'>
          {calcTime(num)}
       
        </div>
        <div className='time-text'>
            <div className='time-text-item'> years</div>
            <div className='time-text-item'> Jours</div>
            <div className='time-text-item'> Hour</div>
            <div className='time-text-item'> Minute</div>
            <div className='time-text-item'> Second</div>

        </div>
    </div>
  );
}

export default AfficheTime;