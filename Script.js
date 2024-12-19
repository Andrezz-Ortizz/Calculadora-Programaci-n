// JavaScript source code

// FUNCI�N PARA AGREGAR N�MEROS Y OPERADORES AL DISPLAY
function agregar(valor) {
    document.getElementById("display").value += valor;
}

// FUNCI�N PARA LIMPIAR EL DISPLAY
function limpiar() {
    document.getElementById("display").value = '';
}

// FUNCI�N PARA BORRAR EL �LTIMO CAR�CTER
function borrarUltimo() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1); // Eliminar el �ltimo car�cter
}

// FUNCI�N PARA CALCULAR EL RESULTADO
function calcular() {
    let display = document.getElementById("display").value;

    // COMPROBAR SI ES UNA DIVISI�N
    if (display.indexOf("/") !== -1) {
        dividir(); // MANEJO ESPEC�FICO PARA DIVISIONES
    } else {
        try {
            let resultado = eval(display);
            document.getElementById("display").value = resultado;
        } catch (error) {
            alert("Error en la expresi�n");
        }
    }
}

// FUNCI�N PARA MANEJAR LA DIVISI�N
function dividir() {
    let display = document.getElementById("display").value;

    // SEPARAR LOS N�MEROS ANTES Y DESPU�S DEL OPERADOR "/"
    let valores = display.split("/");
    if (valores.length === 2) {
        let numero1 = Number(valores[0]);
        let numero2 = Number(valores[1]);

        if (numero2 === 0) {
            document.getElementById("display").value = ""; // LIMPIA EL DISPLAY
            alert("Error: No se puede dividir entre cero.");
        } else {
            let resultado = numero1 / numero2;

            // MUESTRA RESULTADO
            document.getElementById("display").value = resultado;
        }
    } else {
        alert("Por favor, introduce una operaci�n v�lida.");
    }
}