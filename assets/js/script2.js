function validarTarjeta(){
    let alerta=document.getElementById("alerta");
    alerta.innerHTML="";
    alerta.className="";
    let numero=document.getElementById("numero-tarjeta");
    let numeroTC=numero.value;
    if(numeroTC.length==0){
        alerta.innerHTML="Tarjeta inválida";
        alerta.className="alerta-error";
        return false; //devolver el control al sistema o finalizar la validación
    }

//Paso 1 almacenar los numeros de la tarjeta en un array y lo pondremos en orden inverso
let arrayTC = Array.from(numeroTC);//se convierte en tipo String
let arrayInverso = arrayTC.reverse(); //orden inverso
//Paso 2 multiplicar por 2 las ubicaciones pares del numero de la tarjeta
let digitoPar=-1;
for (let i=1; i <= arrayInverso.length;i+=2){
    digitoPar=parseInt(arrayInverso[i]);
    digitoPar*=2;
    if (digitoPar>=10){
        digitoPar= digitoPar.toString(); //convetimos a string
        digitoPar= parseInt(digitoPar[0])+ parseInt(digitoPar[1]); //suma de digitos
    }
    arrayInverso[i]=digitoPar.toString();
}
//Paso 3 sumar todos los digitos de la tarjeta
let suma=0;
for(let j=0; j<arrayInverso.length;j++){
   if(typeof arrayInverso[j] =="string"){
    suma+=parseInt(arrayInverso[j]);// suma=suma+parseInt(arrayInverso[j])
    //parseInt nos ayuda a convertir un string en un numero entero
   }else{
    suma+=arrayInverso[j];   // suma=suma+arrayInverso[j]

   }
}
//Paso 4 verificar si es divisible entre 10
    if  (suma%10==0){
        alerta.innerHTML="Tarjeta válida";
        alerta.className="alerta-valida";
        return true;
    }else{
        alerta.innerHTML="Tarjeta inválida";
        alerta.className="alerta-error";
        return false;
    }
}

function enmascarar() {
    let numero=document.getElementById("numero-tarjeta");
    let numeroTC=numero.value;
    //obtener la cantidad de numeros de la tarjeta
    let cantidadNumeros = numeroTC.length;
    console.log(cantidadNumeros) 
    if(cantidadNumeros>4){
        let digitosAEnmascarar=cantidadNumeros - 4;
        for(let i=0; i < digitosAEnmascarar;i++){
            numeroTC = numeroTC.replace(numeroTC[i], "*");
        }
    }
    document.getElementById("svgnumber").innerHTML=numeroTC;
}

document.getElementById("btn-validar").addEventListener("click",function(){
    let valida= validarTarjeta();
    if (valida==true){
        enmascarar();
        document.getElementById("numero-tarjeta").value = "";
        this.hidden=true;//se oculta el boton
    }
})