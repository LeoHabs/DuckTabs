let currentlanguage="";
const languageSelector = document.getElementById("languageSelector");
const portugueseVersion = ["PatosNoDeck","GaleriaDosPatos","LojaPato","Artigo adicionado ao carrinho"];
const englishVersion = ["DucksOnDeck","DuckShowroom","DuckStore","Item added to cart"];
const koreanVersion = ["덕스온데크","오리쇼룸","오리 스토어","장바구니에 항목 추가됨"];
const itemsToTranslate = document.getElementsByClassName("variableLang");


function identLanguage(){
    const languageSelected = languageSelector.value;
    if(languageSelected === "eng"){
        currentlanguage = englishVersion;
    }else if (languageSelected === "pt"){
        currentlanguage = portugueseVersion;
    }else{
        currentlanguage = koreanVersion;
    }   
    console.log(currentlanguage);  
}

languageSelector.addEventListener("change",()=>{
    identLanguage();
    for (let i = 0; i < itemsToTranslate.length; i++) {
        itemsToTranslate[i].innerHTML = currentlanguage[i];
    }
})

