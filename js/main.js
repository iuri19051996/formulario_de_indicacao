function enviarWhatsapp() {
    let nomeIndicado = document.getElementById("nome_indicado").value;
    let telefoneIndicado = document.getElementById("telefone_indicado").value;
    let emailIndicado = document.getElementById("email_indicado").value;
    let seuNome = document.getElementById("seu_nome").value;

    if (!nomeIndicado || !telefoneIndicado || !seuNome) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    let mensagem = 
    `
*Indicação de Cliente*
━━━━━━━━━━━━━━━━━━━
*Nome:* ${nomeIndicado}  
*Telefone:* ${telefoneIndicado}  
${emailIndicado ? `*Email:* ${emailIndicado}  ` : ''}  
━━━━━━━━━━━━━━━━━━━
*Indicado por:* ${seuNome}   
    `;

    let url = `https://wa.me/?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}

document.getElementById('telefone_indicado').addEventListener('input', function (e) {
    let input = e.target.value;
  
    // Remove todos os caracteres que não são números
    input = input.replace(/\D/g, '');
  
    // Aplica a máscara
    if (input.length === 0) {
      e.target.value = '';
    } else if (input.length <= 2) {
      e.target.value = `(${input}`;
    } else if (input.length <= 6) {
      e.target.value = `(${input.slice(0, 2)}) ${input.slice(2)}`;
    }
  });
  