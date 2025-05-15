import type FullList from "../model/FullList";

interface DomList {
    ul: HTMLUListElement, 
    clear(): void, 
    render(fullList: FullList): void
}

export default class ListTemplate implements DomList{
    ul: HTMLUListElement 

    // make this class as singleton 
    static instance: ListTemplate = new ListTemplate(); 

    private constructor(){
        this.ul = document.getElementById("listItems") as HTMLUListElement; 
    }

    clear(): void {
        this.ul.innerHTML = ''
    }

    render(fullList: FullList): void {
        this.clear(); 
        fullList.list.forEach(item => {
            const li = document.createElement("li") as HTMLLIElement; 
            li.className = "item"; // set classname of each list item 

            /*************** <input type="checkbox" id="1"> *******************/
            const check = document.createElement("input") as HTMLInputElement; 
            check.type = "checkbox"; 
            check.id = item.id; 
            check.checked = item.checked; 
            li.append(check); 

            check.addEventListener('change', ()=>{
                item.checked =  !item.checked; 
                fullList.save(); 
            })

            /******************** <label for="1">eat</label> ******************/
            const label = document.createElement("label") as HTMLLabelElement; 
            label.htmlFor = item.id; 
            label.textContent = item.item;
            console.log(item.item); 
            li.append(label); 

            /******************** <button class="button">X</button> ******************/
            const button = document.createElement("button") as HTMLButtonElement; 
            button.className = "button"; 
            button.textContent = "X"; 
            li.append(button); 

            button.addEventListener('click', ()=>{
                fullList.removeItem(item.id); 
                this.render(fullList); 
            })

            this.ul.append(li); 
        })
        console.log(fullList.list); 
    }
}