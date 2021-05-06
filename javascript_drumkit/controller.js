


window.onload = ()=> {
    window.addEventListener('keydown',(event)=>{
        const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
        console.log(audio);
        if(!audio) return; //stop function
        audio.currentTime = 0; //revind audio to start
        audio.play();
        key.classList.add('key_pressed');
    });
    
    
    function removeClass(event) {
        if(event.propertyName != "transform") return;
        console.log(event);
        this.classList.remove('key_pressed')
    }
    const keys = document.querySelectorAll('.key');
    console.log(keys);
    keys.forEach(key => key.addEventListener('transitionend', removeClass));
}