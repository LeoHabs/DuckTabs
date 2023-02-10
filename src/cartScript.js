const cartBtns = document.getElementsByClassName("shopping-cart");
const userInventory = document.getElementById("userInventoryList");
const inventoryBtn = document.getElementById("inventoryBtn");
let timeToExpire = 86400000;
let inventory = [];

inventoryBtn.addEventListener("click",()=>{
    generateInventory();
});

function generateInventory(){
    inventory = localStorageGetter("inventory");
    userInventory.innerHTML = "";
    const inventoryTitle = document.createElement("h3");
    inventoryTitle.innerHTML = "Your cart:"
    const newList = document.createElement("ul");
    for (let i = 0; i < inventory.length; i++) {
        const item = document.createElement("li");
        const imgOfItem = document.createElement("img");
        imgOfItem.src= inventory[i].imageSrc;
        const descSpan = document.createElement("span");
        const priceSpan = document.createElement("span");
        descSpan.innerHTML = inventory[i].nameOfItem;
        priceSpan.innerHTML = inventory[i].price;
        item.appendChild(imgOfItem);
        item.appendChild(descSpan);
        item.appendChild(priceSpan);
        newList.appendChild(item);
    }
    const buyBtn = document.createElement("button");
    buyBtn.innerHTML = "Buy";
    userInventory.appendChild(inventoryTitle);
    userInventory.appendChild(newList);
    userInventory.appendChild(buyBtn);
};

for (const button of cartBtns) {
    button.addEventListener("click",(e)=>{
        const buttonPressed = e.target.parentElement;
        const priceOfItem = buttonPressed.parentElement.childNodes[1].innerHTML;
        const imgOfItem = buttonPressed.parentElement.parentElement.childNodes[1].childNodes[0].src;
        const nameOfItem = buttonPressed.parentElement.parentElement.childNodes[1].childNodes[2].innerHTML;
        const item = new Item(imgOfItem,nameOfItem,priceOfItem);
        inventory.push(item);
        localStorageSetter("inventory",inventory);
    })
};

class StorageObject{
    constructor(payload,expireDate){
        this.payload = payload;
        this.expireDate = expireDate;
    }
};

class Item {
    constructor(imageSrc,nameOfItem,price){
        this.imageSrc = imageSrc;
        this.nameOfItem = nameOfItem;
        this.price = price;
    }
};





function localStorageSetter(id,obj){
    const date = Date.now() + timeToExpire;
    const stringifiedObj = JSON.stringify(new StorageObject(obj,date));
    localStorage.setItem(id,stringifiedObj);
};

function localStorageGetter(id){
    const objComing = JSON.parse(localStorage.getItem(id));
    const currentTime = Date.now();
    let objReturn = null;
    if(currentTime<objComing.expireDate){
        objReturn = objComing.payload;
    }
   return objReturn;
};

function localStorageRemover(id){
    localStorage.removeItem(id);
};




