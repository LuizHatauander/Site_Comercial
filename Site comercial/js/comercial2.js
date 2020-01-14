document.getElementsByClassName('kj')[2].onmouseenter = function() {mouseEnter()};
		document.getElementsByClassName('kj').onmouseleave = function() {mouseLeave()};

		function mouseEnter() {
        document.getElementsByClassName('kj')[2].style.background = 'red';
}     
function mouseLeave() {
  document.getElementsByClassName('kj').style.background = "red";
}