document.getElementsByClassName('btn')[0].onmouseenter = function() {mouseEnter()};
document.getElementsByClassName('btn')[0].onmouseleave = function() {mouseLeave()};

		function mouseEnter() {
        document.getElementsByClassName('btn')[0].style.background = 'rgb(26, 138, 212)';
}     
function mouseLeave() {
  document.getElementsByClassName('btn')[0].style.background = "rgb(47, 158, 53)";
}
