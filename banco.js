function criar_cliente(nome, cpf, login, senha, saldoInicial) {
  return {
    nome: nome,
    cpf: cpf,
    login: login,
    senha: senha,
    saldo: saldoInicial,

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
    }
  };
}

var cliente1 = criar_cliente('Leonardo', '111.222.333-44', 'LeoBessa', '12345678', 3000);

cliente1.consultar_cliente();
cliente1.depositar_dinheiro(1500);
cliente1.sacar_dinheiro(3000);
cliente1.sacar_dinheiro(2000);
cliente1.consultar_saldo();