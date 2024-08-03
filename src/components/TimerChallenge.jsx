import React, { useRef, useState } from 'react';


const TimerChallenge = ({ title, targetTime }) => {
    const [timeStarted,setTimerStarted]=useState(false)
    const [timerExpired, setTimeExpired] = useState(false);

    const timer=useRef();

    function handleStart() {
        timer.current= setTimeout(() => {setTimeExpired(true) }, targetTime * 1000);
        setTimerStarted(true);
    }
    function handleStop(){
        clearTimeout(timer.current);
    }
    return (
        <section className='challenge'>
            <h2>{title}</h2>
            {timerExpired&& <p>You lost!</p>}
            <p className="challenge-time">
                {targetTime} {targetTime > 1 ? 's' : ''}
            </p>
            <button onClick={timeStarted?handleStop:handleStart}>{timeStarted?'Stop':'Start'}</button>
            <p className={timeStarted?'active':undefined}>
              {timeStarted? 'Time is running...':'Timer inactive'} 
            </p>
        </section>
    );
}

export default TimerChallenge;
