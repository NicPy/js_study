window.onload = function() {
	function Slider(selector) {
		this.imgs = document.querySelectorAll(".image");
		this.container = document.querySelector("."+selector);
		this.container.classList.add("handmade-slider");  
		this.imgs[0].classList.add("current");
		var img_count = this.imgs.length;
		var this_slider = this;
		function goright() {
				// console.log("this_slider");
			for(var i=0; i<img_count; i++) {
				if(this_slider.imgs[img_count-1].classList.contains("current")) {
					this_slider.imgs[img_count-1].classList.remove("current");
					this_slider.imgs[0].classList.add("current");
				}else if(this_slider.imgs[i].classList.contains("current")) {
					this_slider.imgs[i].classList.remove("current");
					this_slider.imgs[i+1].classList.add("current");
					break;
			}
			}
			} 
			document.querySelector(".btn").onclick = goright;
	}
		// this.container.onclick = goright;
		// // this.next = document.querySelector(".next");
		// this.next.onclick = function() {

		// }
		// for(var i; i<this.images.length; i++) {

		// }	
	// }

	var slider = new Slider("images");
	// slider.goright();
	// slider();
} 