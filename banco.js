function criar_cliente(nome, cpf, login, senha, saldoInicial, poupanca, credito) {
  return {
    nome: nome,
    cpf: cpf,
    login: login,
    senha: senha,
    saldo: saldoInicial,
    poupanca: poupanca,
    credito: credito,

    depositar_dinheiro: function(valor) {
      this.saldo += valor;
      console.log(`R$ ${valor} adicionados. Novo saldo: R$ ${this.saldo}`);
    },

    sacar_dinheiro: function(valor) {
      if (this.saldo >= valor) {
        this.saldo -= valor;
        console.log(`R$ ${valor} retirados. Novo saldo: R$ ${this.saldo}`);
      } else {
        console.log('Saldo insuficiente.');
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
        console.log(`Login bem-sucedido!`);
        return true;
      }
      else{
        console.log(`Login ou senha incorretos!`);
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

    gerarJuros: function(taxa){
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
    }
  };
}

var cliente1 = criar_cliente('Leonardo', '111.222.333-44', 'LeoBessa', '12345678', 3000, 0,10000);

var cliente2 = criar_cliente('Pedro', '999.888.777-66', 'PedroSilva', '98765432', 2000, 0, 5000);

cliente1.consultar_cliente();
cliente2.consultar_cliente();
//cliente1.depositar_dinheiro(1500);
//cliente1.sacar_dinheiro(3000);
//cliente1.sacar_dinheiro(2000);
//cliente1.consultar_saldo();
//cliente1.autenticar('LeoBessa', '12345678');
//cliente1.mudar_senha('12345678', '123456');
//cliente1.consultar_cliente();
//cliente1.investir_poupanca(500);
//cliente1.transferir_dinheiro(cliente2, 500);
//cliente2.transferir_dinheiro(cliente1, 1000);
//cliente1.credito_emprestimo(2000);
//cliente2.credito_emprestimo(7000);