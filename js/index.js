const txtnombre=document.querySelector("#txtnombre");
const respondernombre=document.querySelector("#respondernombre");
const txtgenero=document.querySelector("#txtgenero");

txtnombre.addEventListener("input", (event)=>{
    const sunombre=event.target.value;
    respondernombre.innerHTML="<p> Hola, como estas <span>"+sunombre+ "</span> un gusto conocerte</p>"

    const genero=txtgenero.value;

    respondernombre.style.display="block";
    if(genero=='MASCULINO'){
        respondernombre.innerHTML="<p> Hola, Como estas Sr. <span>"+sunombre+ "</span> un gusto conocerte</p>"
    }
    else{
        respondernombre.innerHTML="<p> Hola, Como estas Srta. <span>"+sunombre+ "</span> un gusto conocerte</p>"
    }

    txtgenero.addEventListener('click',()=>{
        txtnombre.value="";
        respondernombre.style.display="none";

    })
})