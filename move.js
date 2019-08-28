document.addEventListener("mousemove", function(event){

const x = parseFloat(event.pageX)
const y = parseFloat(event.pageY)

const target = document.querySelector("p")
const targetCoords = target.getBoundingClientRect()

const targetX = targetCoords.left + (target.offsetWidth / 2)
const targetY = targetCoords.top + (target.offsetHeight / 2)

const angleX = (targetY - y) / -40
const angleY = (targetX - x) / 40

target.style.transform = "rotateX("+ angleX +"deg) rotateY("+ angleY +"deg)"

})