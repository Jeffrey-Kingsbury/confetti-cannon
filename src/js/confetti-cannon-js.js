const confettiCannon = () =>{

const stage = document.createElement('div');
const cannon = document.createElement('div');
const colors = ['red', 'blue', 'green', 'pink', 'purple', 'white', 'orange'];
const size = 500; 


stage.id = 'confettiCannonJsStage';
stage.style.overflow = '';
stage.style.bottom = '0';
stage.style.left = '50%';
stage.style.position = 'fixed';
stage.style.tranform = 'translate(-50%, -50%)';

cannon.style.width = '1px';
cannon.style.height = '1px';
cannon.style.bottom = 0;



stage.appendChild(cannon);
for(let x = 0; x < size; x++){
    let confetti = document.createElement('div');
    let ranDir = Math.floor(Math.random() * 2) ? "-" : "";

    confetti.style.height = '1rem';
    confetti.style.width = '.5rem';
    confetti.style.position = 'absolute'
    confetti.style.animationFillMode = 'forwards'
    confetti.style.transform =`rotate(${Math.random() * 1000}deg)`
    confetti.style.transform = 'all ease-in-out 3s';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.animate([{transform:`translate(${ranDir}${Math.random() * 200}vw, -${Math.random() * 200}vh)`, opacity:"0%"}], {duration:2000, iterations:1});
    cannon.appendChild(confetti);

    setTimeout(()=>{
        cannon.removeChild(confetti)
    }, 3000);
}

document.body.appendChild(stage);

//Just cleaning up. Remove the stage once the animation is done.
setTimeout(()=>{
    document.body.removeChild(stage);
}, 3000);
}

confettiCannon()