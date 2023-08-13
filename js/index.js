const txtnombre=document.querySelector("#txtnombre");
const respondernombre=document.querySelector("#respondernombre");

txtnombre.addEventListener("input", (event)=>{
    const sunombre=event.target.value;
    respondernombre.innerHTML="<p> Hola, como estas <span>"+sunombre+ "</span> un gusto conocerte</p>"
})