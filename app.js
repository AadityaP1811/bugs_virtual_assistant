

const btn = document.querySelector('.talk')
const content = document.querySelector ('.content')
function speak(text){


function speak(text){
    const text_speak = new SpeechSynthesisUtterance (text);
    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;
    window. speechSynthesis.speak (text_speak);
    }
function wishMe(){  
    update
}  

speak = new SpeechSynthesisUtterance(text);
text_speak.rate = 1;
text_speak.volume = 1;
text_speak.pitch = 1;
window.speechSynthesis.speak(text_speak)
}

window.addEventListener('load',()=>{
speak("What's up DOC !");
});