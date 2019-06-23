
// cache the DOM
const button1 = document.getElementById('first');
const button2 = document.getElementById('second');
const button3 = document.getElementById('third');
const myAudio1 = document.getElementById('myAudio1');
const myAudio2 = document.getElementById('myAudio2');
const myAudio3 = document.getElementById('myAudio3');
let isPlaying = false;

// DRY; pull out the logic, create some functions
function togglePlay1(){
  if (isPlaying){
    myAudio1.pause()
  } else{
    myAudio1.play();
  }
  myAudio1.onplaying = function(){
    isPlaying = true;
  };
  myAudio1.onpause = function(){
    isPlaying = false;
  };
}

function togglePlay2(){
  if (isPlaying){
    myAudio2.pause()
  } else{
    myAudio2.play();
  }
  myAudio2.onplaying = function(){
    isPlaying = true;
  };
  myAudio2.onpause = function(){
    isPlaying = false;
  };
}

function togglePlay3(){
  if (isPlaying){
    myAudio3.pause()
  } else{
    myAudio3.play();
  }
  myAudio3.onplaying = function(){
    isPlaying = true;
  };
  myAudio3.onpause = function(){
    isPlaying = false;
  };
}

button1.addEventListener('click', togglePlay1);
button2.addEventListener('click', togglePlay2);
button3.addEventListener('click', togglePlay3);

// for interactive 'sign-in'
document.onreadystatechange = function(){//window.addEventListener('readystatechange',function(){...}); (for Netscape) and window.attachEvent('onreadystatechange',function(){...}); (for IE and Opera) also work
  if(document.readyState=='loaded' || document.readyState=='complete'){
    
    var age = prompt('How old are you, Reader?');

    if (Number(age) < 5){
    alert('Practice using the pointing strategy with your favorite book!');
    } else if (Number(age) > 5){
    alert('Wow, how many strategies do you know? When would it make sense to use each one?');
    } else if (Number(age) === 5){
    alert('I hope you are ready to learn about reading strategies! Start with the pointing strategy.');
    }
  }  
}

// for style
document.getElementbyClassName('button-container').onclick = function(){
  display.outline = 'none';
};
  