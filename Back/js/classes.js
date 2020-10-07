$(function () {
    // classes (globais)
    class Cliente {
        id;
        nome;
        telefone;
        email;
        login;
        senha;

        constructor(id, nome, telefone, email, login, senha) {
            this.id = id;
            this.nome = nome;
            this.telefone = telefone;
            this.email = email;
            this.login = login;
            this.senha = senha;
        }
    }
    window.Cliente = Cliente;

    class Mesa {
        id;
        numero;
        qt_cadeira;
        descricao;
        disponibilidade;

        constructor(id, numero, qt_cadeira_mesa, descricao, disponibilidade) {
            this.id = id;
            this.numero = numero;
            this.qt_cadeira = qt_cadeira_mesa;
            this.descricao = descricao;
            this.disponibilidade = disponibilidade;
        }
    }
    window.Mesa = Mesa;

    class Prato {
        id;
        nome;
        valor;
        descricao;
        situacao;

        constructor(id, nome, valor, descricao, situa = 1) {
            this.id = id;
            this.nome = nome;
            this.valor = valor;
            this.descricao = descricao;
            this.situacao = situa;
        }
    }
    window.Prato = Prato;

    class Usuario {
        id;
        nome;
        login;
        senha;
        situacao;

        constructor(id, nome, login, senha, situa) {
            this.id = id;
            this.nome = nome;
            this.login = login;
            this.senha = senha;
            this.situacao = situa;
        }
    }
    window.Usuario = Usuario;

    class Reserva {
        id;
        hInicio;
        hTermino;
        cliente = new Cliente();
        mesa = new Mesa();
        prato = Array();
        pagamento;

        constructor(id, hInicio, hTermino, cliente, mesa, prato, pagamento) {
            this.id = id;
            this.hInicio = hInicio;
            this.hTermino = hTermino;
            this.cliente = cliente;
            this.mesa = mesa;
            this.prato = prato;
            this.pagamento = pagamento;
        }
    }
    window.Reserva = Reserva;

    class Promocao {
        id;
        valor;
        nome;
        descricao;
        situacao;

        constructor(id, valor, nome, descricao, situacao) {
            this.id = id;
            this.valor = valor;
            this.nome = nome;
            this.descricao = descricao;
            this.situacao = situacao;
        }
    }
    window.Promocao = Promocao;

    class Refeicao {
        prato = new Array();
        idReserva;

        constructor(idReserva = null) {
            this.idReserva = idReserva;
        }

        adicionarPrato(prato) {
            this.prato.push(prato);
        }
    }
    window.Refeicao = Refeicao;
});