function addToList(list, item){
    // let listElement=document.createElement("li");
    let element=document.createElement("p");

    console.log(item.value);

    element.textContent=item.value;

    // listElement.appendChild(element);
    
    list.appendChild(element);

    item.value="";
}

function removeLast(list){
    let lastP = list.querySelector("p:last-child");
    list.removeChild(lastP);
}