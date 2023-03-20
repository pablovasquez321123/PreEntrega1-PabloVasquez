alert ("Te damos la bienvenida al juego adivina y gana!")

alert ("En este juego deberas adivinar el valor de una Xbox series X o al menos estar lo mas cerca posible para ganarlo")

let edadUsuario = Number (prompt ("Solo puedes jugar si eres mayor de edad. \n Por favor ingrese su edad."))

if ((edadUsuario >= 18) && (edadUsuario <100)) {
    alert ("Comencemos con el juego!!!")

let valor1 = 80000
let valor2 = 110000
let valor3 = 150000
let valor4 = 180000
let valor5 = 200000
do {
    let valores = Number(prompt("Seleccione el valor que usted cree que cuesta la Xbox series X: \n 1 "+valor1+"\n 2 "+valor2+"\n 3 "+valor3+"\n 4 "+valor4+"\n 5 "+valor5))
    switch (valores) {
        case 1:
            alert("Has seleccionado el valor de "+valor1+".")
            if(confirm("Estas seguro?")){
                alert ("Fallaste")
                break;
            }else{
                break;
            } 
        case 2:
            alert("has seleccionado el valor de "+valor2+".")
            if(confirm("Estas seguro?")){
                alert ("Fallaste")
                break;
            }else{
                break;
            } 
        case 3:
            alert("has seleccionado el valor de "+valor3+".")
            if(confirm("Estas seguro?")){
                alert ("Fallaste")
                break;
            }else{
                break;
            } 
        case 4:
            alert("has seleccionado el valor de "+valor4+".")
            if(confirm("Estas seguro?")){
                alert ("Fallaste")
                break;
            }else{
                break;
            } 
        case 5:
            alert("has seleccionado el valor de "+valor5+".")
            if(confirm("Estas seguro?")){
                alert ("Felicidades has ganado la Xbox series X")
                break;
            }else{
                break;
            } 
        default:
            alert("Solo debes seleccionar uno de los 5 valores")
            break;
    }
} while (confirm("Quieres volver a intentalo?"));
} else {
    alert ("Lamentablemente no puedes ingresar al juego. hasta luego!")
}

