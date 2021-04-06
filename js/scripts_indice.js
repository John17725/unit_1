
addEventListener('DOMContentLoaded',()=>{

	const arr_img = ['img/img_12.jpg','img/img_13.jpg','img/img_14.jpg','img/img_15.jpg','img/img_16.jpg','img/img_17.jpg'];
	const arr_img2 = ['img/img_desafio_1.jpg','img/img_desafio_2.jpg'];
	const arr_img3 = ['img/img_geo_1.jpg','img/img_geo_2.jpg','img/img_geo_3.jpg'];
	const arr_img4 = ['img/img_concurrencia_1.png','img/img_concurrencia_2.jpg','img/img_concurrencia_3.jpg'];
	const arr_img5 = ['img/img_17.jpg','img/img_12.jpg','img/img_15.jpg','img/img_16.jpg'];
	const arr_img6 = ['img/img_middleware_01.png','img/img_middleware_02.png','img/img_middleware_03.jpg'];
	let i = 1
	let j = 1
	let k = 1
	let l = 1
	let o = 1
	let u = 1;
	const img1 = document.querySelector('#img1')
	const img2 = document.querySelector('#img2')
	const img3 = document.querySelector('#img3')
	const img4 = document.querySelector('#img4')
	const img5 = document.querySelector('#img5')
	const img6 = document.querySelector('#img6')
	const img7 = document.querySelector('#img7')
	const img8 = document.querySelector('#img8')
	const img9 = document.querySelector('#img9')
	const img10 = document.querySelector('#img10')
	const img11 = document.querySelector('#img11')
	const img12 = document.querySelector('#img12')

	

	img1.src = arr_img[0]
	img3.src = arr_img2[0]
	img5.src = arr_img3[0]
	img7.src = arr_img4[0]
	img9.src = arr_img5[0]
	img11.src = arr_img6[0]


	const slideshow = () => {
		img2.src = arr_img[i]
		img2.classList.add('active')
		i++
		if (i == arr_img.length) {
			i = 0
		}
		setTimeout(() => {
			img1.src = img2.scr
			img2.classList.remove('active')
		},0)
	}
	const slideshow2 = () => {
		img4.src = arr_img2[j]
		img4.classList.add('active')
		j++
		if (j == arr_img2.length) {
			j = 0
		}
		setTimeout(() => {
			img3.src = img4.scr
			img4.classList.remove('active')
		},0)
	}
	const slideshow3 = () => {
		img6.src = arr_img3[k]
		img6.classList.add('active')
		k++
		if (k == arr_img3.length) {
			k = 0
		}
		setTimeout(() => {
			img5.src = img6.scr
			img6.classList.remove('active')
		},0)
	}
	const slideshow4 = () => {
		img8.src = arr_img4[l]
		img8.classList.add('active')
		l++
		if (l == arr_img4.length) {
			l = 0
		}
		setTimeout(() => {
			img7.src = img8.scr
			img8.classList.remove('active')
		},0)
	}
	const slideshow5 = () => {
		img10.src = arr_img5[o]
		img10.classList.add('active')
		o++
		if (o == arr_img5.length) {
			o = 0
		}
		setTimeout(() => {
			img9.src = img10.scr
			img10.classList.remove('active')
		},0)
	}
	const slideshow6 = () => {
		img12.src = arr_img6[u]
		img12.classList.add('active')
		u++
		if (u == arr_img5.length) {
			u = 0
		}
		setTimeout(() => {
			img11.src = img12.scr
			img12.classList.remove('active')
		},0)
	}
	setInterval(slideshow, 4000)
	setInterval(slideshow2, 4000)
	setInterval(slideshow3, 4000)
	setInterval(slideshow4, 4000)
	setInterval(slideshow5, 4000)
	setInterval(slideshow6, 4000)
})


