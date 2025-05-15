import ListItem, { type Item } from "./ListItem";

interface List{
    list: ListItem[], // ListItem class type arrays 
    load(): void, 
    save(): void, 
    clearList(): void, 
    addItem(itemObj: ListItem): void, 
    removeItem(id: string): void 
}

export default class FullList implements List{

    // to make it singleton 
    // private modifier is used for this constructor 
    private constructor(
        private _list: ListItem[] = [], // empty array 
    ){}

    // full program will have only one instance 
    static instance: FullList = new FullList(); 

    // get full list 
    get list(): ListItem[]{
        return this._list; 
    }

    // save list to local storage 
    save(): void{
        localStorage.setItem("myList", JSON.stringify(this._list)); 
    }

    // clear all items 
    clearList(): void{
        this._list = []; 
        this.save(); 
    }

    // add item 
    addItem(itemObj: ListItem): void {
        this._list.push(itemObj); 
        this.save(); 
    }

    // remove specific list 
    removeItem(id: string): void {
        this._list = this._list.filter(item => item.id !== id); 
        this.save(); 
    }

    load(): void {
        const storedList: string | null = localStorage.getItem("myList"); 
        if(typeof storedList !== "string") return; 

        const parsedList: {_id: string, _item: string, _checked: boolean}[] = JSON.parse(storedList);
        
        this._list = parsedList.map(itemObj => new ListItem(itemObj._id, itemObj._item, itemObj._checked));


        // parsedList.forEach(itemObj => {
        //     const newListItem = new ListItem(itemObj._id, itemObj._item, itemObj._checked);
        //     FullList.instance.addItem(newListItem) 
        // })
    }
}