function setAlarm() {
  const timerInput = Number(document.getElementById("alarmSet").value);
  const timeRemaining = document.getElementById("timeRemaining");
  let minutes = Math.floor(timerInput/60);
  let seconds = Math.floor(timerInput%60);
  const Timer=setInterval(timerUpdate, 1000);

  function timerUpdate(){
    if(seconds !=0){
      timeRemaining.innerText = `Time Remaining : ${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`
      seconds=seconds-1;
    }else if(minutes !=0){
      timeRemaining.innerText = `Time Remaining : ${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`
      minutes=minutes-1;
      seconds=60
    }else{
      timeRemaining.innerText = `Time Remaining : 00:00`;
      clearInterval(Timer);
      playAlarm();
    }
  }
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}



window.onload = setup;