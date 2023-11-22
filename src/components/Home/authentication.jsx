export function authenticateUser(email, senha) {
    const usuarios = [
      {
        "name": "Rodrigo Fernandes",
        "email": "rodrigofserafim@gmail.com",
        "senha": "12345",
        "id": 1
      },
      {
        "name": "Matheus Zanardi",
        "email": "matheuszanardi@gmail.com",
        "senha": "12345",
        "id": 2
      },
      {
        "name": "Admin",
        "email": "admin@gmail.com",
        "senha": "12345",
        "id": 3
      }
    ];
  
    // Verifique se há um usuário com as credenciais fornecidas
    const user = usuarios.find(u => u.email === email && u.senha === senha);
  
    if (user) {
      // Armazena as informações do usuário no sessionStorage
      sessionStorage.setItem("user", JSON.stringify(user));
      return true; // Usuário autenticado com sucesso
    }
  
    return false; // Credenciais inválidas
  }
  
  export function isAuthenticated() {
    const storedUser = sessionStorage.getItem("user");
    return !!storedUser; // Retorna true se o usuário estiver autenticado, senão retorna false
  }