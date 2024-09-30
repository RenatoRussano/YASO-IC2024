export const loginUser = async (email, password) => {
  const loginData = {
    email: email,
    password: password,
  };

  try {
    const response = await fetch('https://yaso.azurewebsites.net/api/login', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });

    const responseText = await response.text();
    console.log('Response status:', response.status);
    console.log('Response body:', responseText);

    if (response.ok) {
      const result = JSON.parse(responseText);
      return result;
    } else {
      throw new Error(result.message || 'Erro ao fazer login');
    }
  } catch (error) {
    if (error.message === 'Failed to fetch') {
      throw new Error('Não foi possível se conectar ao servidor.');
    } else {
      throw new Error(error.message || 'Erro de rede desconhecido');
    }
  }
};
