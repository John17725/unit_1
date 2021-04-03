

addEventListener('DOMContentLoaded',()=>{

	const arr_img = ['img/img_01.jpg','img/img_02.jpg','img/img_03.jpg','img/img_04.jpg','img/img_05.jpg','img/img_06.jpg','img/img_07.jpg','img/img_08.jpg','img/img_09.jpg','img/img_10.jpg','img/img_11.jpg'];
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
		},30)
	}

	setInterval(slideshow, 3000)

})