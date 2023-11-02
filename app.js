
let modal = document.getElementById('modal')
let close = document.getElementById('close');
let sendEmail =  document.getElementById('sendEmail');
let card = document.getElementById('card-basico')
let card2 = document.getElementById('card-inter')
let card3 = document.getElementById('card-premium')
let precio = document.getElementById('precio')
document.addEventListener('click', function(event){   
    if(event.target.id === 'btn-basico' ){
        montoTotal(400);     
    }else if(event.target.id === 'btn-intermedio'){
        montoTotal(1000);
    }else if(event.target.id === 'btn-premium'){
        montoTotal(1500);     
    }  
})

close.addEventListener('click', function(){
    card.classList.remove('d-none')
    card2.classList.remove('d-none')
    card3.classList.remove('d-none')
    modal.classList.add('d-none')        
})
sendEmail.addEventListener('click', function(){
    alert('enviado correctamente')
})
function montoTotal(valor) {
    let parrafo = modal.querySelector('p');

    if (parrafo) {        
        parrafo.innerText = 'Costo: $ ' + valor;
    } else {
        parrafo = document.createElement('p');
        parrafo.innerText = 'Costo: $ ' + valor;
        parrafo.classList.add('text-white');
        parrafo.classList.add('fw-bolder');
        parrafo.classList.add('text-center');
        parrafo.classList.add('mt-4');
        precio.appendChild(parrafo)
        
    }
    card.classList.add('d-none');
    card2.classList.add('d-none');
    card3.classList.add('d-none');
    modal.classList.remove('d-none');
}
