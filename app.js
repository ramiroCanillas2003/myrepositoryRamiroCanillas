/* SWEET ALERT */ 

const btn = document.getElementById('myBtn')
btn.addEventListener('click', () => {

    Swal.fire({
        title: 'Genial!',
        text: 'Haz clickeado el botón!',
        icon: 'success',
        confirmButtonText: 'Cool'
})
})