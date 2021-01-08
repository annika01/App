class Task {

constructor(){
    this.task= null
    this.description=null
}

update(task,description){
db.ref("/").set({
    task:task, description:description
})
}


}