const confettiCannon = ()=>{

    const cannon = document.createElement('div');
    const colors = ['red', 'blue', 'green', 'pink', 'purple', 'white', 'orange'];
    const size = 1000; //You can change this to make the explosion bigger. 5000 starts to lag
    const time = 2000; //How long the animation will last. The divs will always be removed 1 second after the animation ends (Though they fade to 0 opacity in the animation so they are unseen by then).

    cannon.style.bottom = '0';
    cannon.style.left = '50%';
    cannon.style.position = 'fixed';
    cannon.style.tranform = 'translate(-50%, -50%)';
    
    for(let x = 0; x < size; x++){
        let confetti = document.createElement('div');
        let ranDir = Math.floor(Math.random() * 2) ? "-" : "";
    
        confetti.style.height = '.5rem';
        confetti.style.width = '.3rem';
        confetti.style.position = 'absolute';
        confetti.style.animationFillMode = 'forwards';
        confetti.style.transform =`rotate(${Math.random() * 1000}deg)`;
        confetti.style.transform = 'all ease-in-out';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.animate([{transform:`translate(${ranDir}${Math.random() * 200}vw, -${Math.random() * 300}vh)`, opacity:"0%"}], {duration:time, iterations:1});
        cannon.appendChild(confetti);
    
        //Once the animation is done, remove the divs from the DOM
        setTimeout(()=>{
            cannon.removeChild(confetti);
        }, time + 1000);
    }
    
    //Add the cannon to the bottom of the screen
    document.body.appendChild(cannon);
    
    //Just cleaning up. Remove the cannon once the animation is done.
    setTimeout(()=>{
        document.body.removeChild(cannon);
    }, time + 1000);
    }

confettiCannon()