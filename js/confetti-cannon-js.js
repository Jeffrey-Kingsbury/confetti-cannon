const confettiCannon = ()=>{
    const audio = new Audio('../sfx.mp3');
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
    
        confetti.style.height = `${Math.random().toFixed(2) * .6}rem`;
        confetti.style.width = `${Math.random().toFixed(2) *.4}rem`
        confetti.style.position = 'absolute';
        confetti.style.animationFillMode = 'forwards';
        confetti.style.transform = `skew(${Math.random() * 16}deg, ${Math.random() * 36}deg)`;
        confetti.style.boxShadow = '5px 1px 10px;'
        confetti.style.transform = 'all ease-in-out';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.animate([{transform:`translate(${ranDir}${Math.random() * 200}vw, -${Math.random() * 300}vh) scale(${Math.random() * 4}) rotate(${Math.floor(Math.random() * 500)}deg)`, opacity:"0%"}], {duration:time, iterations:1, delay:Math.random() * 600});
        cannon.appendChild(confetti);

        // Uncomment below if you'd like SFX with the confetti.
        //audio.play();


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

