//get my elements
const createTask = $('.createTask');
const typeTask = $('input')[0];

//add the event listeners
createTask.click(createTodo);
//create all of my functions
function createTodo(){
    //create the task elements
    const wrapper = document.createElement('div');
    const todoText = document.createElement('li');
    const trashBtn = document.createElement('button');
    const completedBtn = document.createElement('button');
    if(typeTask.value !== ""){
        //give the elements values
        trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
        completedBtn.innerHTML = '<i class="fas fa-check"></i>';
        todoText.textContent = typeTask.value;
        //add the items to the wrapper
        wrapper.appendChild(todoText);

       //add icons
       wrapper.appendChild(completedBtn);
       wrapper.appendChild(trashBtn);
        $('.todoList')[0].appendChild(wrapper);
        $('.todoList')[0].appendChild(document.createElement('br'))
        //give the elements some classes to style them
        wrapper.classList.add('task');
        wrapper.classList.add('notCompleted')
        trashBtn.classList.add('trashBtn');
        completedBtn.classList.add('completedBtn');
        //clear the input text after hitting enter
        typeTask.value = '';
        //functionalities
            //delete task
            trashBtn.addEventListener('click',function(){
                $('ul')[0].removeChild(wrapper);
            })
            //mark task as completed
            completedBtn.addEventListener('click',function(){
                if(wrapper.classList[1] === 'notCompleted'){
                    wrapper.classList.remove('notCompleted')
                    wrapper.classList.add('completed')
                }else{
                    wrapper.classList.remove('completed')
                    wrapper.classList.add('notCompleted')
                }
            })
    }
    
    
}
//make  the form not reload
$('form').submit(function(e){
    e.preventDefault();
})