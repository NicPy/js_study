window.onload = function(e) {
	let blocks = document.querySelectorAll(".block");

	for(var i=0; i < 6; i++){
		debugger
		
		blocks[i].onclick = function(){
			this.classList.toggle("checked");
		}
	}	

	// block.innerHTML = 'test';
} 