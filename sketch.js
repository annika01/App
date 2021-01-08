var form, welcome,task
var db, viewtask


function setup() {
  createCanvas(displayWidth,displayHeight);
  db= firebase.database()
 welcome=new Home()
}

function draw() {
welcome.display()



  background(255,255,255);  
  
}