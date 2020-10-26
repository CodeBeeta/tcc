$(function () {
    // estas montam um objeto e enviam via json para ser salvo no BD
    window.cadastrarCliente = function () {
        let nome = $("#clienteNome").val();
        let telefone = $("#clienteContato").val();
        let email = $("#clienteEmail").val();
        let login = $("#clienteLogin").val();
        let senha = $("#clienteSenha").val();

        if (nome && telefone && email) {
            cliente = new Cliente(null, nome, telefone, email, login, senha);

            $.ajax({
                    method: "POST",
                    url: "../Back/create/adicionarCliente.php",
                    data: {
                        data: JSON.stringify(cliente)
                    },
                    success: function (response) {
                        console.table(response);
                        alert("Cliente cadastrado com sucesso!");
                        constroiSessao();
                    }
                })
                .fail(function (response) {
                    console.log(response);
                })
        }
    }

    window.constroiSessao = function () {
        let nome = $("#clienteNome").val();
        let telefone = $("#clienteContato").val();
        let email = $("#clienteEmail").val();
        let login = $("#clienteLogin").val();
        let senha = $("#clienteSenha").val();

        cliente = new Cliente(null, nome, telefone, email, login, senha);

        $.ajax({
                method: "POST",
                url: urlSessao,
                data: {
                    data: JSON.stringify(cliente)
                },
                success: function (response) {
                    console.table(response);
                    location.reload();
                }
            })
            .fail(function (response) {
                console.log(response);
            })
    }

    window.cadastrarPrato = function () {
        let nome = $("#pratoNome").val();
        let valor = $("#pratoValor").val();
        let descricao = $("#pratoDescricao").val();

        if (nome && valor && descricao) {
            prato = new Prato(null, nome, valor, descricao);
            // console.log(prato);

            let action = "insertNewPrato";

            $.ajax({
                    method: "POST",
                    url: "../Back/create/insertNewPrato.php",
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

    window.cadastrarUsuario = function () {
        let nome = $("#usuarioNome").val();
        let login = $("#usuarioLogin").val();
        let senha = $("#usuarioSenha").val();
        console.log(nome);

        if (nome && login && senha) {
            user = new Usuario(null, nome, login, senha, 1);
            // console.log(prato);

            let action = "insertNewUsuario";

            $.ajax({
                    method: "POST",
                    url: "../Back/create/insertNewUsuario.php",
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
    }

    window.cadastrarMesa = function () {
        let numero = $("#mesaNumero").val();
        let qt_cadeira = $("#mesaCadeira").val();
        let desc = $("#mesaDesc").val();

        if (qt_cadeira && desc && numero) {
            mesa = new Mesa(null, numero, qt_cadeira, desc, 1);
            // console.log(mesa);

            let action = "insertNewMesa";

            $.ajax({
                    method: "POST",
                    url: "../Back/create/insertNewMesa.php",
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

    window.cadastrarReserva = function () {
        let inicio = $("#reservaHInicio").val();
        let termino = $("#reservaHTermino").val();
        let idCliente = $("#reservaIdCliente").val();
        let idMesa = $("#reservaIdMesa").val();
        let pagamento = $("#reservaPagamento").val();

        // console.log(refeicao);
        // console.log(clientes);
        // console.log(mesas);

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


            // console.log(mesa);
            reserva = new Reserva(null, inicio, termino, cliente, mesa, refeicao, pagamento);
            // console.log(reserva);

            let action = "insertNewReserva";

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

    window.cadastrarPromocao = function () {
        //let isPorcentagem = $("#promocaoIsPorcentagem:checked").val()
        let nome = $("#promoNome").val();
        let descricao = $("#promoDesc").val()
        let valor = $("#promoValor").val();

        if (nome && descricao && valor) {

            promocao = new Promocao(null, valor, nome, descricao, 1);

            let action = "insertNewPromocao";

            $.ajax({
                    method: "POST",
                    url: "../Back/create/insertNewPromocao.php",
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