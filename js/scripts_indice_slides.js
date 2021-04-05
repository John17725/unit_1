let slider = document.querySelector(".slider-contenedor")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let pos = 1;
let width = sliderIndividual[0].clientWidth;
let btnDer = document.querySelector("#btn-der")



window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})


btnDer.addEventListener('click', function(){
	if (pos==7) {
		alert("Has llegado al final")
		slider.style.transform = "translate("+(-width*0)+"px)";
		slider.style.transition = "transform .8s";
		pos = 0
	}if (pos<7) {
		console.log(pos)
		slidesDer()

	}
})



function slidesDer(){
    slider.style.transform = "translate("+(-width*pos)+"px)";
    slider.style.transition = "transform .8s";
    pos++;
}

