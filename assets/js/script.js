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

//paso 1: Almacenar los valores de la tarjeta en un array
let arrayTC= Array.from(numeroTC);
let arrayInverso= arrayTC.reverse; //orden inverso

//paso 2: Multiplicar por 2 las ubicaciones pares del numero de la tarjeta
let digitoPar=-1;
for(let i=1; i <= arrayInverso.length; i+=2){
    digitoPar=parseInt(arrayInverso[i]);
    digitoPar*=2;
    if (digitoPar>=10){
        digitoPar= toString();
        digitoPar= parseInt(digitoPar[0])+ parseInt(digitoPar[1]);
    }
    arrayInverso[i]=digitoPar.toString();
}

//Paso 3: Sumar los digitos de la tarjeta
let suma=0;
for(let j=0; j<arrayInverso.length;j++){
    if(typeof(arrayInverso[j])=="string"){
        suma+=parseInt(arrayInverso[j]);//parseInt nos ayuda a convertir un string en entero
    }else{
        suma+=arrayInverso[j];//suma=suma+arrayInverso
    }
}
//Paso 4:
    if (suma%10==0){
         alerta.innerHTML="Tarjeta válida";
         alerta.className="alerta-valida";
         return true;
    }else{
        alerta.innerHTML="tarjeta inválida";
        alerta.className="alerta-error";
        return false;
    }
}

function enmascarar(){
    let numero=document.getElementById("numero-tarjeta");
    let numeroTC=numero.value;
    let cantidadNumeros=numeroTC.length;
    if(cantidadNumeros>4){
        let digitosAEnmascarar=cantidadNumeros-4;
        for(let i=0; i<digitosAEnmascarar;i++){
            numeroTC=numeroTC.replace(numeroTC[i],"*");
        }
    }
    document.getElementById("svgnumber").innerHTML=numeroTC
}

document.getElementById("btn-validar").addEventListener("click",function(){
    let valida=validarTarjeta();
    if (valida==true){
        enmascarar();
         this.hidden=true;
    }
})