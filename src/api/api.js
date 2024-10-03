export const loginUser = async (email, password) => {
  const loginData = {
    email: email,
    password: password,
  };

  try {
    const response = await fetch('https://yaso.azurewebsites.net/users/login', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });

    const responseText = await response.text(); // Lê a resposta como texto primeiro
    console.log('Response status:', response.status);
    console.log('Response body:', responseText);

    // Se a resposta for bem-sucedida (código 2xx)
    if (response.ok) {
      try {
        const result = JSON.parse(responseText); // Tenta converter o corpo da resposta em JSON
        return result;
      } catch (error) {
        throw new Error('Erro ao analisar a resposta JSON.');
      }
    } else {
      // Tratamento de erro quando a resposta não é bem-sucedida
      let errorMessage = 'Erro ao fazer login';
      try {
        const errorResponse = JSON.parse(responseText);
        errorMessage = errorResponse.message || errorMessage;
      } catch (error) {
        // Se não for JSON, usa a resposta de texto como mensagem
        errorMessage = responseText;
      }
      throw new Error(errorMessage);
    }
  } catch (error) {
    if (error.message === 'Failed to fetch') {
      throw new Error('Não foi possível se conectar ao servidor.');
    } else {
      throw new Error(error.message || 'Erro de rede desconhecido');
    }
  }
};