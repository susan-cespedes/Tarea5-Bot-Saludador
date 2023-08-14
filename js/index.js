const txtnombre=document.querySelector("#txtnombre");
const respondernombre=document.querySelector("#respondernombre");
const txtgenero=document.querySelector("#txtgenero");
const txtgeneroIng=document.querySelector("#txtgeneroIng");
const txtedad=document.querySelector("#txtedad");
const txtedading=document.querySelector("#txtedading");
const contenidoEs=document.querySelector("#contenidoespañol");
const contenidoEn=document.querySelector("#contenidoEnglish");
const txtidioma=document.querySelector("#txtidioma");

let horaActual = new Date().getHours();
contenidoEs.style.display="none";
contenidoEn.style.display="none";

txtidioma.addEventListener("click",(event)=>{
    const idioma=txtidioma.value;
    if(idioma ==="es")
    {
    contenidoEs.style.display="block";
    contenidoEn.style.display="none";

      //el evento donde mostramos los datos en español
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
                    respondernombre.innerHTML="<p> Hola, "+saludo+" Como estas Sr. <span>"+sunombre+"</span> un gusto conocerte</p>"
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

        })

    })

    }

    else if (idioma ==="en")
    {
        const txtname=document.querySelector("#txtname");
        contenidoEn.style.display="block";
        contenidoEs.style.display="none";
        respondernombre.style.display="none";
        //el evento donde mostramos los datos en Ingles

        txtname.addEventListener("keyup", (event)=>{
            const sunombre=event.target.value;
            const generoing=txtgeneroIng.value;
            const edading=parseInt(txtedading.value);

            respondernombre.style.display="block";

            if(!isNaN(edading)){
                let saludo ="";
                if(horaActual >=1 && horaActual<12){
                    saludo="Good morning";
                   }
                else if(horaActual>=12 && horaActual<18){
                    saludo="Good afternoon";
                }
                else{
                    saludo="Good night";
                }

                if(edading>30)
                {
                    if(generoing ==='MALE'){
                        respondernombre.innerHTML="<p> Hello, "+saludo+" How are you Mr. <span>"+sunombre+"</span> nice to meet you</p>"
                    }
                    else{
                        respondernombre.innerHTML="<p> Hello, "+saludo+" How are you Mrs. <span>"+sunombre+ "</span> nice to meet you</p>"
                    }
                }
                else{
                    if(generoing ==='MALE'){
                        respondernombre.innerHTML="<p> Hello, "+saludo+" How are you Young. <span>"+sunombre+ "</span> nice to meet you</p>"
                    }
                    else{
                        respondernombre.innerHTML="<p> Hello, "+saludo+" How are you Miss. <span>"+sunombre+ "</span> nice to meet you</p>"
                    }
                }


            }

            txtgeneroIng.addEventListener('click',()=>{
            txtname.value="";
            respondernombre.style.display="none";

            });
});
}
})