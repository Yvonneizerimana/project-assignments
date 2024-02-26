

const getRandomEvent=()=>{
    const random=Math.floor(Math.random()*3);
    if(random===0){
        return 'Marathon';
    }
    else if(random===1){
        return 'Triathlon';
    }
    else if(random===2){
        return 'Pentathlon';
    }
};

const getTrainingDays=event=>{
    let days='';
    if(event==='Marathon'){
        days=50;
    }
    else if(event==='Triathlon'){
       days =100;
    }
    else if(event==='Pentathlon'){
       days=200;
    }
    return days;
};

const logEvent=name=>{
    console.log(`${name}'s time to train is: ${event}`);
};


const event=getRandomEvent();
const days=getTrainingDays(event);

const name='Nala';
console.log(name, event);
console.log(name,"You will train ", days);





