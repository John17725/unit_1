let slider = document.querySelector(".slider-contenedor")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let pos = 1;
let pos2 = 6;
let width = sliderIndividual[0].clientWidth;
let btnDer = document.querySelector("#btn-der")
let btnIzq = document.querySelector("#btn-izq")
let div = document.querySelector("#content-btn-izq")
let vecespresionadobtnizq = 0;
window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})

btnIzq.addEventListener('click', function(){
	vecespresionadobtnizq++;
	if (vecespresionadobtnizq==1  ) {
		ToslidesDer1_2();
		pos = 6;
		pos2++;
	}if (vecespresionadobtnizq == 2) {
		ToslidesDer1_1();
		pos = 1;
		pos2 = 6;
		vecespresionadobtnizq=0;
	}
	console.log("POS:",pos)
	console.log("POS2:",pos2)
})

btnDer.addEventListener('click', function(){
	if (pos2 == 6) {
		mostrarbtnizq();
	}
	if (pos>=6 && pos2 <14) {
		ocultarbtnizq();
		slidesDer1_2();
		console.log(pos2)
		if (pos2 == 14) {
			mostrarbtnizq();
			vecespresionadobtnizq=0;

		}
	}

	if (pos<=5) {
		console.log(pos)
		slidesDer()
		if (pos>1 && pos<=5) {
			ocultarbtnizq();
		}

	}
})


function mostrarbtnizq(){
	div.style.display = 'block'

}
function ocultarbtnizq(){
	div.style.display = "none";
}

function slidesDer(){
	console.log("POS DESDE BTNDER:",pos)
    slider.style.transform = "translate("+(-width*pos)+"px)";
    slider.style.transition = "transform .8s";
    pos++;
}
function slidesDer1_2(){
    slider.style.transform = "translate("+(-width*pos2)+"px)";
    slider.style.transition = "transform .8s";
    pos2++;
}
function ToslidesDer1_2(){
    slider.style.transform = "translate("+(-width*6)+"px)";
    slider.style.transition = "transform .8s";
}
function ToslidesDer1_1(){
    slider.style.transform = "translate("+(-width*0)+"px)";
    slider.style.transition = "transform .8s";
}


