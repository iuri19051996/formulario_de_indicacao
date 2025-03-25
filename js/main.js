function enviarWhatsapp() {
  let nomeIndicado = document.getElementById("nome_indicado");
  let telefoneIndicado = document.getElementById("telefone_indicado");
  let emailIndicado = document.getElementById("email_indicado");
  let seuNome = document.getElementById("seu_nome");
  let telefoneLimpo = telefoneIndicado.value.replace(/\D/g, ''); // Remove caracteres não numéricos

  // Resetar classes de erro
  [nomeIndicado, telefoneIndicado, emailIndicado, seuNome].forEach(input => input.classList.remove('erro'));

  if (!nomeIndicado.value || telefoneLimpo.length !== 11 || !emailIndicado || !seuNome.value) {
      alert("Por favor, preencha todos os campos obrigatórios corretamente.");
      
      if (!nomeIndicado.value) nomeIndicado.classList.add('erro');
      if (telefoneLimpo.length !== 11) telefoneIndicado.classList.add('erro');
      if (!emailIndicado.value) emailIndicado.classList.add('erro');
      if (!seuNome.value) seuNome.classList.add('erro');

      return;
  }

  let mensagem = 
      `*Indicação de Cliente*\n━━━━━━━━━━━━━━━━━━━\n` +
      `*Nome:* ${nomeIndicado.value}\n` +
      `*Telefone:* ${telefoneLimpo}\n` +
      (emailIndicado.value ? `*Email:* ${emailIndicado.value}\n` : '') +
      `━━━━━━━━━━━━━━━━━━━\n` +
      `*Indicado por:* ${seuNome.value}`;

    let encodedMessage = encodeURIComponent(mensagem);
    let url = `https://api.whatsapp.com/send?text=${encodedMessage}`;

    // Abre o link em uma nova aba
    window.open(url, '_blank');
}

// Máscara para telefone
document.getElementById('telefone_indicado').addEventListener('input', function (e) {
  let input = e.target.value.replace(/\D/g, ''); // Remove não numéricos

  if (input.length > 11) input = input.slice(0, 11); // Limita a 11 dígitos

  let formatted = input;
  if (input.length > 2) formatted = `(${input.slice(0, 2)}) ${input.slice(2)}`;
  if (input.length > 6) formatted = `(${input.slice(0, 2)}) ${input.slice(2, 7)}${input.slice(7)}`;

  e.target.value = formatted;
});

 // Remove borda vermelha quando o usuário começa a digitar ou clica no campo
 document.querySelectorAll('input').forEach(input => {
  input.addEventListener('focus', function () {
      this.classList.remove('erro');
  });
  input.addEventListener('input', function () {
      this.classList.remove('erro');
  });
});