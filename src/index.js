document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // Need User input
  const taskDesc = document.querySelector("#new-task-description")
  // console.log(taskDesc)
  // Need the form
  const taskForm = document.querySelector("#create-task-form")
  console.log(taskForm);

  // listen to when the form is submitted 

  taskForm.addEventListener('submit', function(e) {
    e.preventDefault()
    const newTask = taskDesc.value 
    // where do i need to add the task?

    const list = document.querySelector("#tasks")
    const newLi = document.createElement('li')
    newLi.innerText = newTask
    

    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'x'

    list.appendChild(newLi)
    newLi.appendChild(deleteButton)
    deleteButton.addEventListener('click', function(e){
      newLi.remove()
    })
    taskForm.reset()

  })

  const buttonParent = document.querySelector("#button-mommy")

  buttonParent.addEventListener('click', (event) => {
    const name =  event.target.dataset.name
     if (name === "alert"){
         alert("only alert")
     }
        else if (name === "log"){
          alert("only log")
        }
        else if (name === "error"){
          alert("only error");
        }

  })

});
