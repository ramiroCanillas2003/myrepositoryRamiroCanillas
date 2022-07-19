

/*alert ("¡Bienvenido/a a nuestra empresa! Por favor, a continuación ingrese lo solicitado:")
let nombreUsuario = prompt("Ingrese su nombre y apellido:")
let inicio = confirm( nombreUsuario + "Responda lo siguiente:  ¿Usted acepta términos y condiciones?")

let pedido 
let hora
let queja

let masQuejas

const precio = ["El total es de $20.000", "El total es de $30.000"]
const tiempo = ["Se demoraría aproximadamente 3 meses", "Se demoraría aproximadamente 4 meses"]
const otroAsunto = ["¡Esperamos solucionar su duda lo antes posible!"]


class TareasDiarias {

    constructor(cometido, hora, impedimento) {

        this.cometido = cometido;
        this.hora = hora;
        this.impedimento = impedimento;
    }
}

const posibleProblema = () => {
        switch (prioridad.impedimento) {

            case `1`: console.log(precio[0]);
                        precio.push(prioridad)
            break;
            case `2`: console.log(tiempo[1]);
                        tiempo.push(prioridad)
            break;
            case `3`: console.log(otroAsunto[2]);
                        otroAsunto.push(prioridad)

            break;
            default: console.log("No me interesa.");
            break;
        }
    }

const preguntaProblema = () => {
    
    planta = prompt(nombreUsuario + "¿De qué provincia nos visitas?")
    hora = confirm("¿Te interesa nuestros servicios?")
    queja = prompt("Ingresa \n 1 - Consulta sobre precios. \n 2 - Consulta sobre tiempos de entrega. \n 3 - Otro asunto")

    return prioridad = new TareasDiarias (pedido, hora, queja)
}

if (inicio == true) {
    preguntaProblema()
    posibleProblema()
    alert (`Excelente, ${nombreUsuario}.  Se informara sobre tu pedido solicitado cuanto antes.`)

    masQuejas= confirm("¿Queres ingresar otro asunto?")

    while (masQuejas == true) {
        preguntaProblema()
        posibleProblema()

        alert (`¡¡Agendado!! ${nombreUsuario}. Se agregó a tu lista de asuntos`)

        masQuejas= confirm("¿Queres ingresar otra asunto?")
    }

} else {
    alert("¡Veremos que hacemos con sus pedidos! ¡Buena suerte!")
}*/

/* DOM */

let titulo = document.getElementById("titulo")

titulo.innerText = "¡Gracias por visitarnos, esperamos que vuelvas pronto!"
console.log( titulo.innerText ) 

/* EVENTOs */ 

const button = document.querySelector("button");
button.onclick = function() {
    alert("¡Hola!");
}

/*function calcula(operacion){ 
    var operando1 = document.calc.operando1.value 
    var operando2 = document.calc.operando2.value 
    var result = eval(operando1 + operacion + operando2) 
    document.calc.resultado.value = result 
} */

function guardarDatos() {
    localStorage.nombre = document.getElementById("Nombre").value;
    localStorage.apellido = document.getElementById("provincia").value;
    localStorage.email = document.getElementById("Email").value;
    localStorage.mensaje = document.getElementById("Mensaje").value;
}

function recuperarDatos() {
    if ((localStorage.nombre != undefined) && (localStorage.provincia != undefined)) {
        document.getElementById("datos").innerHTML = "Nombre y Apellido: " + localStorage.nombre + " Provincia: " + localStorage.provincia;
    } else {
        document.getElementById("datos").innerHTML = "No has introducido tu nombrey apellido y tu provincia";
    }
}

/* CARRITO DE PRESUPUESTO*/ 


/* SWEET ALERT */ 

const btn = document.getElementById('myBtn')
btn.addEventListener('click', () => {

    Swal.fire({
        title: 'Genial!',
        text: 'Haz clickeado el botón!',
        icon: 'success',
        confirmButtonText: 'Cool'
})
})

/* LUXON */

const dt = DateTime.fromObject(
    { day: 22, hour: 12, month: 2 },
    { zone: 'America/Buenos_Aires', numberingSystem: 'beng' }
)

console.log( dt.toString() )
// 2022-02-22T12:00:00.000-03:00

/* TOASTIFY */ 

