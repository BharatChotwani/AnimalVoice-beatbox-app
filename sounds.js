/* 
1. Create a key listener
2. connect key press
3. create a database for beats
4. set the color programatically
*/

window.onload = () => {
    setImg();
    setcolor();
}

const beats = {
    "c":{ 
        voice: "sounds/cows.mp3",
        image: "url(images/cow.jpg)",
        color: "#00ffff"
    },
    "g":{ 
        voice: "sounds/goats.mp3",
        image: "url(images/goats.jpg)",
        color: "#00ffff"
    },
    "s":{ 
        voice: "sounds/sheeps.mp3",
        image: "url(images/sheep.jpg)",
        color: "#ec38bc"
    },
    "d":{ 
        voice: "sounds/duck.mp3",
        image: "url(images/duck.jpg)",
        color: "#ec38bc"
    },
    "w":{ 
        voice: "sounds/wolf.mp3",
        image: "url(images/wolf.jpg)",
        color: "#c1d4e3"
    },
    "r":{ 
        voice: "sounds/roster.mp3",
        image: "url(images/roster.jpg)",
        color: "#c1d4e3"
    },
    "p":{ 
        voice: "sounds/Parrot.mp3",
        image: "url(images/parrot.jpg)",
        color: "#c1d4e3"
    },
    "e":{ 
        voice: "sounds/elephant.mp3",
        image: "url(images/elephant.jpg)",
        color: "#ffffff"
    },
    "h":{ 
        voice: "sounds/horse.mp3",
        image: "url(images/horse.jpg)",
        color: "#ffffff"
    }
}
 const setImg = () => {
     for(let voiceKey in beats){
     let beat = beats[voiceKey];
     const element = document.getElementById(voiceKey);
    element.style.backgroundImage = beat.image;
    element.style.backgroundSize = "cover";
     }

}

const setcolor = () => {
    for(let colorKey in beats){
    let beat = beats[colorKey];
    const element = document.getElementById(colorKey);
   element.style.borderBlockColor = beat.color;
    } 
}

const playBeats = (buttonKey) => {
    let audioSrc = beats[buttonKey].voice;
    
        let audio = new Audio(audioSrc);
        audio.currentTime = 0;
        audio.play();
    
}

document.addEventListener("keydown", (e)=>{
    playBeats(e.key);
} );