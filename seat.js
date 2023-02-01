const plane = document.querySelector('.plane')
const seats = document.querySelectorAll('.seat:not(.occupied)')

const count = document.getElementById('count')
const total = document.getElementById('total')

let ticketPrice = 120

plane.addEventListener('click', e=>{
    console.log(e.target);
    // if(e.target.classList.contains('.seat')){
    //     console.log(e.target);
    // }
})

