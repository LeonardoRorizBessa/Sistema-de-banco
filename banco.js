function criar_cliente(nome, cpf, login, senha, saldoInicial, poupanca, credito) {
  return {
    nome: nome,
    cpf: cpf,
    login: login,
    senha: senha,
    saldo: saldoInicial,
    poupanca: poupanca,
    credito: credito,
    transacoes: [],
    tentativas_login: 0,

    depositar_dinheiro: function(valor) {
      if(valor > 0){
        this.saldo += valor;
        console.log(`R$ ${valor} adicionados. Novo saldo: R$ ${this.saldo}`);
      }
      else{
        console.log(`Valor inválido para depósito.`);
      }
    },

    sacar_dinheiro: function(valor) {
      if(this.saldo >= valor){
        this.saldo -= valor;
        console.log(`R$ ${valor} retirados. Novo saldo: R$ ${this.saldo}`);
      }
      else{
        console.log('Valor inválido para saque.');
      }
    },

    consultar_saldo: function() {
      console.log(`Saldo: R$ ${this.saldo}`);
    },

    consultar_cliente: function() {
      console.log(`Nome: ${this.nome}`);
      console.log(`CPF: ${this.cpf}`);
      console.log(`Login: ${this.login}`);
      console.log(`Senha: ${this.senha}`);
      console.log(`Saldo: R$ ${this.saldo}`);
      console.log(`Poupança: R$ ${this.poupanca}`);
      console.log(`Credito: R$ ${this.credito}`);
    },

    transferir_dinheiro: function(outroCliente, valor){
      if(this.saldo >= valor){
        this.saldo -= valor;
        outroCliente.saldo += valor;
        console.log(`Transfirido R$ ${valor} para ${outroCliente.nome}. Novo saldo: R$ ${this.saldo}`);
      }
      else{
        console.log(`Saldo insuficiente para transferência.`);
      }
    },

    autenticar: function(login, senha){
      if(this.login === login && this.senha === senha){
        this.tentativasLogin = 0;
        console.log(`Login bem-sucedido!`);
        return true;
      }
      else{
        this.tentativasLogin++;
        if(this.tentativasLogin >= 3){
          console.log(`Conta bloqueada após 3 tentativas inválidas!`);
          return false;
        }
        console.log(`Login ou senha incorretos! Tentativas: ${this.tentativasLogin}`);
        return false;
      }
    },

    mudar_senha: function(senhaAtual, novaSenha){
      if(this.senha === senhaAtual){
        this.senha = novaSenha;
        console.log(`Senha alterada com sucesso. Nova senha: ${novaSenha}`);
      }
      else{
        console.log(`Senha atual incorreta. Tente novamente.`);
      }
    },

    investir_poupanca: function(valor){
      if(this.saldo >= valor){
        this.saldo -= valor;
        this.poupanca += valor;
        console.log(`R$ ${valor} transfiridos para poupança. Novo saldo de poupança: R$ ${this.poupanca}`);
      }
      else{
        console.log(`Saldo insuficiente para investir.`);
      }
    },

    gerar_juros_poupanca: function(taxa){
      this.poupanca += this.poupanca * taxa;
      console.log(`Juros aplicados. Novo saldo de poupança: R$ ${this.poupanca}`);
    },

    credito_emprestimo: function(valor){
      if(valor <= this.credito){
        this.saldo += valor;
        this.credito -= valor;
        console.log(`R$ ${valor} retirados do credito. Novo saldo: R$ ${this.saldo}`);
      }
      else{
        console.log(`Saldo e limite de credito insuficiente.`);
      }
    },

    gerar_juros_credito: function(taxa){
      this.credito += this.credito * taxa;
      console.log(`Juros de crédito aplicados. Novo saldo de crédito: R$ ${this.credito}`);
    },

    registrar_transacoes: function(tipo, valor){
      this.transacoes.push({ tipo, valor, data: new Date() });
    },

    agendar_transacao: function(tipo, valor, data){
      this.transacoes.push({ tipo, valor, data });
      console.log(`Transação agendada para ${data}`);
    },
    
    gerar_extrato: function(){
      console.log(`Extrato Bancário: `);
      this.transacoes.forEach(transacao => {
        console.log(`${transacao.data} - ${transacao.tipo}: R$ ${transacao.valor}`);
      });
    },

    bloquear_conta: function(){
      this.status_conta = 'bloqueada';
      console.log(`Conta bloqueada.`);
    },

    desbloquear_conta: function(){
      this.status_conta = 'ativa';
      console.log(`Conta desbloqueada.`);
    }
  };
}

var cliente1 = criar_cliente('Leonardo', '111.222.333-44', 'LeoBessa', '12345678', 3000, 0,10000);

var cliente2 = criar_cliente('Pedro', '999.888.777-66', 'PedroSilva', '98765432', 2000, 0, 5000);