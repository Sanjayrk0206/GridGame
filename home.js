var t=24,k=35,moves=0,time = 180,x=0,score=1000
function getRandomColor() {
  var letters = ["#0400ff","#ff0000","#fbff00","#15ff00","#ff9900","#ffffff"]
  var repeat=["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23"]
  t=24;moves=0;time=180;clearInterval(x);
  document.getElementById("clickaudio").play()
  display = document.querySelector('#time1');
  startTimer(time, display);
  document.getElementById("reset").innerHTML = "Stop";
  document.getElementById(t.toString()).style.backgroundColor="lightslategrey";
  for (var i=1;i<=9;i++){
    color = letters[Math.floor(Math.random() * 6)];
    it1='q'
    it1+=i
    it = Math.floor(Math.random()*repeat.length)
    document.getElementById(it1.toString()).style.backgroundColor=color;
    document.getElementById("moves1").innerHTML = moves;
    document.getElementById(repeat[it]).style.backgroundColor=color;
    if(repeat[it]=="6" || repeat[it]=="7" || repeat[it]=="8" || repeat[it]=="11" || repeat[it]=="12" || repeat[it]=="13" || repeat[it]=="16" || repeat[it]=="17" || repeat[it]=="18"){
      document.getElementById(repeat[it]).style.border="1.5px solid black" 
    }
    repeat.splice(it,1); 
  }
  for (i=0;i<15;i++){
    it = Math.floor(Math.random()*repeat.length)
    color = letters[Math.floor(Math.random() * 6)];
    document.getElementById(repeat[it]).style.backgroundColor=color;
    if(repeat[it]=="6" || repeat[it]=="7" || repeat[it]=="8" || repeat[it]=="11" || repeat[it]=="12" || repeat[it]=="13" || repeat[it]=="16" || repeat[it]=="17" || repeat[it]=="18"){
      document.getElementById(repeat[it]).style.border="1px solid black" 
    } 
    repeat.splice(it,1); 
  }
}
function shift(p){
  if(document.getElementById("reset").innerHTML == "Stop"){
    document.getElementById("clickaudio").play()
    if(t<=24 && t>=0){
      if(t%5==0){
        if(p==t+5 || p==t-5 || p==t+1){   
          document.getElementById(t.toString()).style.backgroundColor=document.getElementById(p.toString()).style.backgroundColor;
          document.getElementById(p.toString()).style.backgroundColor="lightslategrey";
          moves++;
          document.getElementById("moves1").innerHTML = moves.toString();
          t=p;
        }
      }
      else if(t==4 || t==9 || t==14 || t==19){
        if(p==t+5 || p==t-5 || p==t-1){   
          document.getElementById(t.toString()).style.backgroundColor=document.getElementById(p.toString()).style.backgroundColor;
          document.getElementById(p.toString()).style.backgroundColor="lightslategrey";
          moves++;
          document.getElementById("moves1").innerHTML = moves.toString();
          t=p;
        }
      }
      else{
        if(p==t+5 || p==t-5 || p==t+1 || p==t-1){   
          document.getElementById(t.toString()).style.backgroundColor=document.getElementById(p.toString()).style.backgroundColor;
          document.getElementById(p.toString()).style.backgroundColor="lightslategrey";
          moves++;
          document.getElementById("moves1").innerHTML = moves.toString();
          t=p;
        }
      }
    } 
    if(document.getElementById("q1").style.backgroundColor===document.getElementById("6").style.backgroundColor && document.getElementById("q2").style.backgroundColor===document.getElementById("7").style.backgroundColor && document.getElementById("q3").style.backgroundColor===document.getElementById("8").style.backgroundColor && document.getElementById("q4").style.backgroundColor===document.getElementById("11").style.backgroundColor && document.getElementById("q5").style.backgroundColor===document.getElementById("12").style.backgroundColor && document.getElementById("q6").style.backgroundColor===document.getElementById("13").style.backgroundColor && document.getElementById("q7").style.backgroundColor===document.getElementById("16").style.backgroundColor && document.getElementById("q8").style.backgroundColor===document.getElementById("17").style.backgroundColor && document.getElementById("q9").style.backgroundColor===document.getElementById("18").style.backgroundColor){
      document.getElementById("wonaudio").play()
      document.getElementById("notice_background").style.display="block";
      document.getElementById("notice").style.display="block";
      clearInterval(x);
      score=1000-(2*moves)
      document.getElementById("score1").innerHTML = score.toString();
    }
  }
  else{
    document.getElementById("erroraudio").play()
  }
}
function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  x = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
        document.getElementById("endaudio").pause();
        document.getElementById("loseaudio").play();
        document.getElementById("notice_background").style.display="block";
        document.getElementById("notice1").style.display="block";
        clearInterval(x);
      }
      else if(timer < 15){
        document.getElementById("endaudio").play()
      }
  }, 990);
}
function restart(){
    document.getElementById("notice_background").style.display="none";
    document.getElementById("notice").style.display="none";
    document.getElementById("notice1").style.display="none";
    document.getElementById("reset").innerHTML = "Start";
    location.reload();
}
function getRandomColor1() {
  var letters = ["#0400ff","#ff0000","#fbff00","#15ff00","#ff9900","#ffffff"]
  var repeat=["n0","n1","n2","n3","n4","n5","n6","n7","n8","n9","n10","n11","n12","n13","n14","n15","n16","n17","n18","n19","n20","n21","n22","n23","n24","n25","n26","n27","n28","n29","n30","n31","n32","n33","n34"]
  k=35;moves=0;time=180;clearInterval(x);
  display = document.querySelector('#time1');
  document.getElementById("clickaudio").play()
  startTimer(time, display);
  document.getElementById("reset").innerHTML = "Stop";
  document.getElementById("n35").style.backgroundColor="lightslategrey";
  for (var i=1;i<=16;i++){
    color = letters[Math.floor(Math.random() * 6)];
    it1='nq'
    it1+=i
    it = Math.floor(Math.random()*repeat.length)
    document.getElementById(it1.toString()).style.backgroundColor=color;
    document.getElementById("moves1").innerHTML = moves;
    document.getElementById(repeat[it]).style.backgroundColor=color;
    if(repeat[it]=="n7" || repeat[it]=="n8" || repeat[it]=="n9" || repeat[it]=="n10" || repeat[it]=="n13" || repeat[it]=="n14" || repeat[it]=="n15" || repeat[it]=="n16" || repeat[it]=="n19"|| repeat[it]=="n20" || repeat[it]=="n21" || repeat[it]=="n22" || repeat[it]=="n25"|| repeat[it]=="n26" || repeat[it]=="n27" || repeat[it]=="n28"){
      document.getElementById(repeat[it]).style.border="1.5px solid black" 
    }
    repeat.splice(it,1); 
  }
  for (i=0;i<19;i++){
    it = Math.floor(Math.random()*repeat.length)
    color = letters[Math.floor(Math.random() * 6)];
    document.getElementById(repeat[it]).style.backgroundColor=color;
    if(repeat[it]=="n7" || repeat[it]=="n8" || repeat[it]=="n9" || repeat[it]=="n10" || repeat[it]=="n13" || repeat[it]=="n14" || repeat[it]=="n15" || repeat[it]=="n16" || repeat[it]=="n19"|| repeat[it]=="n20" || repeat[it]=="n21" || repeat[it]=="n22" || repeat[it]=="n25"|| repeat[it]=="n26" || repeat[it]=="n27" || repeat[it]=="n28"){
      document.getElementById(repeat[it]).style.border="1.5px solid black" 
    }
    repeat.splice(it,1); 
  }
}
function shift1(p){
  it="n"
  if(document.getElementById("reset").innerHTML == "Stop"){
    document.getElementById("clickaudio").play()
    if(k<=35 && k>=0){
      if(k%6==0){
        if(p==k+6 || p==k-6 || p==k+1){   
          document.getElementById(it+k).style.backgroundColor=document.getElementById(it+p).style.backgroundColor;
          document.getElementById(it+p).style.backgroundColor="lightslategrey";
          moves++;
          document.getElementById("moves1").innerHTML = moves.toString();
          k=p;
        }
      }
      else if(k==5 || k==11 || k==17 || k==23 || k==29){
        if(p==k+6 || p==k-6 || p==k-1){   
          document.getElementById(it+k).style.backgroundColor=document.getElementById(it+p).style.backgroundColor;
          document.getElementById(it+p).style.backgroundColor="lightslategrey";
          moves++;
          document.getElementById("moves1").innerHTML = moves.toString();
          k=p;
        }
      }
      else{
        if(p==k+6 || p==k-6 || p==k+1 || p==k-1){   
          document.getElementById(it+k).style.backgroundColor=document.getElementById(it+p).style.backgroundColor;
          document.getElementById(it+p).style.backgroundColor="lightslategrey";
          moves++;
          document.getElementById("moves1").innerHTML = moves.toString();
          k=p;
        }
      }
    } 
    if(document.getElementById("nq1").style.backgroundColor===document.getElementById("n7").style.backgroundColor && document.getElementById("nq2").style.backgroundColor===document.getElementById("n8").style.backgroundColor && document.getElementById("nq3").style.backgroundColor===document.getElementById("n9").style.backgroundColor && document.getElementById("nq4").style.backgroundColor===document.getElementById("n10").style.backgroundColor && document.getElementById("nq5").style.backgroundColor===document.getElementById("n13").style.backgroundColor && document.getElementById("nq6").style.backgroundColor===document.getElementById("n14").style.backgroundColor && document.getElementById("nq7").style.backgroundColor===document.getElementById("n15").style.backgroundColor && document.getElementById("nq8").style.backgroundColor===document.getElementById("n16").style.backgroundColor && document.getElementById("nq9").style.backgroundColor===document.getElementById("n19").style.backgroundColor  && document.getElementById("nq10").style.backgroundColor===document.getElementById("n20").style.backgroundColor  && document.getElementById("nq11").style.backgroundColor===document.getElementById("n21").style.backgroundColor  && document.getElementById("nq12").style.backgroundColor===document.getElementById("n22").style.backgroundColor  && document.getElementById("nq13").style.backgroundColor===document.getElementById("n25").style.backgroundColor  && document.getElementById("nq14").style.backgroundColor===document.getElementById("n26").style.backgroundColor  && document.getElementById("nq15").style.backgroundColor===document.getElementById("n27").style.backgroundColor && document.getElementById("nq16").style.backgroundColor===document.getElementById("n28").style.backgroundColor){
      document.getElementById("wonaudio").play()
      document.getElementById("notice_background").style.display="block";
      document.getElementById("notice").style.display="block";
      clearInterval(x);
      score=1000-moves
      document.getElementById("score1").innerHTML = score.toString();
    }
  }
  else{
    document.getElementById("erroraudio").play()
  }
}
var mode="Easy"
function modefunction(j){
  mode = j
  if(mode == "Easy"){
    document.getElementById("clickaudio").play()
    document.getElementById("easymode").style.display="block";
    document.getElementById("normalmode").style.display="none";
    document.getElementById("Easy").style.color="red";
    document.getElementById("Normal").style.color="white";
  }
  else{
    document.getElementById("clickaudio").play()
    document.getElementById("easymode").style.display="none";
    document.getElementById("normalmode").style.display="block";
    document.getElementById("Easy").style.color="white";
    document.getElementById("Normal").style.color="red";
  }
}
function Change(){
  if(document.getElementById("reset").innerHTML=="Start"){
    if(mode=="Easy"){
      getRandomColor()
      document.getElementById("Normal").style.display="none";
      document.getElementById("Easy").setAttribute("onclick","getRandomColor()");
      document.getElementById("Normal").removeAttribute("onclick");
    }
    else{
      getRandomColor1()
      document.getElementById("Easy").removeAttribute("onclick");
      document.getElementById("Normal").setAttribute("onclick","getRandomColor1()");
      document.getElementById("Easy").style.display="none";
    }
  }
  else if(document.getElementById("reset").innerHTML=="Stop"){
      n=x;
      clearInterval(x);
      document.getElementById("moves1").innerHTML = 0;
      document.getElementById("time1").innerHTML = "03:00";
      document.getElementById("Easy").setAttribute("onclick","modefunction('Easy')");
      document.getElementById("Normal").setAttribute("onclick","modefunction('Normal')");
      document.getElementById("reset").innerHTML="Start";
      if(mode=="Easy"){
        document.getElementById("Normal").style.display="inline";
        for(var i=1;i<=9;i++){
          it1='q'
          it1+=i
          document.getElementById(it1.toString()).style.backgroundColor="lightslategrey";
        }
        for(i=0;i<=24;i++){
          document.getElementById(i).style.backgroundColor="lightslategrey";
          document.getElementById(i).style.border="none";
        }
      }
      else{
        document.getElementById("Easy").style.display="inline";
        for(var i=1;i<=16;i++){
          it1='nq'
          it1+=i
          document.getElementById(it1.toString()).style.backgroundColor="lightslategrey";
        }
        for(i=0;i<=35;i++){
          a="n"
          document.getElementById(a+i).style.backgroundColor="lightslategrey";
          document.getElementById(a+i).style.border="none";
        }
      }
  }
}
function storage(txt,z){
  const person = {
    name: txt,
    Score: score,
  }
  p = JSON.parse(localStorage.getItem('user'));
  if(p!=null){
    if(p.Score<=person.Score){
        localStorage.setItem('user',JSON.stringify(person))
      }
  }
  else{
      localStorage.setItem('user',JSON.stringify(person))
  }
  if(z==0){
    restart()
  }
  else{
    close;
  }
}
window.onload=function() {
  p = JSON.parse(localStorage.getItem('user'));
  if(p!=null){
      document.getElementById("highest").innerHTML= p.name + "  " + p.Score  ;
  }
  else{
      document.getElementById("highest").innerHTML="No high score";
  }
}