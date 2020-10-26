$(function () {
    // estas recebem um json, e exibe o resultado em uma tabela
    function selectAllPrato() {
        let action = "selectAllPrato";
        // console.log(action);

        $.ajax({
                method: "POST",
                url: window.urlController,
                data: {
                    action: action
                },
                success: function (response) {
                    let array = JSON.parse(response);

                    pratos = array;

                    // let divPrato = $("#divPrato");
                    // console.log(divPrato);
                    // let table = document.createElement("table");
                    let table = $(".tablePrato");

                    Object.keys(pratos).forEach(element => {
                        element = pratos[element];
                        // console.table(element);
                        // criando elementos da tabela
                        let tr = document.createElement("div");

                        let tdId = document.createElement("div");
                        let tdNm = document.createElement("div");
                        let tdVl = document.createElement("div");
                        let tdDs = document.createElement("div");
                        let tdAtivo = document.createElement("a");
                        let tdEditar = document.createElement("a");

                        let textId = document.createTextNode(element.id_prato);
                        let textNm = document.createTextNode(element.nm_prato);
                        let textVl = document.createTextNode(element.vl_prato);
                        let textDs = document.createTextNode(element.ds_prato);
                        let textAtivo = document.createTextNode("Ativo");
                        let textEditar = document.createTextNode("Editar");

                        // atribuindo classes
                        tr.className = "row";
                        tdId.className = "cell";
                        tdNm.className = "cell";
                        tdVl.className = "cell";
                        tdDs.className = "cell";
                        tdAtivo.className = "cell";
                        tdEditar.className = "cell atualizar";

                        tdId.append(textId);
                        tdNm.append(textNm);
                        tdVl.append(textVl);
                        tdDs.append(textDs);
                        tdAtivo.append(textAtivo);
                        tdEditar.append(textEditar);

                        tr.append(tdId);
                        tr.append(tdNm);
                        tr.append(tdVl);
                        tr.append(tdDs);
                        tr.append(tdAtivo);
                        tr.append(tdEditar);

                        // table.append(tr);
                        // divPrato.append(table);


                        $(tdAtivo).attr("id", "deletarPrato");
                        $(tdAtivo).attr("href", "#");
                        $(tdEditar).attr("href", "#");
                        // atribuindo funcao para carregar dados no form editar
                        $(tdEditar).click(function () {
                            carregarDadosFormEditar(element.id_prato);
                        });
                        $(tdAtivo).click(function () {
                            $("#delpratoId").val(element.id_prato);
                            deletarPrato();
                        });
                    });
                }
            })
            .fail(function (response) {
                console.log(response);
            })
    }

    function selectAllCliente() {
        let action = "selectAllCliente";
        // console.log(action);

        $.ajax({
                method: "POST",
                url: window.urlController,
                data: {
                    action: action
                },
                success: function (response) {
                    let array = JSON.parse(response);
                    // console.table(array);

                    clientes = array;

                    let divCliente = $("#divCliente");
                    // console.log(divCliente);
                    // let table = document.createElement("table");
                    let table = $("#divCliente table");
                    Object.keys(array).forEach(element => {
                        element = array[element];
                        let tr = document.createElement("tr");

                        let tdId = document.createElement("td");
                        let tdNm = document.createElement("td");
                        let tdEmail = document.createElement("td");
                        let tdTel = document.createElement("td");

                        let textId = document.createTextNode(element.id_cliente);
                        let textNm = document.createTextNode(element.nm_cliente);
                        let textEmail = document.createTextNode(element.nm_email_cliente);
                        let textTel = document.createTextNode(element.cd_telefone_cliente);

                        tdId.append(textId);
                        tdNm.append(textNm);
                        tdEmail.append(textEmail);
                        tdTel.append(textTel);

                        tr.append(tdId);
                        tr.append(tdNm);
                        tr.append(tdEmail);
                        tr.append(tdTel);

                        table.append(tr);
                        divCliente.append(table);
                    });
                }
            })
            .fail(function (response) {
                console.log(response);
            })
    }

    function selectAllMesa() {
        let action = "selectAllMesa";
        // console.log(action);

        $.ajax({
                method: "POST",
                url: window.urlController,
                data: {
                    action: action
                },
                success: function (response) {
                    // console.table(JSON.parse(response));
                    let array = JSON.parse(response);

                    mesas = array;

                    let divMesa = $("#divMesa");
                    let table = $("#divMesa table");

                    Object.keys(array).forEach(element => {
                        element = array[element];
                        let tr = document.createElement("tr");

                        let tdId = document.createElement("td");
                        let tdQt = document.createElement("td");

                        let textId = document.createTextNode(element.id_mesa);
                        let textQt = document.createTextNode(element.qt_cadeira_mesa);

                        tdId.append(textId);
                        tdQt.append(textQt);

                        tr.append(tdId);
                        tr.append(tdQt);

                        table.append(tr);
                        divMesa.append(table);
                    });
                }
            })
            .fail(function (response) {
                console.log(response);
            })
    }

    function selectAllReserva() {
        let action = "selectAllReserva";
        // console.log(action);

        $.ajax({
                method: "POST",
                url: window.urlController,
                data: {
                    action: action
                },
                success: function (response) {
                    // console.table(JSON.parse(response));
                    array = JSON.parse(response);

                    reservas = array;

                    let divReserva = $("#divReserva");
                    let table = $("#divReserva table");

                    array.forEach(element => {
                        let tr = document.createElement("tr");

                        let tdId = document.createElement("td");
                        let tdInicio = document.createElement("td");
                        let tdTermino = document.createElement("td");
                        let tdPagamento = document.createElement("td");
                        let tdCliente = document.createElement("td");
                        let tdMesa = document.createElement("td");

                        let textId = document.createTextNode(element.id_reserva);
                        let textInicio = document.createTextNode(element.dt_inicio_reserva);
                        let textTermino = document.createTextNode(element.dt_termino_reserva);
                        let textPagamento = document.createTextNode(element.dt_pagamento_reserva);
                        let textCliente = document.createTextNode(element.id_cliente);
                        let textMesa = document.createTextNode(element.id_mesa);

                        tdId.append(textId);
                        tdInicio.append(textInicio);
                        tdTermino.append(textTermino);
                        tdPagamento.append(textPagamento);
                        tdCliente.append(textCliente);
                        tdMesa.append(textMesa);

                        tr.append(tdId);
                        tr.append(tdInicio);
                        tr.append(tdTermino);
                        tr.append(tdPagamento);
                        tr.append(tdCliente);
                        tr.append(tdMesa);

                        table.append(tr);
                        divReserva.append(table);
                    });
                }
            })
            .fail(function (response) {
                console.log(response);
            })
    }

    function selectAllRefeicaoOfReserva(id_reserva) {
        let action = "selectAllRefeicaoOfReserva";
        // console.log(action);

        $.ajax({
                method: "POST",
                url: window.urlController,
                data: {
                    action: action,
                    id_reserva: id_reserva
                },
                success: function (response) {
                    if (response != 'null') {
                        // console.table(JSON.parse(response));
                        array = JSON.parse(response);

                        let divRefeicao = $("#divRefeicao");
                        let table = $("#divRefeicao table");
                        Object.keys(array).forEach(element => {
                            element = array[element];
                            let tr = document.createElement("tr");

                            let tdId = document.createElement("td");
                            let tdReserva = document.createElement("td");
                            let tdPrato = document.createElement("td");

                            let textId = document.createTextNode(element.id_refeicao);
                            let textReserva = document.createTextNode(element.id_reserva);
                            let textPrato = document.createTextNode(element.id_prato);

                            tdId.append(textId);
                            tdReserva.append(textReserva);
                            tdPrato.append(textPrato);

                            tr.append(tdId);
                            tr.append(tdReserva);
                            tr.append(tdPrato);

                            table.append(tr);
                            divRefeicao.append(table);
                        });
                    }
                }
            })
            .fail(function (response) {
                console.log(response);
            })
    }

    function selectAllPromocao() {
        let action = "selectAllPromocao";
        // console.log(action);

        $.ajax({
                method: "POST",
                url: window.urlController,
                data: {
                    action: action
                },
                success: function (response) {
                    // console.table(JSON.parse(response));
                    let array = JSON.parse(response);

                    promocoes = array;

                    let divPromocao = $("#divPromocao");
                    let table = $("#divPromocao table");

                    Object.keys(array).forEach(element => {
                        element = array[element];
                        let tr = document.createElement("tr");

                        let tdId = document.createElement("td");
                        let tdVlReal = document.createElement("td");
                        let tdVlPorc = document.createElement("td");
                        let tdIdPrato = document.createElement("td");

                        let textId = document.createTextNode(element.id_promocao);
                        let textVlReal = document.createTextNode(element.vl_promocao);
                        let textVlPorc = document.createTextNode(element.vl_porcentagem_promocao);
                        let textIdPrato = document.createTextNode(element.id_prato);

                        tdId.append(textId);
                        tdVlReal.append(textVlReal);
                        tdVlPorc.append(textVlPorc);
                        tdIdPrato.append(textIdPrato);

                        tr.append(tdId);
                        tr.append(tdVlReal);
                        tr.append(tdVlPorc);
                        tr.append(tdIdPrato);

                        table.append(tr);
                        divPromocao.append(table);
                    });
                }
            })
            .fail(function (response) {
                console.log(response);
            })
    }

    window.selectUserGoogle = function (cliente) {
        $.ajax({
                method: "POST",
                url: '../Back/select/selectUserEmail.php',
                data: {
                    data: JSON.stringify(cliente)
                },
                success: function (response) {
                    if (response == "1") {
                        new Promise(function (resolve, reject) {
                            swal.close();
                            resolve();
                        }).then(() => {
                            $("#etapa-realiza-login").fadeOut();
                            setTimeout(function () {
                                $("#etapa-pessoas").fadeIn();
                                $("#etapa-pessoas").css('display', 'flex');
                            }, 500);
                        });
                    } else {
                        setTimeout(function () {
                            new Promise(function (resolve, reject) {
                                swal.close();
                                resolve();
                            }).then(() => {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops!',
                                    text: 'O Usuário não foi encontrado, tente novamente!',
                                }).then(() => {
                                    signOut();
                                });
                            });
                        }, 1500);
                    }
                }
            })
            .fail(function (response) {
                console.log(response);
                new Promise(function (resolve, reject) {
                    swal.close();
                    resolve();
                }).then(() => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops!',
                        text: 'Erro ao entrar em contato com o servidor, tente novamente!',
                    }).then(() => {
                        signOut();
                    });
                });
            });
    }
    // para guardar os pratos
    var pratos = Array();
    // para guardar os pratos da reserva
    var refeicao = new Refeicao();
    // para guardar os clientes
    var clientes = Array();
    // para guardar as mesas
    var mesas = Array();
    // para guardar as promocoes
    var promocoes = Array();
    // para guardar as reservas
    var reservas = Array();
    // usado na selectAllRefeicaoOfReserva()
    var idReservaRefeicao = 19;


    // funções que populam a pagina
    selectAllPrato();
    selectAllCliente();
    selectAllMesa();
    selectAllReserva();
    selectAllRefeicaoOfReserva(idReservaRefeicao);
    selectAllPromocao();
});