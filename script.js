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

    //append list to main list
    $mainList.appendChild(newLi);

    //clear input field and make focused
    $mainInput.focus();
    $mainInput.value = "";
}

//add an event listner to button to listen click event and execute addItem function
$mainButton.addEventListener('click', addItem);

//add an event listener to input field to listen keydown event and execute a fuction to check is it enter key then execute click event of main button
$mainInput.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        event.preventDefault();
        $mainButton.click();
    }
});

// function for delete items
function deleteItem(event){
    console.log(event.target.classList[1]);
    if(event.target.classList[1] === "fa-trash"){
        let item = event.target.parentElement;
        item.classList.add('slideOut');
        item.addEventListener("transitionend",() =>{
            item.remove();
        });
    }
}

$mainList.addEventListener('click',deleteItem);