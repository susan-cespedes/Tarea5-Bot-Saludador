const txtnombre=document.querySelector("#txtnombre");
const respondernombre=document.querySelector("#respondernombre");
const txtgenero=document.querySelector("#txtgenero");
const txtedad=document.querySelector("#txtedad");
let horaActual = new Date().getHours();

txtnombre.addEventListener("keyup", (event)=>{
    const sunombre=event.target.value;
    const genero=txtgenero.value;
    const edad=parseInt(txtedad.value);

    respondernombre.style.display="block";

    if(!isNaN(edad)){

        let saludo ="";
        if(horaActual >=1 && horaActual<12){
            saludo="Buenos Dias";
           }
        else if(horaActual>=12 && horaActual<18){
            saludo="Buenas Tardes";
        }
        else{
            saludo="Buenas noches";
        }


        if(edad>30)
        {
            if(genero ==='MASCULINO'){
                respondernombre.innerHTML="<p> Hola, "+saludo+" Como estas Sr. <span>"+sunombre+ "</span> un gusto conocerte</p>"
            }
            else{
                respondernombre.innerHTML="<p> Hola, "+saludo+" Como estas Sra. <span>"+sunombre+ "</span> un gusto conocerte</p>"
            }
        }
        else{
            if(genero ==='MASCULINO'){
                respondernombre.innerHTML="<p> Hola, "+saludo+" Como estas Joven. <span>"+sunombre+ "</span> un gusto conocerte</p>"
            }
            else{
                respondernombre.innerHTML="<p> Hola, "+saludo+" Como estas Srta. <span>"+sunombre+ "</span> un gusto conocerte</p>"
            }
        }


    }

    txtgenero.addEventListener('click',()=>{
        txtnombre.value="";
        respondernombre.style.display="none";

    });
})