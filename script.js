//Saludar Cliente
//Clases-Cursos Disponibles
//En Base al Curso seleccionado - Calculo de Precio
//Informar Cliente sobre curso que esta eligiendo y el monto a pagar.
//Cobrar


const saludo = () => {
    alert("Bienvenido a la Academia de Arqueria - CBA")
}

const cursosDisponibles = () => {
    let CursoID

    do{
        CursoID = parseInt(        
            prompt("Elija cantidad de clases semanales\n1) 4 veces por semana \n2) 2 veces por semana \n3) 1 vez por semana")
            )
    }while(CursoID < 1 || CursoID > 3 || isNaN(CursoID))

    let CursoName

    switch (CursoID) {
        case 1:
            CursoName = "4 dias x Semana"
            break;
        case 2:
            CursoName = "2 dias x Semana"
            break;
        case 3:
            CursoName = "1 dia x Semana"
            break;
    }

    return CursoName

}

const calcularPrecio = (CursoName) => {
    if(CursoName === "4 dias x Semana"){
        return 2500
    }else if(CursoName === "2 dias x Semana"){
        return 1600
    }else {
        return 1200
    }
        
}

const informarCurso = (CursoName,precioCurso) => {
    let texto = `Curso : ${CursoName}\n Monto a Pagar : ${precioCurso}`
    alert("Usted Selecciono")
    alert(texto)
}


saludo()
let CursoName = cursosDisponibles()
let precioCurso = calcularPrecio(CursoName)
informarCurso(CursoName,precioCurso)



