const cartModalCloseBtn = document.getElementById("cartModalCloseBtn");
const cartModalDiv = document.getElementById("addCartModal");
const pageOverlay = document.getElementById("overlay");
const shoppingCarts = document.getElementsByClassName("shopping-cart");
const inventoryCloseBtn = document.getElementById("inventoryModalCloseBtn");
const inventoryDiv = document.getElementById("userInventory");
const inventoryOpenBtn = document.getElementById("inventoryBtn");

cartModalCloseBtn.addEventListener("click",()=>{
    cartModalDiv.setAttribute("class","cartModal-hidden");
    pageOverlay.setAttribute("class","overlay-hidden");
});

window.addEventListener("load",()=>{
    for (const button of shoppingCarts) {
        button.addEventListener("click",()=>{
            cartModalDiv.setAttribute("class","cartModal-selected");
            pageOverlay.setAttribute("class","overlay-selected");
        });
    }
});

inventoryCloseBtn.addEventListener("click",()=>{
    inventoryDiv.setAttribute("class","inventoryModal-hidden");
    pageOverlay.setAttribute("class","overlay-hidden");
});

inventoryOpenBtn.addEventListener("click",()=>{
    inventoryDiv.setAttribute("class","inventoryModal-selected");
    pageOverlay.setAttribute("class","overlay-selected");
});


