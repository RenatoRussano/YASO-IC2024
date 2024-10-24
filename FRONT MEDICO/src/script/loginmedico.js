document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();  // Previne o comportamento padrão do form
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
  
    // Fazendo a requisição POST para a API de login
    fetch('http://localhost:3001/api/loginmedico/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ usuario, senha })
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // Armazenar os dados no localStorage para usar no perfil
          localStorage.setItem('medicoNome', data.medico.nome);
          localStorage.setItem('medicoNumeroYaso', data.medico.numeroYaso);
          localStorage.setItem('medicoFoto', data.medico.foto);
  
          // Redireciona para a página de perfil
          window.location.href = 'perfil.html';
        } else {
          // Exibir mensagem de erro
          document.getElementById('error-popup').style.display = 'block';
          document.getElementById('error-popup').textContent = data.message;
        }
      })
      .catch(error => {
        console.error('Erro:', error);
      });
  });
  