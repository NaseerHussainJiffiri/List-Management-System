// Get input field, button and list element
let $mainInput = document.getElementById("main-input");
let $mainButton = document.getElementById("main-button");
let $mainList = document.getElementById("main-list");
let kitchenList = [];

// function to get input from text input and add new list item to main List
function addItem(){
    //get input value form text field
    let inputText = $mainInput.value;

    //add item to kitchen list array
    kitchenList.push(inputText);

    console.log(kitchenList);
    //create new list element with content as input value
    let newLi = document.createElement('li');
    newLi.innerText = inputText;
    //add animation to list item by set animation name
    newLi.style.cssText = "animation-name: slideIn;";

    //create trash icon and append to list
    let trashIcon = document.createElement('i');
    trashIcon.classList.add("fa", "fa-trash");
    newLi.appendChild(trashIcon);

    //create Edit button
    let editButton = document.createElement('i');
    editButton.classList.add("fa", "fa-edit");
    newLi.appendChild(editButton);

    //append list to main list
    $mainList.appendChild(newLi);

    //clear input field and make focused
    $mainInput.focus();
    $mainInput.value = "";
}

//add an event listner to button to listen click event and execute addItem function
$mainButton.addEventListener('click', addItem);

//add item if press enter in input field
$mainInput.addEventListener('keydown', function(event){
    //check pressed key is Enter key
    if(event.key === 'Enter'){

        //prevent default event behaviour
        event.preventDefault();

        //activate main button click evetn
        $mainButton.click();
    }
});

// function for delete items
function editOrDeleteItem(event){
    //check if click on icon by class name
    if(event.target.classList[1] === "fa-trash"){
        //Declare parent li elemtn of selected button
        let item = event.target.parentElement;
        //add slideout class to list for animation
        item.classList.add('slideOut');
        //add an event listener to check transition end and remove item
        item.addEventListener("transitionend",() => {
            item.remove();
        });
    }
    //check if click on icon by class name
    if(event.target.classList[1] === "fa-edit"){
        //Declare parent li elemtn of selected button
        let item = event.target.parentElement;
        //add slideout class to list for animation

        let valueForEdit = item.innerText;

        item.innerText = prompt("Edit", valueForEdit);
        
    }
    
    
}

//add a click event listener to ul for del
$mainList.addEventListener('click',editOrDeleteItem);
