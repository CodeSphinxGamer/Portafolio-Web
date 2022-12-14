function responsiveMenu() {
    var x = document.getElementById("nav")
    if (x.className==="") {
        x.className ="responsive"
    }
    else {
        x.className="";
    }
}
//DESAPARECER MENU al seleccionarse



//funcion aplicar style a opcion seleccionada en el menu

function seleccionada(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className ="";
    opciones[1].className ="";
    opciones[2].className ="";
    opciones[3].className ="";
    opciones[4].className ="";
    link.className = "seleccionado";

    var x = document.getElementById("nav");
    x.className = "";
}

//detecto el scrolling animacion habi

window.onscroll = function () {
    efectoHabilidades()
    
}

// funcion aplicar animacion en habi

function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("html").classList.add("barra-progreso2");
        document.getElementById("html").classList.add("barra-progreso3");
        document.getElementById("html").classList.add("barra-progreso4");

        
    }
    
}

