
const Divsec = document.getElementById("sec");
const Divmin = document.getElementById("min");
const Divhour = document.getElementById("hour");


function UpdateClock(){
  var date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  console.log("Hour: "+ hour + " Minute: "+ min + " Second: "+ sec);

  let hrPosition = hour*360/12 + ((min * 360/60)/12) ;
  let minPosition = (min * 360/60) + (sec* 360/60)/60;
  let secPosition = sec * 360/60;

  Divhour.style.transform = "rotate(" + hrPosition + "deg)";
  Divmin.style.transform = "rotate(" + minPosition + "deg)";
  Divsec.style.transform = "rotate(" + secPosition + "deg)";
}


var interval = setInterval(UpdateClock, 100);