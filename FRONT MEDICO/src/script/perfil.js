document.addEventListener("DOMContentLoaded", function() {
    const nome = localStorage.getItem('medico_nome');
    const yaso = localStorage.getItem('medico_yaso');
    const foto = localStorage.getItem('medico_foto');

    document.getElementById('medico-nome').textContent = nome;
    document.getElementById('medico-yaso').textContent = yaso;
    document.getElementById('medico-foto').src = foto;
});