document.querySelectorAll (".zoom") .forEach(img => {
	img.addEventListener('click',function (){ 
		const lightbox = document.getElementById('lightbox');
		const lightboxImg = document.getElementById ('lightbox-Img');
		lightbox.style.display='block';
		lightboxImg.src = this.src;
	});
});

document.querySelector('.lightbox .close').addEventListener('click',function(){
	document.getElementById('lightbox').style.display = 'none';
});