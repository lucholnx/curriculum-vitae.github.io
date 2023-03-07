
function mostrarbtn(){
    document.getElementById('lista_dp').style.display='block'
    document.getElementById('boton_dp').style.display='none'
}
function ocultarbtn (){
document.getElementById('lista_dp').style.display='none'
document.getElementById('boton_dp').style.display='block'
}
document.getElementById('boton_dp').addEventListener('click', mostrarbtn)

document.getElementById('boton_ocultar').addEventListener('click', ocultarbtn)



function mostrarbtn2(){
    document.getElementById('lista_fa').style.display='block'
    document.getElementById('boton_fa').style.display='none'
}

function ocultarbtn2 (){
document.getElementById('lista_fa').style.display='none'
document.getElementById('boton_fa').style.display="block"
}

document.getElementById('boton_fa').addEventListener('click', mostrarbtn2)
document.getElementById('boton_ocultar2').addEventListener('click', ocultarbtn2)