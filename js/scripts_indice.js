

addEventListener('DOMContentLoaded',()=>{

	const arr_img = ['img/img_12.jpg','img/img_13.jpg','img/img_14.jpg','img/img_15.jpg','img/img_16.jpg','img/img_17.jpg'];
	const arr_img2 = ['img/img_01.jpg','img/img_02.jpg','img/img_14.jpg','img/img_15.jpg','img/img_16.jpg','img/img_17.jpg'];
	let i = 1
	let j = 1
	const img1 = document.querySelector('#img1')
	const img2 = document.querySelector('#img2')
	const img3 = document.querySelector('#img3')
	const img4 = document.querySelector('#img4')

	

	img1.src = arr_img[0]
	img3.src = arr_img2[0]

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
		img4.src = arr_img[i]
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

	setInterval(slideshow, 4000)
	setInterval(slideshow2, 4000)

})