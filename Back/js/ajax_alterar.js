$(function () {
    // estas montam um objeto e enviam via json para serem alterados no BD
    window.alterarCliente = function () {
        let id = $("#altclienteId").val();
        let nome = $("#altclienteNome").val();
        let telefone = $("#altclienteTelefone").val();
        let email = $("#altclienteEmail").val();

        if (nome && telefone && email) {
            cliente = new Cliente(id, nome, telefone, email);
            let action = "updateCliente";

            $.ajax({
                    method: "POST",
                    url: window.urlController,
                    data: {
                        action: action,
                        data: JSON.stringify(cliente)
                    },
                    success: function (response) {
                        console.table(response);
                    }
                })
                .fail(function (response) {
                    console.log(response);
                })
        }
    }

    window.alterarPrato = function () {
        let id = $("#codigoPrato").val();
        let nome = $("#nomePrato").val();
        let valor = $("#valorPrato").val();
        let descricao = $("#descPrato").val();

        if (nome && valor && descricao) {
            prato = new Prato(id, nome, valor, descricao);
            let action = "updatePrato";

            $.ajax({
                    method: "POST",
                    url: "../Back/update/updatePrato.php",
                    data: {
                        action: action,
                        data: JSON.stringify(prato)
                    },
                    success: function (response) {
                        console.table(response);
                        alert('Sucesso!');
                        location.reload();
                    }
                })
                .fail(function (response) {
                    console.log(response);
                })
        }
    }

    window.alterarUsuario = function () {
        let id = $("#idUsuario").val();
        let nome = $("#nomeUsuario").val();
        let login = $("#loginUsuario").val();
        let senha = $("#senhaUsuario").val();

        if (nome && login && senha) {
            usuario = new Usuario(id, nome, login, senha, 1);
            let action = "updateUsuario";

            $.ajax({
                    method: "POST",
                    url: "../Back/update/updateUsuario.php",
                    data: {
                        action: action,
                        data: JSON.stringify(usuario)
                    },
                    success: function (response) {
                        console.table(response);
                        alert('Sucesso!');
                        location.reload();
                    }
                })
                .fail(function (response) {
                    console.log(response);
                })
        }
    }

    window.alterarMesa = function () {
        let id = $("#idMesa").val();
        let numero = $("#numeroMesa").val();
        let qt_cadeira = $("#cadeiraMesa").val();
        let desc = $("#descMesa").val();

        //id, numero, qt_cadeira_mesa, descricao, disponibilidade
        if (qt_cadeira && desc && numero) {
            mesa = new Mesa(id, numero, qt_cadeira, desc, 1);

            let action = "updateMesa";

            $.ajax({
                    method: "POST",
                    url: "../Back/update/updateMesa.php",
                    data: {
                        action: action,
                        data: JSON.stringify(mesa)
                    },
                    success: function (response) {
                        console.table(response);
                        alert('Sucesso!');
                        location.reload();
                    }
                })
                .fail(function (response) {
                    console.log(response);
                })
        }
    }

    window.alterarReserva = function () {
        let id = $("#altreservaId").val();
        let inicio = $("#altreservaHInicio").val();
        let termino = $("#altreservaHTermino").val();
        let idCliente = $("#altreservaIdCliente").val();
        let idMesa = $("#altreservaIdMesa").val();
        let pagamento = $("#altreservaPagamento").val();

        if (inicio && termino && idCliente && idMesa && refeicao) {

            cliente = $.map(clientes, function (n) {
                if (n.id_cliente == idCliente) {
                    return n;
                }
            });

            mesa = $.map(mesas, function (n) {
                // console.log(n);
                if (n.id_mesa == idMesa) {
                    return n;
                }
            });

            reserva = new Reserva(id, inicio, termino, cliente, mesa, refeicao, pagamento);

            let action = "updateReserva";

            $.ajax({
                    method: "POST",
                    url: window.urlController,
                    data: {
                        action: action,
                        data: JSON.stringify(reserva)
                    },
                    success: function (response) {
                        console.table(response);
                    }
                })
                .fail(function (response) {
                    console.log(response);
                })
        }
    }

    window.alterarPromocao = function () {
        let id = $("#idPromo").val();
        let nome = $("#nomePromo").val();
        let descricao = $("#descPromo").val()
        let valor = $("#valorPromo").val();

        if (id && nome && descricao && valor) {

            promocao = new Promocao(id, valor, nome, descricao, 1);

            let action = "updatePromocao";

            $.ajax({
                    method: "POST",
                    url: "../Back/update/updatePromocao.php",
                    data: {
                        action: action,
                        data: JSON.stringify(promocao)
                    },
                    success: function (response) {
                        console.table(response);
                        alert('Sucesso!');
                        location.reload();
                    }
                })
                .fail(function (response) {
                    console.log(response);
                })
        }
    }
});