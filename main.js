var SpeechRecognition = window.SpeechRecognition;
var recognition = new SpeechRecognition();
function start() {
  document.getElementById("textbox").innerHTML = "";
  recognition.start();
}
recognition.onresult = function(event) {
  console.log(event);
  var Content = event.results[0][0].transcript;
  document.getElementById("textbox").innerHTML=Content;
  console.log(Content);
  if(Content=="he is a clever man indeed")
  DelayNode
  DelayNode
  DelayNode
  DelayNode
  
  document.getElementById("le_le").play();
};
{
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=Content;
    console.log(Content);
    if(Content=="sure")
    DelayNode
    DelayNode
    DelayNode
    DelayNode
    
    document.getElementById("Clock-Ding-Dong").play();
  };
function speak()

