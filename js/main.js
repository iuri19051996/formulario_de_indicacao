function enviarWhatsapp() {
  let nomeIndicado = document.getElementById("nome_indicado").value;
  let telefoneIndicado = document.getElementById("telefone_indicado").value.replace(/\D/g, ''); // Remove caracteres não numéricos
  let emailIndicado = document.getElementById("email_indicado").value;
  let seuNome = document.getElementById("seu_nome").value;

  if (!nomeIndicado || !telefoneIndicado || telefoneIndicado.length !== 11 || !seuNome) {
      alert("Por favor, preencha todos os campos obrigatórios corretamente.");
      return;
  }

  let mensagem = 
  `*Indicação de Cliente*\n━━━━━━━━━━━━━━━━━━━\n` +
  `*Nome:* ${nomeIndicado}\n` +
  `*Telefone:* ${telefoneIndicado}\n` +
  (emailIndicado ? `*Email:* ${emailIndicado}\n` : '') +
  `━━━━━━━━━━━━━━━━━━━\n` +
  `*Indicado por:* ${seuNome}`;

  let encodedMessage = encodeURIComponent(mensagem);
  
  let url = `https://api.whatsapp.com/send?text=${encodedMessage}`;

  window.location.href = url;
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