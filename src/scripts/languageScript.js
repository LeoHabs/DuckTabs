let currentlanguage="";
const languageSelector = document.getElementById("languageSelector");
const portugueseVersion = ["Duck","PatosNoDeck","GaleriaDosPatos","LojaPato","Artigo adicionado ao carrinho"];
const englishVersion = ["Duck","DucksOnDeck","DuckShowroom","DuckStore","Item added to cart"];
const koreanVersion = ["오리","덕스온데크","오리쇼룸","오리 스토어","장바구니에 항목 추가됨"];
const itemsToTranslate = document.getElementsByClassName("variableLang");


window.addEventListener("load",()=>{
    const languageLoaded = localStorage.getItem("lang");
    languageSelector.value = languageLoaded;
    if(languageLoaded === "eng"){
        currentlanguage = englishVersion;
    }else if (languageLoaded === "pt"){
        currentlanguage = portugueseVersion;
    }else{
        currentlanguage = koreanVersion;
    }  
    for (let i = 0; i < itemsToTranslate.length; i++) {
        itemsToTranslate[i].innerHTML = currentlanguage[i];
    }
});

function identLanguage(){
    const languageSelected = languageSelector.value;
    localStorage.setItem("lang",languageSelected);
    if(languageSelected === "eng"){
        currentlanguage = englishVersion;
    }else if (languageSelected === "pt"){
        currentlanguage = portugueseVersion;
    }else{
        currentlanguage = koreanVersion;
    }   
}

languageSelector.addEventListener("change",()=>{
    identLanguage();
    for (let i = 0; i < itemsToTranslate.length; i++) {
        itemsToTranslate[i].innerHTML = currentlanguage[i];
    }
})

