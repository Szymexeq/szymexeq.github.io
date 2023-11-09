function funfun(cos) {
	document.querySelector('.trojkat').style.borderBottom = `200px solid ${cos}`
}
function flower() {
	if (document.querySelector('.platek1').style.opacity == 100) {
		document.querySelector('.platek1').style.opacity = 0
		document.querySelector('.platek2').style.opacity = 0
		document.querySelector('.platek3').style.opacity = 0
		document.querySelector('.platek4').style.opacity = 0
		document.querySelector('.platek5').style.opacity = 0
	} else {
		document.querySelector('.platek1').style.opacity = 100
		document.querySelector('.platek2').style.opacity = 100
		document.querySelector('.platek3').style.opacity = 100
		document.querySelector('.platek4').style.opacity = 100
		document.querySelector('.platek5').style.opacity = 100
	}
}
