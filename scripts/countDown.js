let intervalId

//                     Function 

let getInput =()=>{
    let element=document.querySelector('.js-time-input').value;  
    console.log(element);
    timer(element);
};

function timer(param){
    
    let index=Number(param);

        intervalId=setInterval(()=>{ 
        let minutes = Math.floor(index / 60);
        let seconds = index % 60;

        let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
        let formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

        document.querySelector('.js-timer-display').innerHTML = `${formattedMinutes}:${formattedSeconds}`;

        index-=1;

        if (index===0){
            clearInterval(intervalId);
        }
    },1000);
};

function getPause(){
    if (intervalId){
        clearInterval(intervalId);
        document.querySelector('.js-pause').innerHTML='Resume';
        intervalId=0;
    }else{

        document.querySelector('.js-pause').innerHTML='Pause';
        
        let element=document.querySelector('.js-timer-display').textContent;
        
        let min1=element[0];
        let min2=element[1];

        let sec1=element[3];
        let sec2=element[4];

        formattedMinutes=Number(min1+min2);
        formattedSeconds=Number(sec1+sec2);  

        let time=formattedMinutes*60+formattedSeconds;
        timer(time);
        
    };
};

function Reset(){
    clearInterval(intervalId);
    document.querySelector('.js-timer-display').innerHTML='00:00';
};