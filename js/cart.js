let card=document.getElementById("cartContainer");
let remove=document.getElementById("remove");

remove.addEventListener("click",()=>{
  card.innerHTML="";
  document.getElementById("price").innerHTML="0";
});
