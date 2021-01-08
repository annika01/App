class Form{

constructor(){
this.title= createElement("h2", "Enter task")
this.tasklabel= createElement("h2","Enter task to be performed")
this.taskinput= createInput()
this.describelabel= createElement("h2", "Enter description of the task")
this.describeinput= createInput()
this.submit= createButton("Allot task")

}
display(){
this.title.position(width/2-60,-15)
this.tasklabel.position(50, 120)
this.taskinput.position(350,125)
this.taskinput.size(400,50)
this.taskinput.style("border-width", "6px")
this.taskinput.style("border-style","inset")
this.describelabel.position(50, 300)
this.describeinput.position(350,300)
this.describeinput.style("border-width", "6px")
this.describeinput.style("border-style","inset")
this.describeinput.size(400,50)
this.submit.position(width/2,height/2)
this.submit.style("border-width", "3px")
this.submit.style("font-size","35px")
this.submit.style("border-radius","10px")
this.title.style("font-size","60px")
this.submit.mousePressed(()=>{
    task=new Task()
task.task=this.taskinput.value()
task.description= this.describeinput.value()
task.update(task.task,task.description)

})

}


}