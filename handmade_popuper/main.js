window.onload = function() {
	function Popupper(selector) {
		this.selector = document.querySelector("."+selector);
		this.body = document.querySelector("body");
		var that = this;
		this.selector.onclick = function() {
			that.body.innerHTML = ;
			// console.log("vasya");
		}
	}

	var pp = new Popupper("btn");
	// pp();
}