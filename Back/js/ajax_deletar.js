$(function () {
    // requisicoes AJAX


    // estas montam um objeto e enviam via json para serem alterados no BD
    window.deletarCliente = function () {
        let idCliente = $("#delclienteId").val();

        if (idCliente) {
            cliente = $.map(clientes, function (n) {
                if (n.id_cliente == idCliente) {
                    return n;
                }
            });

            cliente = new Cliente(idCliente, cliente.nm_cliente, cliente.cd_telefone_cliente, cliente.nm_email_cliente);
            let action = "deleteCliente";

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

    window.deletarPrato = function () {
        let idPrato = $("#delpratoId").val();
        let situacao = $("#delpratoAtivo").val();

        prato = new Prato(idPrato, null, null, null, situacao);
        let action = "deletePrato";

        $.ajax({
                method: "POST",
                url: "../Back/update/desativarPrato.php",
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

    window.deletarUsuario = function () {
        let idUser = $("#deluserId").val();
        let situacao = $("#deluserAtivo").val();

        user = new Usuario(idUser, null, null, null, situacao);
        let action = "deleteUsuario";

        $.ajax({
                method: "POST",
                url: "../Back/update/desativarUsuario.php",
                data: {
                    action: action,
                    data: JSON.stringify(user)
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

    window.deletarMesa = function () {
        let idMesa = $("#delmesaId").val();
        let situacao = $("#delmesaAtivo").val();


        mesa = new Mesa(idMesa, null, null, null, situacao);

        let action = "deleteMesa";

        $.ajax({
                method: "POST",
                url: "../Back/update/desativarMesa.php",
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

    window.deletarReserva = function () {
        let idReserva = $("#delreservaId").val();

        if (idReserva) {
            let reserva = $.map(reservas, function (n) {
                if (n.id_reserva == idReserva) {
                    return n;
                }
            });
            reserva = reserva[0];
            reserva = new Reserva(idReserva, reserva.dt_inicio_reserva, reserva.dt_termino_reserva, reserva.id_cliente, reserva.id_mesa, null, reserva.dt_pagamento_reserva);
            console.table(reserva);

            let action = "deleteReserva";

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

    window.deletarPromocao = function () {
        let idPromo = $("#delpromoId").val();
        let situacao = $("#delpromoAtivo").val();


        if (idPromo && situacao) {
            promocao = new Promocao(idPromo, null, null, null, situacao);

            let action = "deletePromocao";

            $.ajax({
                    method: "POST",
                    url: "../Back/update/desativarPromocao.php",
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