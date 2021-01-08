class Viewtask {

constructor(){
this.task= null
this.description=null
this.taskelement= createElement("h1")
this.describe= createElement("h1")
}
view(){
    db.ref("/").on("value",(data)=>{
  var task= data.val()
      this.task= task.task
      this.description= task.description
      
    })
    this.taskelement.html("TASK-"+this.task)
    this.describe.html("DESCRIPTION-"+this.description)
    this.taskelement.position(width/2-100,100)
    this.describe.position(width/2-100,200)
}
display(){

console.log(this.task)
}

}