document.getElementById("cadastroForm").addEventListener("submit", function(event) {
  event.preventDefault(); 
 
  const email = document.getElementById("placa").value;
  const senha = document.getElementById("cpf").value;
 
 
  if (email === "" || senha === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }
 

  const userData = {
    email: email,
    senha: senha
  };
 

  localStorage.setItem("userData", JSON.stringify(userData));
 
  const cadastroMessage = document.getElementById("cadastroMessage");
  cadastroMessage.textContent = "Cadastro realizado com sucesso!";
  cadastroMessage.style.color = "green";
 
 
  document.getElementById("placa").value = '';
  document.getElementById("cpf").value = '';
});
 
  
  