

addEventListener('DOMContentLoaded',()=>{

	const arr_img = ['img/img_12.jpg','img/img_13.jpg','img/img_14.jpg','img/img_15.jpg','img/img_16.jpg','img/img_17.jpg'];
	let i = 1
	const img1 = document.querySelector('#img1')
	const img2 = document.querySelector('#img2')

	

	img1.src = arr_img[0]

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
		},1)
	}

	setInterval(slideshow, 4000)

})