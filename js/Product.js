let addTocard=document.getElementById("addToCard");
let card=document.getElementById("card");
let value=0;

addTocard.addEventListener("click",()=>{
    value=value+1;
    card.innerHTML=`${value}`;
           
});

