const deckTabBtn = document.getElementById("duckOnDeckBtn");
const showroomTabBtn = document.getElementById("duckShowroomBtn");
const storeTabBtn = document.getElementById("duckStoreBtn");
const deckDiv = document.getElementById("ducksOnDeck");
const showroomDiv = document.getElementById("duckShowRoom");
const storeDiv = document.getElementById("duckStore");

deckTabBtn.addEventListener("click",()=>{
    showroomTabBtn.style.backgroundColor = "white";
    storeTabBtn.style.backgroundColor = "white";
    deckTabBtn.style.backgroundColor = "#219ebc";
    deckTabBtn.style.color= "white";

    storeTabBtn.style.color = "black";
    showroomTabBtn.style.color="black";
    deckDiv.setAttribute("class","dOnDeck-selected");
    showroomDiv.setAttribute("class","dShowRoom-hidden");
    storeDiv.setAttribute("class","dStore-hidden");
});

showroomTabBtn.addEventListener("click",()=>{
    deckTabBtn.style.backgroundColor = "white";
    storeTabBtn.style.backgroundColor = "white";
    showroomTabBtn.style.backgroundColor = "#219ebc";
    showroomTabBtn.style.color="white";
    storeTabBtn.style.color = "black";
    deckTabBtn.style.color= "black";


    deckDiv.setAttribute("class","dOnDeck-hidden");
    showroomDiv.setAttribute("class","dShowRoom-selected");
    storeDiv.setAttribute("class","dStore-hidden");
});

storeTabBtn.addEventListener("click",()=>{
    deckTabBtn.style.backgroundColor = "white";
    showroomTabBtn.style.backgroundColor = "white";
    storeTabBtn.style.backgroundColor = "#219ebc";
    storeTabBtn.style.color = "white"
    deckTabBtn.style.color= "black";
    showroomTabBtn.style.color="black";
    deckDiv.setAttribute("class","dOnDeck-hidden");
    showroomDiv.setAttribute("class","dShowRoom-hidden");
    storeDiv.setAttribute("class","dStore-selected")

})