class ClassificacaoPartidas {
    constructor(vitorias, derrotas) {
      this.vitorias = vitorias;
      this.derrotas = derrotas;
    }
  
    obterNivel() {
      const saldoVitorias = this.vitorias - this.derrotas;
  
      if (this.vitorias < 10) {
        return "Ferro";
      } else if (this.vitorias >= 11 && this.vitorias <= 20) {
        return "Bronze";
      } else if (this.vitorias >= 21 && this.vitorias <= 50) {
        return "Prata";
      } else if (this.vitorias >= 51 && this.vitorias <= 80) {
        return "Ouro";
      } else if (this.vitorias >= 81 && this.vitorias <= 90) {
        return "Diamante";
      } else if (this.vitorias >= 91 && this.vitorias <= 100) {
        return "Lendário";
      } else {
        return "Imortal";
      }
    }
  
    exibirMensagem() {
      const nivel = this.obterNivel();
      const saldoVitorias = this.vitorias - this.derrotas;
      console.log(`Matheus tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`);
    }
  }
  
  const classificacao = new ClassificacaoPartidas(150, 20);
  classificacao.exibirMensagem();
  