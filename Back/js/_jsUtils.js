$(function () {
    // este salva os pratos em um json no front
    function adicionarReservaPrato() {
        let idPrato = $("#reservaIdPrato").val();

        let refeicaoTable = $("#divRefeicaoReserva table");

        $("#reservaIdPrato").val(null);

        let prato = $.map(pratos, function (n) {
            if (n.id_prato == idPrato) {
                return n;
            }
        });

        refeicao.adicionarPrato(prato);
        // pratosRefeicao.push(prato);

        prato.forEach(element => {

            let tr = document.createElement("tr");

            let tdId = document.createElement("td");
            let tdNm = document.createElement("td");
            let tdVl = document.createElement("td");
            let tdDs = document.createElement("td");

            let textId = document.createTextNode(element.id_prato);
            let textNm = document.createTextNode(element.nm_prato);
            let textVl = document.createTextNode(element.vl_prato);
            let textDs = document.createTextNode(element.ds_prato);

            tdId.append(textId);
            tdNm.append(textNm);
            tdVl.append(textVl);
            tdDs.append(textDs);

            tr.append(tdId);
            tr.append(tdNm);
            tr.append(tdVl);
            tr.append(tdDs);

            refeicaoTable.append(tr);
        });
    }
    // calcular porcentagem
    function calcularPorcentagem(valor, porcentagem) {
        console.log(valor * (porcentagem / 100));

        return valor * (porcentagem / 100);
    }
    // calcula e exibe o desconto do prato
    function calcularValorFinal(id_prato, valor) {
        let prato = $.map(pratos, function (n) {
            if (n.id_prato == id_prato) {
                return n;
            }
        });

        if ($("#promocaoIsPorcentagem:checked").val())
            valorFinal = prato[0].vl_prato - calcularPorcentagem(prato[0].vl_prato, valor);
        else
            valorFinal = prato[0].vl_prato - valor;
        return valorFinal;
    }
    // muda o valor final do prato
    function mudarValorFinalPromocao() {
        let id_prato = $("#promocaoIdPrato").val();
        let valor = $("#promocaoValor").val();

        if (id_prato && valor) {
            let valorFinal = calcularValorFinal(id_prato, valor);
            $("#promocaoValorFinal").val(valorFinal);
            console.table(valor);
            console.table(valorFinal);
        }
    }
    // muda o valor final do prato
    function carregarDadosFormEditar(id_prato) {
        let prato = $.map(pratos, function (n) {
            if (n.id_prato == id_prato) {
                return n;
            }
        });
        prato = prato[0];
        $("#altpratoId").val(prato.id_prato);
        $("#altpratoNome").val(prato.nm_prato);
        $("#altpratoValor").val(prato.vl_prato);
        $("#altpratoDescricao").val(prato.ds_prato);
    }
});