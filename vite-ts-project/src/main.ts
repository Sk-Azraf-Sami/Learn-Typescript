import './css/style.css'
import FullList from './model/FullList'
import ListItem from './model/ListItem';
import ListTemplate from './template/ListTemplate';


const initApp = (): void => {
  //localStorage.setItem("myList", "");
  const fullList = FullList.instance; 
  const template = ListTemplate.instance;
  
  //  <form class="newItemEntry__form" id="itemEntryForm">
  // add new itrm form 
  const itemEntryForm = document.getElementById("itemEntryForm") as HTMLFormElement; 
  itemEntryForm.addEventListener("submit", (event: SubmitEvent): void => {
    event.preventDefault(); 
    // <input class="newItemEntry__input" id="newItem" type="text" maxlength="40" autocomplete="off"
    const input = document.getElementById("newItem") as HTMLInputElement; 
    const newEntryText: string = input.value.trim();
    console.log(newEntryText); 
    // if empty input 
    if(newEntryText.length === 0) return; 

    // generate ID 
    const itemId: number = fullList.list.length ? parseInt(fullList.list[fullList.list.length-1].id)+1 : 1;
    console.log('len: ' + fullList.list.length); 
    console.log(itemId); 

    const newItem = new ListItem(itemId.toString(), newEntryText);  // checked already has default 'false' value 
    console.log(newItem); 
    fullList.addItem(newItem); 
    template.render(fullList)
  })

  // <button id="clearItemsButton" class="button listTitle__button" title="Clear the list"
  const clearItems = document.getElementById("clearItemsButton") as HTMLButtonElement;
  clearItems.addEventListener('click', (): void => {
    fullList.clearList(); // clear itemList array 
    template.clear(); // clear all html elements 
  })

  fullList.load(); 
  template.render(fullList); 
}

document.addEventListener("DOMContentLoaded", initApp)