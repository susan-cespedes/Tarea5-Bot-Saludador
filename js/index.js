const txtnombre=document.querySelector("#txtnombre");
const respondernombre=document.querySelector("#respondernombre");
const txtgenero=document.querySelector("#txtgenero");
const txtedad=document.querySelector("#txtedad");

txtnombre.addEventListener("keyup", (event)=>{
    const sunombre=event.target.value;
    const genero=txtgenero.value;
    const edad=parseInt(txtedad.value);

    respondernombre.style.display="block";

    if(!isNaN(edad)){
        if(edad>30)
        {
            if(genero ==='MASCULINO'){
                respondernombre.innerHTML="<p> Hola, Como estas Sr. <span>"+sunombre+ "</span> un gusto conocerte</p>"
            }
            else{
                respondernombre.innerHTML="<p> Hola, Como estas Sra. <span>"+sunombre+ "</span> un gusto conocerte</p>"
            }
        }
        else{
            if(genero ==='MASCULINO'){
                respondernombre.innerHTML="<p> Hola, Como estas Joven. <span>"+sunombre+ "</span> un gusto conocerte</p>"
            }
            else{
                respondernombre.innerHTML="<p> Hola, Como estas Srta. <span>"+sunombre+ "</span> un gusto conocerte</p>"
            }
        }


    }

    txtgenero.addEventListener('click',()=>{
        txtnombre.value="";
        respondernombre.style.display="none";

    });
})