$(document).ready(function () {
    $('.g-signin2').css('display', 'none');
    $("#google_login").click(function (e) {
        e.preventDefault();
        $('.abcRioButtonContentWrapper').click();
        Swal.fire({
            title: 'Carregando...',
            // html: 'I will close in <b></b> milliseconds.',
            timerProgressBar: true,
            allowOutsideClick: false,
            willOpen: () => {
                Swal.showLoading()
            },
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
            }
        })
    });

    $("#cadastrarPrato").click(function () {
        cadastrarPrato();
    });
    $("#cadastrarUsuario").click(function () {
        cadastrarUsuario();
    });
    $("#cadastrarMesa").click(function () {
        cadastrarMesa()
    });
    $("#cadastrarReserva").click(function () {
        cadastrarReserva()
    });
    $("#adicionarReservaPrato").click(function () {
        adicionarReservaPrato();
    });
    $("#cadastrarPromocao").click(function () {
        cadastrarPromocao();
    });

    $("#alterarCliente").click(function () {
        alterarCliente();
    });
    $("#alterarPrato").click(function () {
        alterarPrato();
    });
    $("#alterarUsuario").click(function () {
        window.alterarUsuario();
    });
    $("#alterarMesa").click(function () {
        alterarMesa()
    });
    $("#alterarReserva").click(function () {
        alterarReserva()
    });
    $("#alterarPromocao").click(function () {
        alterarPromocao();
    });

    $("#deletarCliente").click(function () {
        deletarCliente();
    });
    $("#deletarPrato").click(function () {
        deletarPrato();
    });
    $("#deletarUsuario").click(function () {
        deletarUsuario();
    });
    $("#deletarMesa").click(function () {
        deletarMesa()
    });
    $('.desativarPrato').click(function () {
        id = $(this).data('id')
        ativo = $(this).data('ativo');
        $('#delpratoId').val(id);
        $('#delpratoAtivo').val(ativo);
        deletarPrato();
    });
    $('.desativarMesa').click(function () {
        id = $(this).data('id')
        ativo = $(this).data('ativo');
        $('#delmesaId').val(id);
        $('#delmesaAtivo').val(ativo);
        deletarMesa();
    });
    $("#deletarReserva").click(function () {
        deletarReserva()
    });
    $("#deletarPromocao").click(function () {
        deletarPromocao();
    });
    $('.desativarPromocao').click(function () {
        id = $(this).data('id')
        ativo = $(this).data('ativo');
        $('#delpromoId').val(id);
        $('#delpromoAtivo').val(ativo);
        deletarPromocao();
    });
    $('.desativarUsuario').click(function () {
        id = $(this).data('id')
        ativo = $(this).data('ativo');
        $('#deluserId').val(id);
        $('#deluserAtivo').val(ativo);
        deletarUsuario();
    });

    $("#promocaoIsPorcentagem").change(function (e) {
        if (this.checked)
            $("#promocaoValor").attr("placeholder", "Porcentagem");
        else
            $("#promocaoValor").attr("placeholder", "Desconto em Real");
        $("#promocaoValor").val(0);
        mudarValorFinalPromocao();
    });
    $("#promocaoIdPrato").change(function (e) {
        mudarValorFinalPromocao();
    });
    $("#promocaoValor").change(function (e) {
        mudarValorFinalPromocao();
    });
});